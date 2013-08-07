chrome-voiceover
================

A chrome extension used to help user simplify the web page, it's built base on the evernote clearly extension.

### Purpose
These days I'm trying to use OS X VoiceOver speaker to "read" the web pages, to reduce the eyesight consumption in the day life. And I found, it's very hard to use VoiceOver to read the web pages, since they are too complicated. I have to skip web page elements one by one(buttons, links, etc) to find the real content I want. Thus I want to find a tool to simplify the web page.

Then I found the evernote clearly. But it's always in negative mode, you have to click the clearly button yourself to make it start to convert the web page. So I did some further development to make it easy to use when you closed your eyes.

### Keymap
All the keymap can be adjusted in file manifest.json.
Modify the `commands` part.

* Alt + Shift + K: just the same result as you click the extension button
* Alt + Shift + L: start/stop to convert every web page automatically
* Alt + Shift + O: open the original web page, remember you have to close the automatically mode first, otherwise the web page would be converted again

### PHP
The local storage data stored always be reset to init value, and I cannot fix the issue. So I made a PHP script to record the "automatically mode status".

You can find the php script `voiceover.php` in `php` folder. The redis is required, and redis connection host & port also defined in this script.

Find the php script reqeust url definition in `background_script__main.js:VoiceOver:phpScript`.

### White List
You may want to skip several sites not converted automatically. You can put them in the white list defined in file `background_script__main.js:VoiceOver:whiteList`. Please note, just put the domains in the list.

### Installation
* Clone the code to your disk.
* Open your chrome extension page: [chrome://extensions/](chrome://extensions/).
* Enable the chrome extension dev mode.
* Click the "load unpacked …" button, and direct it to the codes you checked out.
* Done.

### Note
This chrome extension is made base on the chrome extension: evernote clearly.
Please see [chrome web store](https://chrome.google.com/webstore/detail/clearly/iooicodkiihhpojmmeghjclgihfjdjhj).

The base version is `Clearly_v9.3374.665.504`.
You can find the crx & zip package in the folder `backup`.

I modified several scripts base on the clearly extension:

* manifest.json
* content.js
* background.html
* background_script__main.js

new added contents:

* sound/finished.mp3
* php/voiceover.php
* img/voicecall-16.png
* img/voicecall-19.png
* img/voicecall-48.png
* img/voicecall-128.png

### Contact Me
* gmail: nightghost5078@gmail.com
* weibo: [http://weibo.com/xenojoshua](http://weibo.com/xenojoshua)
* site: [http://xenojoshua.com](http://xenojoshua.com)