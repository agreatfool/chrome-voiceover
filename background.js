var VoiceOver = function() {};

VoiceOver.prototype.execute = function(tabId) {
    console.log('VoiceOver Registered! ' + tabId);
};

VoiceOver.init = function() {
    if (!(window.$voiceover)) {
        window.$voiceover = new VoiceOver();
    }
};

//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
//    if (changeInfo.status === 'complete') {
//        VoiceOver.trigger(tabId);
//    }
//});

//chrome.tabs.onReplaced.addListener(function(tabId) {
//    console.log('onReplaced' + tabId);
//});

VoiceOver.init();