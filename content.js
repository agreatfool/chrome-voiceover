
	//	events
	//	======
	
		//	include
			
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
	

		//	browser and content
		
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
	{
		//	invalid
		if (request._type); else { sendResponse({}); }

        //  first switch
        switch (request._type)
        {
			case 'to-content--evernote--get-recommendation--successful':
				var 
					_iframe = document.getElementById('readable_iframe'),
                    
					_recommendationInject_documentToInjectInto = (_iframe.contentDocument || _iframe.contentWindow.document),
                    _recommendationInject_filingRecommendation = request._recommendation
                ;

				//	include
				
    //  global vars
    //      _recommendationInject_documentToInjectInto
    //      _recommendationInject_filingRecommendation

    //  log
    //  console.log(_recommendationInject_filingRecommendation);
        
    
    //  RelatedNotes
    //  ============
    
        (function () 
        {
            //  __escapeForHTML
                
    //  escapeForHTML
    //  =============
        function __escapeForHTML(_string)
        {
            var _replace = {
                "&": "amp", 
                '"': "quot", 
                "<": "lt", 
                ">": "gt"
            };
            
            return _string.replace(
                /[&"<>]/g,
                function (_match) { return ("&" + _replace[_match] + ";"); }
            );
        }

        
            //  return?
            //  =======
                var _injected_element = _recommendationInject_documentToInjectInto.getElementById('relatedNotes__injected');
                
                //  check
                if (_injected_element.innerHTML == 'yup') { return; }
                
                //  set
                _injected_element.innerHTML = 'yup';
                
            //  notes & inject
            //  ==============
                var 
                    _notes = [],
                    _recommendationInject_injectNote = function (_html_id, _note_index)
                    {
                        var
                            _element = _recommendationInject_documentToInjectInto.getElementById(_html_id),
                            _data = _notes[_note_index]
                        ;
                        
                        //  invalid
                        if (_element && _data); else { return; }

                        //  thumbnail
                        var _thumbnail = _data.absoluteURL__thumbnail;
                        
                        //  thumbnail retina
                        if (true
                            && (_recommendationInject_documentToInjectInto.defaultView)
                            && (_recommendationInject_documentToInjectInto.defaultView.devicePixelRatio)
                            && (_recommendationInject_documentToInjectInto.defaultView.devicePixelRatio == 2))
                        { _thumbnail = _thumbnail.replace(/size=75$/, 'size=150'); }
                        
                        //  write
                        _element.innerHTML = ''
                            + '<div class="text">'
                            +   '<a target="_blank" href="'+__escapeForHTML(_data.absoluteURL__noteView)+'" class="title">'+__escapeForHTML(_data.title)+'</a>'
                          //+   '<a target="_blank" href="'+__escapeForHTML(_data.absoluteURL__noteView)+'" class="date">'+__escapeForHTML(((new Date(_data.created)).toDateString()))+'</a>'
                            +   '<a target="_blank" href="'+__escapeForHTML(_data.absoluteURL__noteView)+'" class="snippet">'+__escapeForHTML(_data.snippet)+'</a>'
                            +   '<a target="_blank" href="'+__escapeForHTML(_data.absoluteURL__noteView)+'" class="img" style="' + (_thumbnail == 'none' ? '' : 'background-image: url(\''+__escapeForHTML(_thumbnail)+'\');') + '"></a>'
                            + '</div>'
                        ;
                        
                        //  opening evernote links
                        var _links = _element.getElementsByTagName('a');
                        for (var i=0, _i=_links.length; i<_i; i++)
                        {
                            if (_links[i].getAttribute('href').match(/^evernote:\/\/\//gi))
                                { _links[i].setAttribute('target', ''); }
                        }
                    }
                ;
                
            //  which notes
            //  ===========
                var 
                    _hasNotes = false, 
                    _hasBusinessNotes = false
                ;
                
                //  personal
                if (true
                    && _recommendationInject_filingRecommendation.relatedNotes 
                    && _recommendationInject_filingRecommendation.relatedNotes.list 
                    && _recommendationInject_filingRecommendation.relatedNotes.list.length
                    && _recommendationInject_filingRecommendation.relatedNotes.list.length > 0) { _hasNotes = true; }
                
                //  business
                if (true
                    && _recommendationInject_filingRecommendation.businessRecommendation
                    && _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes 
                    && _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes.list 
                    && _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes.list.length
                    && _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes.list.length > 0) { _hasBusinessNotes = true; }

                //  cases
                switch (true)
                {
                    case (_hasNotes && _hasBusinessNotes):
                        _notes = [
                            _recommendationInject_filingRecommendation.relatedNotes.list[0],
                            _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes.list[0]
                        ];
                        break;
                        
                    case (_hasNotes && !_hasBusinessNotes):
                        _notes = _recommendationInject_filingRecommendation.relatedNotes.list;
                        break;
                        
                    case (_hasBusinessNotes && !_hasNotes):
                        _notes = _recommendationInject_filingRecommendation.businessRecommendation.relatedNotes.list;
                        break;
                }
                    
            //  actually inject
            //  ===============
                if (_notes.length > 0)
                {
                    //  show
                    var _notesElement = _recommendationInject_documentToInjectInto.getElementById('relatedNotes');
                    if (_notesElement) { _notesElement.className = 'none'; }
                    
                    //  need to be in this order
                    _recommendationInject_injectNote('relatedNotes__first', 0);
                    _recommendationInject_injectNote('relatedNotes__second', 1);
                }
            
        })();

				break;

            case 'to-content--evernote--clip--successful':
			case 'to-content--evernote--clip-highlights--successful':
				var 
					_iframe = document.getElementById('readable_iframe'),
                    
					_infoInject_documentToInjectInto = (_iframe.contentDocument || _iframe.contentWindow.document),
                    _infoInject_filingInfo = request._info
                ;

				//	include
				    //  global vars
    //      _infoInject_documentToInjectInto
    //      _infoInject_filingInfo

    //  log
    //  console.log(_infoInject_filingInfo);

    //  FilingInfo
    //  ==========
    
        (function ()
        {
            //  __escapeForHTML
                
    //  escapeForHTML
    //  =============
        function __escapeForHTML(_string)
        {
            var _replace = {
                "&": "amp", 
                '"': "quot", 
                "<": "lt", 
                ">": "gt"
            };
            
            return _string.replace(
                /[&"<>]/g,
                function (_match) { return ("&" + _replace[_match] + ";"); }
            );
        }


            //  return?
            //  =======
                var _injected_element = _infoInject_documentToInjectInto.getElementById('filingInfo_injected');
                
                //  check
                if (_injected_element.innerHTML == 'yup') { return; }
                
                //  set
                _injected_element.innerHTML = 'yup';
        

            //  notebook
            //  ========
                var _notebook_name = (_infoInject_filingInfo.notebook_name);
                    _notebook_name = (_notebook_name > '' ? _notebook_name : _infoInject_documentToInjectInto.getElementById('filingInfo_notebook_default').innerHTML);
        
                _infoInject_documentToInjectInto.getElementById('filingInfo_notebook').innerHTML = __escapeForHTML(_notebook_name);

                
            //  tags
            //  ====
                var _tags_element = _infoInject_documentToInjectInto.getElementById('filingInfo_tags');
                for (var _s=false, i=0, _i=_infoInject_filingInfo.tag_names.length; i<_i; i++)
                {
                    _s = _infoInject_documentToInjectInto.createElement('span');
                    _s.innerHTML = __escapeForHTML(_infoInject_filingInfo.tag_names[i]);
                    _tags_element.appendChild(_s);
                }
                
            
            //  url
            //  ===
                var _links = _infoInject_documentToInjectInto.getElementById('filingInfo_links');
                    _links.innerHTML = _links.innerHTML.replace('#url-edit', _infoInject_filingInfo.url_edit);
                  //_links.innerHTML = _links.innerHTML.replace('#url-view', _infoInject_filingInfo.url_view);
                
        })();

                break;
        }
		
		//	switch
		switch (request._type)
		{
			case 'to-content--evernote--login--show':                    __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--show'],                      window.document, window); break;
            case 'to-content--evernote--login--successful':              __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--successful'],                window.document, window); break;
            case 'to-content--evernote--login--failed--password-reset':  __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--login--failed--password-reset'],    window.document, window); break;

            /* === */
            
			case 'to-content--evernote--clip--successful':               __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--clip--successful'],                 window.document, window); break;
			case 'to-content--evernote--clip--failed':                   __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--clip--failed'],                     window.document, window); break;

			case 'to-content--evernote--clip-highlights--successful':    __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--clip-highlights--successful'],      window.document, window); break;
			case 'to-content--evernote--clip-highlights--failed':        __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--clip-highlights--failed'],          window.document, window); break;

			case 'to-content--evernote--get-recommendation--failed':      __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--get-recommendation--failed'],      window.document, window); break;
			case 'to-content--evernote--get-recommendation--successful':  __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--get-recommendation--successful'],  window.document, window); break;
            
			case 'to-content--evernote--speech--go':                     __custom_events__dispatch(__custom_events__names_to_objects['to-browser--evernote--speech--go'],                       window.document, window); break;

            /* === */
            
			case 'to-content--show--dialog-first--all-features':         __custom_events__dispatch(__custom_events__names_to_objects['to-browser--show--dialog-first--all-features'],           window.document, window); break;
			case 'to-content--show--dialog-first--new-features':         __custom_events__dispatch(__custom_events__names_to_objects['to-browser--show--dialog-first--new-features'],           window.document, window); break;

			case 'to-content--show--dialog-speech--need-login':          __custom_events__dispatch(__custom_events__names_to_objects['to-browser--show--dialog-speech--need-login'],            window.document, window); break;
			case 'to-content--show--dialog-speech--need-premium':        __custom_events__dispatch(__custom_events__names_to_objects['to-browser--show--dialog-speech--need-premium'],          window.document, window); break;
        }
		
		//	blank on all
		sendResponse({});
	});

	
		//	extension and chrome
		
	window.document.addEventListener('click', function(_event)
	{
		var 
			_event_key = __custom_events__get_key(_event),
			_event_name = __custom_events__keys_to_names[_event_key],
			_stop = false
		;
		
		switch (_event_name)
		{
			case 'to-extension--open--settings':			            chrome.extension.sendRequest({ '_type': 'to-chrome--open--settings' });                          _stop = true; break;
			case 'to-extension--open--settings--theme':	                chrome.extension.sendRequest({ '_type': 'to-chrome--open--settings--theme' });                   _stop = true; break;
			case 'to-extension--open--settings--speech':	            chrome.extension.sendRequest({ '_type': 'to-chrome--open--settings--speech' });                  _stop = true; break;
			
            case 'to-extension--open--premium':	                        chrome.extension.sendRequest({ '_type': 'to-chrome--open--premium' });                           _stop = true; break;
            case 'to-extension--open--password-reset':	                chrome.extension.sendRequest({ '_type': 'to-chrome--open--password-reset' });                    _stop = true; break;

            /* === */
            
			case 'to-extension--select--theme--theme-1':                chrome.extension.sendRequest({ '_type': 'to-chrome--select--theme-1' });                         _stop = true; break;
			case 'to-extension--select--theme--theme-2':                chrome.extension.sendRequest({ '_type': 'to-chrome--select--theme-2' });                         _stop = true; break;
			case 'to-extension--select--theme--theme-3':                chrome.extension.sendRequest({ '_type': 'to-chrome--select--theme-3' });                         _stop = true; break;
			case 'to-extension--select--theme--custom':                 chrome.extension.sendRequest({ '_type': 'to-chrome--select--theme--custom' });                   _stop = true; break;
			
			case 'to-extension--select--size--small': 	                chrome.extension.sendRequest({ '_type': 'to-chrome--select--size--small' }); 	                 _stop = true; break;
			case 'to-extension--select--size--medium': 	                chrome.extension.sendRequest({ '_type': 'to-chrome--select--size--medium' });                    _stop = true; break;
			case 'to-extension--select--size--large':		            chrome.extension.sendRequest({ '_type': 'to-chrome--select--size--large' }); 	                 _stop = true; break;

			case 'to-extension--select--related-notes--just-at-bottom': chrome.extension.sendRequest({ '_type': 'to-chrome--select--related-notes--just-at-bottom' });   _stop = true; break;
			case 'to-extension--select--related-notes--disabled': 	    chrome.extension.sendRequest({ '_type': 'to-chrome--select--related-notes--disabled' });         _stop = true; break;

            /* === */
            
			case 'to-extension--track--view':                           chrome.extension.sendRequest({ '_type': 'to-chrome--track--view', 
                                                                            '_domain': (window.location && window.location.href && (window.location.href.indexOf('/', 8) > -1) ? window.location.href.substr(0, (window.location.href.indexOf('/', 8)+1)) : 'blank-domain'), 
                                                                            '_theme': (document.getElementById('__readable_var__theme') && document.getElementById('__readable_var__theme').innerHTML ? __decodeURIComponentForReadable(document.getElementById('__readable_var__theme').innerHTML) : 'blank-theme') 
                                                                            });                                                                                         _stop = true; break;
			case 'to-extension--track--clip':                           /* will be done from inside extension code; here just for uniformity's sake */                  _stop = true; break;
            case 'to-extension--track--theme-popup':                    chrome.extension.sendRequest({ '_type': 'to-chrome--track--theme-popup' });                     _stop = true; break;
			case 'to-extension--track--settings':                       chrome.extension.sendRequest({ '_type': 'to-chrome--track--settings' });                        _stop = true; break;
			case 'to-extension--track--speech-start':                   chrome.extension.sendRequest({ '_type': 'to-chrome--track--speech-start' });                    _stop = true; break;

            case 'to-extension--track--first-show--check':              chrome.extension.sendRequest({ '_type': 'to-chrome--track--first-show--check'});                _stop = true; break;
            case 'to-extension--track--first-show--mark':               chrome.extension.sendRequest({ '_type': 'to-chrome--track--first-show--mark'});                 _stop = true; break;

            /* === */

			case 'to-extension--evernote--clip':
				//	include
				
	//	encode
	//	======
		function __encodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == '') { return 'none'; }
			
			//	encode
			return encodeURIComponent(_string)
				.replace(/!/g, '%21')
				.replace(/'/g, '%27')
				.replace(/\(/g, '%28')
				.replace(/\)/g, '%29')
				.replace(/\*/g, '%2A')
			;
		}

		
	//	decode
	//	======
		function __decodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == 'none') { return ''; }
			
			//	decode
			return decodeURIComponent(_string);
		}
	
	

			
				var 
					_iframe = document.getElementById('readable_iframe'),
					_doc = (_iframe.contentDocument || _iframe.contentWindow.document),
					
                    __id = _doc.getElementById('body').getAttribute('readable__page_id'),
					__url = window.location.href, 
					__title = document.title, 
					__body = ''
				;

                //  include prepare/clean
				
    //  global vars
    //      _iframe, _doc
    //      __id, __url, __title
    //      __body == ''

    
    //  get all "page_content" child elements of all "page" elements of the "#pages" element
    //  =======
    
        //  pages
        __body += '<div id="pages">';
        
        //  loop through pages
            var _pages = _doc.getElementById('pages');
            for (var _i_p=0, _ii_p=_pages.childNodes.length, _page=false, _page_html=false, _page_start_duplicate=false; _i_p<_ii_p; _i_p++)
            {
                //  the page
                _page = _pages.childNodes[_i_p];
                _page_html = _page.innerHTML;
                _page_start_duplicate = _page_html.indexOf('<div class="page_duplicateForSpeech">');
                
                //  remove duplicate
                if (_page_start_duplicate > -1) { _page_html = _page_html.substr(0, _page_start_duplicate); }

                //  append content
                __body += '<div id="page'+(_i_p+1)+'" class="page">';
                __body +=   _page_html;
                __body += '</div>';
            }
        
        //  end pages
        __body += '</div>';
    
    
    //  remove all spans
    //  ================
        __body = __body.replace(/<span([^>]*?)>/gi, '');
        __body = __body.replace(/<\/span>/gi, '');
        
    //  remove delete buttons
    //  =====================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)><a ([^>]*?)delete([^>]*?)><\/a>([\s\S]*?)<\/em>/gi, '<em class="highlight">$5</em>');
    
    //  highlight element
    //  =================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)>([^>]+?)<\/em>/gi, '<highlight>$3</highlight>');
    
    //  double EMs
    //  ==========
        while (true && __body.match(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi)) {
            __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi, '<highlight>$1$3</highlight>');
        }
    
    //  replace EMs
    //  ===========
        __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>/gi, '<span style="x-evernote: highlighted; background-color: #f6ee96">$1</span>');
    
    //  remove link footnotes
    //  =====================
        __body = __body.replace(/<sup class="readableLinkFootnote">([^<]*)<\/sup>/gi, '');

			
            
				chrome.extension.sendRequest({
					'_type': 'to-chrome--evernote--clip',
                    '_id': __id,
					'_url': __url,
					'_title': __title,
					'_body': __body
				});
				_stop = true;
				break;

			case 'to-extension--evernote--clip-highlights':
				//	include
				
	//	encode
	//	======
		function __encodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == '') { return 'none'; }
			
			//	encode
			return encodeURIComponent(_string)
				.replace(/!/g, '%21')
				.replace(/'/g, '%27')
				.replace(/\(/g, '%28')
				.replace(/\)/g, '%29')
				.replace(/\*/g, '%2A')
			;
		}

		
	//	decode
	//	======
		function __decodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == 'none') { return ''; }
			
			//	decode
			return decodeURIComponent(_string);
		}
	
	

			
				var 
					_iframe = document.getElementById('readable_iframe'),
					_doc = (_iframe.contentDocument || _iframe.contentWindow.document),
					
                    __id = _doc.getElementById('body').getAttribute('readable__page_id'),
					__url = window.location.href, 
					__title = document.title, 
					__body = ''
				;

                //  include prepare/clean
				
    //  global vars
    //      _iframe, _doc
    //      __id, __url, __title
    //      __body == ''

    
    //  get all "page_content" child elements of all "page" elements of the "#pages" element
    //  =======
    
        //  pages
        __body += '<div id="pages">';
        
        //  loop through pages
            var _pages = _doc.getElementById('pages');
            for (var _i_p=0, _ii_p=_pages.childNodes.length, _page=false, _page_html=false, _page_start_duplicate=false; _i_p<_ii_p; _i_p++)
            {
                //  the page
                _page = _pages.childNodes[_i_p];
                _page_html = _page.innerHTML;
                _page_start_duplicate = _page_html.indexOf('<div class="page_duplicateForSpeech">');
                
                //  remove duplicate
                if (_page_start_duplicate > -1) { _page_html = _page_html.substr(0, _page_start_duplicate); }

                //  append content
                __body += '<div id="page'+(_i_p+1)+'" class="page">';
                __body +=   _page_html;
                __body += '</div>';
            }
        
        //  end pages
        __body += '</div>';
    
    
    //  remove all spans
    //  ================
        __body = __body.replace(/<span([^>]*?)>/gi, '');
        __body = __body.replace(/<\/span>/gi, '');
        
    //  remove delete buttons
    //  =====================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)><a ([^>]*?)delete([^>]*?)><\/a>([\s\S]*?)<\/em>/gi, '<em class="highlight">$5</em>');
    
    //  highlight element
    //  =================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)>([^>]+?)<\/em>/gi, '<highlight>$3</highlight>');
    
    //  double EMs
    //  ==========
        while (true && __body.match(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi)) {
            __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi, '<highlight>$1$3</highlight>');
        }
    
    //  replace EMs
    //  ===========
        __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>/gi, '<span style="x-evernote: highlighted; background-color: #f6ee96">$1</span>');
    
    //  remove link footnotes
    //  =====================
        __body = __body.replace(/<sup class="readableLinkFootnote">([^<]*)<\/sup>/gi, '');

			
            
				chrome.extension.sendRequest({
					'_type': 'to-chrome--evernote--clip-highlights',
                    '_id': __id,
					'_url': __url,
					'_title': __title,
					'_body': __body
				});
				_stop = true;
				break;
            
			case 'to-extension--evernote--speech-start':
                chrome.extension.sendRequest({ '_type': 'to-chrome--evernote--speech-start' });
                _stop = true;
                break;
            
			case 'to-extension--evernote--get-recommendation':
				//	include
				
	//	encode
	//	======
		function __encodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == '') { return 'none'; }
			
			//	encode
			return encodeURIComponent(_string)
				.replace(/!/g, '%21')
				.replace(/'/g, '%27')
				.replace(/\(/g, '%28')
				.replace(/\)/g, '%29')
				.replace(/\*/g, '%2A')
			;
		}

		
	//	decode
	//	======
		function __decodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == 'none') { return ''; }
			
			//	decode
			return decodeURIComponent(_string);
		}
	
	

			
				var 
					_iframe = document.getElementById('readable_iframe'),
					_doc = (_iframe.contentDocument || _iframe.contentWindow.document),
					
                    __id = _doc.getElementById('body').getAttribute('readable__page_id'),
					__url = window.location.href, 
					__title = document.title, 
					__body = ''
				;

                //  include prepare/clean
				
    //  global vars
    //      _iframe, _doc
    //      __id, __url, __title
    //      __body == ''

    
    //  get all "page_content" child elements of all "page" elements of the "#pages" element
    //  =======
    
        //  pages
        __body += '<div id="pages">';
        
        //  loop through pages
            var _pages = _doc.getElementById('pages');
            for (var _i_p=0, _ii_p=_pages.childNodes.length, _page=false, _page_html=false, _page_start_duplicate=false; _i_p<_ii_p; _i_p++)
            {
                //  the page
                _page = _pages.childNodes[_i_p];
                _page_html = _page.innerHTML;
                _page_start_duplicate = _page_html.indexOf('<div class="page_duplicateForSpeech">');
                
                //  remove duplicate
                if (_page_start_duplicate > -1) { _page_html = _page_html.substr(0, _page_start_duplicate); }

                //  append content
                __body += '<div id="page'+(_i_p+1)+'" class="page">';
                __body +=   _page_html;
                __body += '</div>';
            }
        
        //  end pages
        __body += '</div>';
    
    
    //  remove all spans
    //  ================
        __body = __body.replace(/<span([^>]*?)>/gi, '');
        __body = __body.replace(/<\/span>/gi, '');
        
    //  remove delete buttons
    //  =====================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)><a ([^>]*?)delete([^>]*?)><\/a>([\s\S]*?)<\/em>/gi, '<em class="highlight">$5</em>');
    
    //  highlight element
    //  =================
        __body = __body.replace(/<em ([^>]*?)highlight([^>]*?)>([^>]+?)<\/em>/gi, '<highlight>$3</highlight>');
    
    //  double EMs
    //  ==========
        while (true && __body.match(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi)) {
            __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>([\n\r\t]*?)<highlight>([\s\S]*?)<\/highlight>/gi, '<highlight>$1$3</highlight>');
        }
    
    //  replace EMs
    //  ===========
        __body = __body.replace(/<highlight>([\s\S]*?)<\/highlight>/gi, '<span style="x-evernote: highlighted; background-color: #f6ee96">$1</span>');
    
    //  remove link footnotes
    //  =====================
        __body = __body.replace(/<sup class="readableLinkFootnote">([^<]*)<\/sup>/gi, '');


                //  do
				chrome.extension.sendRequest({
					'_type': 'to-chrome--evernote--get-recommendation',
					'_id': __id,
					'_url': __url,
					'_body': __body
				});
                
				_stop = true;
				break;
        }
	
		if (_stop)
		{
			_event.stopPropagation();
			_event.preventDefault();
		}
	
	}, true);

	
	
	//	keyboard hook
	//	=============
		
	//	keyboard hook
	chrome.extension.sendRequest({ '_type': "to-chrome--get-keyboard-info" }, function(response)
	{
		//	decode
		
	//	encode
	//	======
		function __encodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == '') { return 'none'; }
			
			//	encode
			return encodeURIComponent(_string)
				.replace(/!/g, '%21')
				.replace(/'/g, '%27')
				.replace(/\(/g, '%28')
				.replace(/\)/g, '%29')
				.replace(/\*/g, '%2A')
			;
		}

		
	//	decode
	//	======
		function __decodeURIComponentForReadable(_string)
		{
			//	none
			if (_string == 'none') { return ''; }
			
			//	decode
			return decodeURIComponent(_string);
		}
	
	


		//	global vars
		var 
			__definition_items_html = response._definition_items_html,
			
			__key_activation = __decodeURIComponentForReadable(response._key_activation),
			__key_clip = __decodeURIComponentForReadable(response._key_clip),
            __key_highlight = __decodeURIComponentForReadable(response._key_highlight),
            __key_speak = __decodeURIComponentForReadable(response._key_speak)
		;
		
		//	the event
		window.addEventListener('keydown', function(_event)
		{
			//	include key combo detection
				
	/*
		_event must be defined
		_key_combo and _key_code will be defined at end of code
	*/

	var _key_code = 'NONE';
	switch (true)
	{
		case (_event.keyCode && (_event.keyCode >= 65 && _event.keyCode <= 90)):
			_key_code = String.fromCharCode(_event.keyCode).toUpperCase();
			break;
			
		case (_event.keyCode == 27):	_key_code = 'Escape';		break;
		case (_event.keyCode == 37):	_key_code = 'Left Arrow';	break;
		case (_event.keyCode == 39):	_key_code = 'Right Arrow';	break;
		case (_event.keyCode == 38):	_key_code = 'Up Arrow';		break;
		case (_event.keyCode == 40):	_key_code = 'Down Arrow';	break;
	}

	//	get
	//	===
		var _modifierKeys = (_event.originalEvent ? _event.originalEvent : _event);
		//	jQuery screws up -- fucks up the metaKey property badly
		
		var _key_combo = ''
			+ (_modifierKeys.ctrlKey ? 'Control + ' : '')
			+ (_modifierKeys.shiftKey ? 'Shift + ' : '')
			+ (_modifierKeys.altKey ? 'Alt + ' : '')
			+ (_modifierKeys.metaKey ? 'Command + ' : '')
			+ _key_code
		;

	//	needs a modifier -- if not just Escape key
	//	================
		if ((_key_code != 'Escape') && (_key_code == _key_combo))
		{
			_key_code = 'NONE';
			_key_combo = 'NONE';
		}


			switch (true)
			{
				case ((__key_activation > '') && (_key_combo == __key_activation)):
				case ((__key_clip > '') && (_key_combo == __key_clip)):
				case ((__key_highlight > '') && (_key_combo == __key_highlight)):
				case ((__key_speak > '') && (_key_combo == __key_speak)):
					
					//	also?
                    //  =====
                        
                        //  clip
						var __clip_on_launch = ((__key_clip > '') && (_key_combo == __key_clip));

                        //	highlight
						var __highlight_on_launch = ((__key_highlight > '') && (_key_combo == __key_highlight));
                        
                        //	speak
						var __speak_on_launch = ((__key_speak > '') && (_key_combo == __key_speak));
                        
					//	stop
					//	====
						_event.stopPropagation();
						_event.preventDefault();

					//	inject
					//	======
						var code = ""
							+	"var "
+	"	_d = document, "
+	"	_b = _d.getElementsByTagName('body')[0], "
+	"	_o = _d.getElementById('__readable_extension_definitions'), "
+	"	_l = _d.createElement('script')"
+	";"

+	"if (_o); else"
+	"{"
+	"	_o = _d.createElement('dl');"
+	"	_o.setAttribute('style', 'display: none;');"
+	"	_o.setAttribute('id', '__readable_extension_definitions');"
+	"	_b.appendChild(_o);"
+	"}"
+	"_o.innerHTML = '"+__definition_items_html+"';"

+	"_l.setAttribute('src', 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/js/__bookmarklet_to_inject"+(__clip_on_launch ? "__andClipOnLaunch" : (__highlight_on_launch ? "__andHighlightOnLaunch" : (__speak_on_launch ? "__andSpeakOnLaunch" : "")))+".js');"
+	"_l.className = 'bookmarklet_launch';"
+	"_b.appendChild(_l);";
						eval(code);
						
					break;
			}
			
		}, true);
	});


        
    //  expose clearly
    //  ==============
		
    //  expose clearly
    //  ==============
    
        (function ()
        {
        
            //  return
            if (window.location.hostname.match(/(evernote|yinxiang).com$/gi)); else { return; }
            
            //  add to head
            try
            {
                var _meta = document.createElement("meta");
                    _meta.name = "evernote-clearly-extension";
                    _meta.content = "installed";
                
                document.head.appendChild(meta);
            }
            catch (e) {}
            
            //  add to body
            try
            {
                document.body.className += ' evernote-clearly-extension';
            }
            catch (e) {}
            
        })();
        
    
    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    //-* SELF DEFINED
    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    var VoiceOver = function() {
        this.converting = false;
        this.init();
        this.registerBackgroundMessage();
    };

    VoiceOver.prototype.init = function() {
        $('body').append(
            '<audio id="VoiceOverFinished" src="sound/finished.mp3" preload="true" autoplay="false" controls="false" loop="false"></audio>'
        );
        VoiceOver.log('audio resource attached!');
    };

    VoiceOver.prototype.registerBackgroundMessage = function() {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.hasOwnProperty("msg") && request.msg != '' && request.msg != null) {
                VoiceOver.log(request.msg);
            }
        });
    };

    VoiceOver.prototype.startConvert = function() {
        VoiceOver.log('start to send convert request!');
        var self = this;

        if (self.converting) {
            VoiceOver.log('page still converting, skip!');
            return; // still converting, do nothing
        }

        self.converting = true; // mark status
        chrome.runtime.sendMessage({action: "convert"}, function(response) {
            if (response.hasOwnProperty("status") && response.status == "done") {
                self.finishConvert();
            }
        });
    };

    VoiceOver.prototype.finishConvert = function() {
        VoiceOver.log('page converted, continue...');
        // convert done, mark status
        this.converting = false;
        // play finished sound
        $('#VoiceOverFinished').play();
    };

    VoiceOver.log = function(msg) {
        if (typeof msg != 'object' && typeof msg != 'function') {
            console.log('[VoiceOver] ' + msg);
        } else {
            console.log('[VoiceOver]: ');
            console.log(msg);
        }
    };

    var voiceover = new VoiceOver();

    $(document).ready(function() {
        VoiceOver.log('DOM ready!');
        // page dom loaded
        voiceover.startConvert();
    });