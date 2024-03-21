import * as amqp from "amqplib";

class RabbitMQConnector {
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
        this.confirmChannel.consume("to_uploader", (message) => {
            const uploadData = JSON.parse(message.content.toString());
            for(const data of uploadData)
            {
                console.log(data);
            }
            this.confirmChannel.ack(message);
        });
    }
}

export default RabbitMQConnector;