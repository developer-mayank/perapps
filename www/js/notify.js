var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyDbk-xL-ZVb4205Ban3aCkKCXHcQQBUexQ');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bFLSHpB-wr55AopigqRK9R9_WqfOCTcxPOAkUg6a5CfHb_ovS0nlJLbMYd1c8Y0FCsnWEl2qxpEX7edXqRie73fo_3pfHQEj_FnnCze9aKjyPT_WZuOXeVOKOsGl0SkELe0E30BdTumhNRTghYPCVnCSBWiqe9W_gL17Hd-Ay1oF1H4Sqk');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});