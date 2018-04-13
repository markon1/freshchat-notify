chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo);
    if(!!tab.url && tab.url.includes('web.freshchat.com') && !!changeInfo.title && changeInfo.title.includes('(')){
        var myAudio = new Audio(); // create the audio object
        myAudio.src = "tone.mp3"; // assign the audio file to its src
        myAudio.play(); // play the tone
    }
 });