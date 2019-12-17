let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {

    console.log('Hello');
    sns.publish({
        Message: "ddd",
        TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
        MessageStructure: "String",
        MessageAttributes: {}
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};