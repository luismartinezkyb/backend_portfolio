const {IncomingWebhook} = require('@slack/webhook');
const webHook =  new IncomingWebhook("https://hooks.slack.com/services/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") //rediseñamos y 
const loggerStream = {
    write: message=>{
        webHook.send({
            text:message
        })
        // console.log("MENSAJE LOGGER", message)
    }
};

module.exports = loggerStream;