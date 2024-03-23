import * as amqp from "amqplib";
import { uploadReportData, uploadFightData, uploadResultData } from "./core.js";


class RabbitMQConnector {
    rejectMessage(message) {
        if(message.fields.redelivered === true)
            this.confirmChannel.reject(message, false);
        else
            this.confirmChannel.reject(message, true);
    }


    async connectRabbit() {
        try {
            this.connection = await amqp.connect("amqp://localhost");        
        }
        catch (err) {
            console.log("Problem creating connection to RabbitMq");
            throw err;
        }
        
        try {
            this.confirmChannel = await this.connection.createConfirmChannel();
        }
        catch (err) {
            console.log("Problem creating channel");
            throw err;
        }
        
        await this.confirmChannel.assertExchange("upload_exchange", "direct", {durable: false});
        await this.confirmChannel.assertQueue("to_uploader", {durable: false});
        await this.confirmChannel.bindQueue("to_uploader", "upload_exchange");
    }
    

    async receiveData() {
        this.confirmChannel.consume("to_uploader", async (message) => {
            console.log("Starting Job...");
            let uploadData = null;

            try {
                uploadData = JSON.parse(message.content.toString());
            }
            catch (err) {
                console.log("Malformed json object!");
                this.rejectMessage(message);
                throw err;
            }

            try {
                for(const data of uploadData)
                {
                    if(!data.metadata.hasOwnProperty("match_id"))
                        throw new Error("No match id specified...");

                    switch(data.metadata.type)
                    {
                        case "REPORT":
                            await uploadReportData(data);
                            break;
                        case "FIGHT":
                            await uploadFightData(data);
                            break;
                        case "MODEL_RESULT":
                            await uploadResultData(data);
                            break;
                        default:
                            throw new Error(`Wrong metadata.type: ${data.metadata.type}`);
                    }
                }
            }
            catch (err) {
                console.log("Error Completing Job...")
                this.rejectMessage(message);
                throw err;
            }
            this.confirmChannel.ack(message);
            console.log("Completed Job!");
        });
    }
}

export default RabbitMQConnector;