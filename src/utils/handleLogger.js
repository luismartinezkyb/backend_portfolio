const {IncomingWebhook} = require('@slack/webhook');
const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

const webHook =  new IncomingWebhook(SLACK_WEBHOOK) //rediseñamos y 
const loggerStream = {
    write: message=>{
        webHook.send({
            text:message
        })
        // console.log("MENSAJE LOGGER", message)
    }
};

module.exports = loggerStream;