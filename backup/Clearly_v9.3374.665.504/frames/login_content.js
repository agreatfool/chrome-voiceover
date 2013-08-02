
    //	events
    //  ======
        	
	/*
		first three variables will be defined
	*/

	var 
		__custom_events__names_to_keys = {},
		__custom_events__keys_to_names = {},
		__custom_events__names_to_objects = {},
		
		__custom_events =
		[
			['to-extension--open--settings',                                'click-111-111-111-111-1-1-1'],
			['to-extension--open--settings--theme',                         'click-112-112-112-112-1-1-1'],
			['to-extension--open--settings--speech',                        'click-113-113-113-113-1-1-1'],
			
            ['to-extension--open--premium', 			                    'click-114-114-114-114-1-1-1'],
            ['to-extension--open--password-reset', 			                'click-115-115-115-115-1-1-1'],
            ['to-extension--open--two-factor-help', 			            'click-116-116-116-116-1-1-1'],

            /* === */

			['to-extension--select--theme--theme-1', 			            'click-121-121-121-121-1-1-1'],
			['to-extension--select--theme--theme-2', 				        'click-122-122-122-122-1-1-1'],
			['to-extension--select--theme--theme-3', 		    	        'click-123-123-123-123-1-1-1'],
			['to-extension--select--theme--custom', 	    		        'click-124-124-124-124-1-1-1'],

			['to-extension--select--size--small',     			            'click-125-125-125-125-1-1-1'],
			['to-extension--select--size--medium', 			                'click-126-126-126-126-1-1-1'],
			['to-extension--select--size--large', 		    	            'click-127-127-127-127-1-1-1'],

			['to-extension--select--related-notes--just-at-bottom',         'click-128-128-128-128-1-1-1'],
			['to-extension--select--related-notes--disabled', 		        'click-129-129-129-129-1-1-1'],

            /* === */
			
			['to-extension--track--view', 			                        'click-131-131-131-131-1-1-1'],
			['to-extension--track--clip', 		    	                    'click-132-132-132-132-1-1-1'],
			['to-extension--track--theme-popup', 			                'click-133-133-133-133-1-1-1'],
			['to-extension--track--settings', 			                    'click-134-134-134-134-1-1-1'],
			['to-extension--track--speech-start', 			                'click-135-135-135-135-1-1-1'],

			['to-extension--track--first-show--check', 			            'click-136-136-136-136-1-1-1'],
			['to-extension--track--first-show--mark', 			            'click-137-137-137-137-1-1-1'],
            
            /* === */
            
			['to-extension--evernote--clip', 				                'click-141-141-141-141-1-1-1'],
			['to-extension--evernote--clip-highlights', 		            'click-142-142-142-142-1-1-1'],
			['to-extension--evernote--speech-start', 		                'click-143-143-143-143-1-1-1'],
            ['to-extension--evernote--get-recommendation', 		            'click-144-144-144-144-1-1-1'],

         /* ['to-extension--evernote--get-user', 		                    'click-145-145-145-145-1-1-1'], */
         /* ['to-extension--evernote--unset-tag', 				            'click-146-146-146-146-1-1-1'], */
         /* ['to-extension--evernote--unset-notebook', 		                'click-147-147-147-147-1-1-1'], */
			
            ['to-extension--evernote--login--do', 				            'click-151-151-151-151-1-1-1'],
            ['to-extension--evernote--login--do-second-factor',             'click-152-152-152-152-1-1-1'],
            ['to-extension--evernote--login--request-load--from-outside',   'click-153-153-153-153-1-1-1'],
			['to-extension--evernote--login--switch-to-cn',                 'click-154-154-154-154-1-1-1'],
            ['to-extension--evernote--login--switch-to-in',                 'click-155-155-155-155-1-1-1'],
            
             /*
                login--do:
                    triggered by:   frame -- when button is pressed
                    operates in:    background, frame -- gets the username/password from the frame, and performs a background login
                    triggers:       browser...login--successful/failed/failed--username/failed--password/failed--password-reset

                login--do-second-factor:
                    triggered by:   frame -- when button is pressed, in the "enter code" view
                    operates in:    background, frame -- gets the code from the frame, and performs a background completeLogin
                    triggers:       browser...login--successful/failed--second-factor/failed--second-factor-timeout

                login--request-load--from-outside:
                    triggered by:   html -- after clearly has launched; firefox only
                    operates in:    background -- forces the loading of the url into the frame; and then loads everything else too
                
                login--switch-to-cn/in:
                    triggered by:   frame -- when user clicks on china/international toggle
                    operates in:    background -- switches the background china-mode on/off
                    triggers:       browser...login--set--in/in-cn/cn/cn-in
             */   
            
         /* ['to-extension--evernote--register--do', 				        'click-161-161-161-161-1-1-1'], */
         /* ['to-extension--evernote--register--request-load--from-outside','click-162-162-162-162-1-1-1'], */
		 /*	['to-extension--evernote--register--switch-to-cn',              'click-164-164-164-164-1-1-1'], */
         /* ['to-extension--evernote--register--switch-to-in',              'click-165-165-165-165-1-1-1'], */
            
            /* ========================================================================================= */
            
            ['to-browser--evernote--login--show', 		                    'click-211-211-211-211-1-1-1'],
            ['to-browser--evernote--login--show--in-frame', 		        'click-212-212-212-212-1-1-1'],
            ['to-browser--evernote--login--request-second-factor', 		    'click-213-213-213-213-1-1-1'],
            
            ['to-browser--evernote--login--set--in',                        'click-214-214-214-214-1-1-1'],
            ['to-browser--evernote--login--set--in-cn', 	                'click-215-215-215-215-1-1-1'],
			['to-browser--evernote--login--set--cn', 	                    'click-216-216-216-216-1-1-1'],
            ['to-browser--evernote--login--set--cn-in',  	                'click-217-217-217-217-1-1-1'],

			['to-browser--evernote--login--successful', 		            'click-221-221-221-221-1-1-1'],

			['to-browser--evernote--login--failed', 		    	        'click-222-222-222-222-1-1-1'],
			['to-browser--evernote--login--failed--username',               'click-223-223-223-223-1-1-1'],
			['to-browser--evernote--login--failed--password',               'click-224-224-224-224-1-1-1'],
			['to-browser--evernote--login--failed--password-reset',         'click-225-225-225-225-1-1-1'],

			['to-browser--evernote--login--failed--two-factor--code',       'click-226-226-226-226-1-1-1'],
			['to-browser--evernote--login--failed--two-factor--timeout',    'click-227-227-227-227-1-1-1'],

         /*
            login--show:
                triggered by:   background -- when it detects that login is needed; should be triggered after login-show--in-frame
                operates in:    html -- shows the login dialog

            login--show--in-frame:
                triggered by:   background -- when it detects that login is needed; should be triggered before login-show
                operates in:    frame -- does stuff inside the login frame; like, for example, clear the errors from last time

            login--request-second-factor:
                triggered by:   background -- when it detects that second factor is needed
                operates in:    frame -- does stuff inside the login frame: shows the second-factor view
                
            login--set--in/in-cn/cn/cn-in:
                triggered by:   background -- after a request has been sent from the frame, the background performs switch, and responds with this event
                operates in:    frame -- switches around the on/off toggles for china/international
                
            login--failed/failed--username/failed--password
                triggered by:   background -- after the login button was pressed in the frame, it sent an event to the background, which tried to login with the supplied details; the background is now responding with this event
                operates in:    frame -- frame will display the error

            login--failed--password-reset/two-factor
                triggered by:   background -- after the login button was pressed in the frame, it sent an event to the background, which tried to login with the supplied details; the background is now responding with this event
                operates in:    html -- display error dialog for password reset
                
            login--successful:
                triggered by:   background; same as above
                operates in:    html -- will hide the login dialog, and continue performing whatever operation is was trying to do before
         */

            /* === */
            
         /* ['to-browser--evernote--register--show', 		                'click-231-231-231-231-1-1-1'], */
         /* ['to-browser--evernote--register--show--in-frame', 		        'click-232-232-232-232-1-1-1'], */

         /* ['to-browser--evernote--register--set--in',                     'click-234-234-234-234-1-1-1'], */
         /* ['to-browser--evernote--register--set--in-cn', 	                'click-235-235-235-235-1-1-1'], */
		 /*	['to-browser--evernote--register--set--cn', 	                'click-236-236-236-236-1-1-1'], */
         /* ['to-browser--evernote--register--set--cn-in',  	            'click-237-237-237-237-1-1-1'], */

		 /*	['to-browser--evernote--register--successful', 		            'click-241-241-241-241-1-1-1'], */
		 /*	['to-browser--evernote--register--failed', 		    	        'click-242-242-242-242-1-1-1'], */
            
            /* === */

			['to-browser--evernote--clip--successful', 		                'click-251-251-251-251-1-1-1'],
			['to-browser--evernote--clip--failed', 			                'click-252-252-252-252-1-1-1'],

			['to-browser--evernote--clip-highlights--successful',           'click-253-253-253-253-1-1-1'],
			['to-browser--evernote--clip-highlights--failed',               'click-254-254-254-254-1-1-1'],

			['to-browser--evernote--get-recommendation--successful',        'click-255-255-255-255-1-1-1'],
			['to-browser--evernote--get-recommendation--failed',            'click-256-256-256-256-1-1-1'],
            
            ['to-browser--evernote--speech--go',  		                    'click-257-257-257-257-1-1-1'],
            
            /* === */
            
			['to-browser--show--dialog-first--all-features',                'click-261-261-261-261-1-1-1'],
			['to-browser--show--dialog-first--new-features',                'click-262-262-262-262-1-1-1'],
            
			['to-browser--show--dialog-speech--need-login',                 'click-263-263-263-263-1-1-1'],
			['to-browser--show--dialog-speech--need-premium',               'click-264-264-264-264-1-1-1']
        ]
	;

	for (var i=0,_i=__custom_events.length,e=false,k=false; i<_i; i++)
	{
		e = __custom_events[i];
		k = e[1].split('-');
		
		__custom_events__names_to_keys[e[0]] = e[1];
		__custom_events__keys_to_names[e[1]] = e[0];
		__custom_events__names_to_objects[e[0]] =
		{
			'_1': k[1],
			'_2': k[2],
			'_3': k[3],
			'_4': k[4],
			'_5': (k[5] == 1 ? true : false),
			'_6': (k[6] == 1 ? true : false),
			'_7': (k[7] == 1 ? true : false)
		};
	}
	
	var __custom_events__get_key = function (_event)
	{
		return 'click'
			+'-'+_event.screenX
			+'-'+_event.screenY
			+'-'+_event.clientX
			+'-'+_event.clientY
			+'-'+(_event.ctrlKey ? 1 : 0)
			+'-'+(_event.altKey ? 1 : 0)
			+'-'+(_event.shiftKey ? 1 : 0)
		;
	};
	
	var __custom_events__dispatch = function (_custom_event_object, _document, _window)
	{
		var _e = _document.createEvent("MouseEvents");
		
		_e.initMouseEvent(
			"click", true, true, _window, 0, 
                _custom_event_object['_1'], _custom_event_object['_2'], 
                _custom_event_object['_3'], _custom_event_object['_4'], 
                _custom_event_object['_5'], 
                _custom_event_object['_6'], 
                _custom_event_object['_7'], 
			false, 0, null
		);
		
		_document.dispatchEvent(_e);
	};
	


    //  from extension, to browser
    //  ==========================
        chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
        {
            //	invalid
            if (request._type); else { sendResponse({}); }

            //  first switch
            switch (request._type)
            {
                case 'to-content--evernote--login--request-second-factor':
                    var _number = document.getElementById('evernote_two_factor__message__sms__number');
                    if (_number) { _number.innerHTML = request._deliveryHint; }
                    break;
            }

            //	switch
            switch (request._type)
            {
                case 'to-content--evernote--login--request-second-factor':          __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--request-second-factor'],          window.document, window); break;

                case 'to-content--evernote--login--show--in-frame':                 __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--show--in-frame'],                 window.document, window); break;
                
                case 'to-content--evernote--login--set--in':                        __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--set--in'],                        window.document, window); break;
                case 'to-content--evernote--login--set--in-cn':                     __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--set--in-cn'],                     window.document, window); break;
                case 'to-content--evernote--login--set--cn':                        __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--set--cn'],                        window.document, window); break;
                case 'to-content--evernote--login--set--cn-in':                     __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--set--cn-in'],                     window.document, window); break;

                case 'to-content--evernote--login--failed':                         __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed'],                         window.document, window); break;
                case 'to-content--evernote--login--failed--username':		        __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed--username'],               window.document, window); break;
                case 'to-content--evernote--login--failed--password':               __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed--password'],               window.document, window); break;

                case 'to-content--evernote--login--failed--two-factor--code':		 __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed--two-factor--code'],      window.document, window); break;
                case 'to-content--evernote--login--failed--two-factor--timeout':     __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed--two-factor--timeout'],   window.document, window); break;
            }
            
            //	blank on all
            //  sendResponse({});
        });
    
    
    //  from browser, to extension
    //  ==========================
        window.document.addEventListener('click', function(_event)
        {
            var 
                _event_key = __custom_events__get_key(_event),
                _event_name = __custom_events__keys_to_names[_event_key],
                _stop = false
            ;
            
            switch (_event_name)
            {
                case 'to-extension--evernote--login--do':
                    var 
                        _doc = document,
                        
                        _userElement = _doc.getElementById('evernote_login__username'),
                        _passElement = _doc.getElementById('evernote_login__password'),
                        _rememberMeElement = _doc.getElementById('evernote_login__rememberMe'),

                        __user = (_userElement.value > '' ? _userElement.value : ''),
                        __pass = (_userElement.value > '' ? _passElement.value : ''),
                        __rememberMe = (_rememberMeElement.checked == true ? true : false)
                    ;
                
                    chrome.extension.sendRequest({
                        '_type': 'to-chrome--evernote--login--do',
                        '_user': __user,
                        '_pass': __pass,
                        '_rememberMe': __rememberMe
                    });
                    _stop = true;
                    break;

                case 'to-extension--evernote--login--do-second-factor':
                    var 
                        _doc = document,
                        _codeElement = _doc.getElementById('evernote_two_factor__code'),
                        __code = (_codeElement.value > '' ? _codeElement.value : '')
                    ;
                
                    chrome.extension.sendRequest({
                        '_type': 'to-chrome--evernote--login--do-second-factor',
                        '_code': __code
                    });
                    _stop = true;
                    break;

                case 'to-extension--evernote--login--switch-to-cn': 
                    chrome.extension.sendRequest({ '_type': 'to-chrome--evernote--login--switch-to-cn'});
                    _stop = true;
                    break;
                
                case 'to-extension--evernote--login--switch-to-in':
                    chrome.extension.sendRequest({ '_type': 'to-chrome--evernote--login--switch-to-in'});
                    _stop = true;
                    break;
                    
                case 'to-extension--open--two-factor-help':
                    chrome.extension.sendRequest({ '_type': 'to-chrome--open--two-factor-help' });
                    _stop = true;
                    break;
            }
        
            if (_stop)
            {
                _event.stopPropagation();
                _event.preventDefault();
            }
        
        }, true);
    
    
    //  load definitions/bulk.js
    //  ========================

        chrome.extension.sendRequest({ '_type': "to-chrome--get-keyboard-info" }, function(response)
        {
            var __definition_items_html = response._definition_items_html;
        
            //  set definitions
            //  ===============
        
                var 
                    _d22 = document, 
                    _b22 = _d22.getElementsByTagName('body')[0], 
                    _o22 = _d22.getElementById('__readable_extension_definitions')
                ;

                //	create, if not present
                if (_o22); else
                {
                    _o22 = _d22.createElement('dl');
                    _o22.setAttribute('style', 'display: none;');
                    _o22.setAttribute('id', '__readable_extension_definitions');
                    _b22.appendChild(_o22);
                }

                //  set
                _o22.innerHTML = __definition_items_html;
        
            //  load bulk
            //  =========
        
                var _bulk = document.createElement('script');
                    _bulk.setAttribute('src', 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/frames/login_bulk.js');
                    document.getElementsByTagName('body')[0].appendChild(_bulk);
        });
    