
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
        this.registerBackgroundMessage();
    };

    /**
     * Event listener of "chrome.tabs.sendMessage" from "background_*.js".
     */
    VoiceOver.prototype.registerBackgroundMessage = function() {
        var self = this;
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            if (request.hasOwnProperty("action") && 'log' === request.action) {
                // log message from background_*.js
                VoiceOver.log(request.msg);
            } else if (request.hasOwnProperty("action") && 'finished' === request.action) {
                // page convert finished
                self.finishConvert();
            } else if (request.hasOwnProperty("action") && 'audio' === request.action) {
                // play audio
                self.playAudio();
            }
        });
    };

    /**
     * Send message to inform "background_*.js" to convert page.
     */
    VoiceOver.prototype.startConvert = function() {
        VoiceOver.log('start to send convert request!');
        var self = this;

        if (self.converting) {
            VoiceOver.log('page still converting, skip!');
            return; // still converting, do nothing
        }

        self.converting = true; // mark status
        chrome.runtime.sendMessage({action: "convert"}, function(response) {});
    };

    /**
     * Page convert done, so do the works next.
     */
    VoiceOver.prototype.finishConvert = function() {
        VoiceOver.log('page converted, continue...');

        var self = this;
        var convertOutputRendering = true;

        var timer = setInterval(function() {
            if (!convertOutputRendering) {
                clearInterval(timer);
                return;
            }
            var iframe = $('#readable_iframe');
            var loading = iframe.contents().find('#loading');
            if (loading.css('display') == 'none') {
                // rendering done
                convertOutputRendering = false;
                // convert done, mark status
                self.converting = false;
                // replace page HTML with new page
                var clearlyHtml = iframe.contents().find("html").html();
//                $('html').html(clearlyHtml);
/*
* <body ryt13872="1" class="readableBeforeVisible readableVisible">
 <dl style="display: none;" id="__readable_extension_definitions"><dd id="__readable_option__text_font">%22PT%20Serif%22</dd><dd id="__readable_option__text_font_header">%22PT%20Serif%22</dd><dd id="__readable_option__text_font_monospace">Inconsolata</dd><dd id="__readable_option__text_size">16px</dd><dd id="__readable_option__text_line_height">1.5em</dd><dd id="__readable_option__box_width">36em</dd><dd id="__readable_option__color_background">%23f3f2ee</dd><dd id="__readable_option__color_text">%231f0909</dd><dd id="__readable_option__color_links">%23065588</dd><dd id="__readable_option__text_align">normal</dd><dd id="__readable_option__base">theme-1</dd><dd id="__readable_option__footnote_links">on_print</dd><dd id="__readable_option__large_graphics">do_nothing</dd><dd id="__readable_option__custom_css">none</dd><dd id="__readable_var__theme">theme-1</dd><dd id="__readable_var__keys_activation">Control%20%2B%20Command%20%2B%20Right%20Arrow</dd><dd id="__readable_var__keys_clip">Control%20%2B%20Command%20%2B%20Up%20Arrow</dd><dd id="__readable_var__keys_highlight">Control%20%2B%20Command%20%2B%20H</dd><dd id="__readable_var__keys_speech">Control%20%2B%20Alt%20%2B%20S</dd><dd id="__readable_var__clip_tag">none</dd><dd id="__readable_var__clip_notebook">none</dd><dd id="__readable_var__clip_notebook_guid">none</dd><dd id="__readable_var__related_notes">enabled</dd><dd id="__readable_var__smart_filing">enabled</dd><dd id="__readable_var__smart_filing_for_business">disabled</dd><dd id="__readable_var__speech_speed">normal</dd><dd id="__readable_var__speech_gender">default</dd><dd id="__readable_var__open_notes_in">web</dd><dd id="__readable_var__custom_theme_options">none</dd><dd id="__readable_translation__menu__close__tooltip">%E9%9A%90%E8%97%8F%E8%A6%86%E7%9B%96</dd><dd id="__readable_translation__menu__clip_to_evernote__tooltip">%E5%89%AA%E8%97%8F%E8%87%B3%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__menu__highlight_to_evernote__tooltip">%E9%AB%98%E4%BA%AE%E6%98%BE%E7%A4%BA</dd><dd id="__readable_translation__menu__print__tooltip">%E6%89%93%E5%8D%B0</dd><dd id="__readable_translation__menu__settings__tooltip">%E6%98%BE%E7%A4%BA%E4%B8%BB%E9%A2%98</dd><dd id="__readable_translation__menu__fitts__tooltip">%E9%9A%90%E8%97%8F%E8%A6%86%E7%9B%96</dd><dd id="__readable_translation__menu__speak__tooltip">%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3</dd><dd id="__readable_translation__menu__speak__play__tooltip">%E6%92%AD%E6%94%BE</dd><dd id="__readable_translation__menu__speak__pause__tooltip">%E6%9A%82%E5%81%9C</dd><dd id="__readable_translation__menu__speak__forward__tooltip">%E5%89%8D%E8%BF%9B</dd><dd id="__readable_translation__menu__speak__rewind__tooltip">%E5%90%8E%E9%80%80</dd><dd id="__readable_translation__rtl__main__label">%E6%96%87%E6%9C%AC%E6%96%B9%E5%90%91%EF%BC%9F</dd><dd id="__readable_translation__rtl__ltr__label">%E4%BB%8E%E5%B7%A6%E5%88%B0%E5%8F%B3</dd><dd id="__readable_translation__rtl__rtl__label">%E4%BB%8E%E5%8F%B3%E5%88%B0%E5%B7%A6</dd><dd id="__readable_translation__blank_error__heading">%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7</dd><dd id="__readable_translation__blank_error__body">%E2%80%9C%E6%82%A6%E8%AF%BB%E2%80%9D%E7%9B%AE%E5%89%8D%E4%BB%85%E4%B8%BA%E6%96%87%E7%AB%A0%E9%A1%B5%E9%9D%A2%E6%B5%8F%E8%A7%88%E8%AE%BE%E8%AE%A1%E3%80%82%E6%96%87%E7%AB%A0%E9%A1%B5%E9%9D%A2%E6%98%AF%E5%8C%85%E5%90%AB%E4%B8%80%E5%A4%A7%E5%9D%97%E6%96%87%E6%9C%AC%E7%9A%84%E4%BB%BB%E4%BD%95%E9%A1%B5%E9%9D%A2%EF%BC%8C%E6%AF%94%E5%A6%82%E6%96%B0%E9%97%BB%E6%96%87%E7%AB%A0%E6%88%96%E5%8D%9A%E5%AE%A2%E8%B4%B4%E6%96%87%E3%80%82</dd><dd id="__readable_translation__related_notes__title">%E7%9B%B8%E5%85%B3%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__related_notes__disable_short">%E6%98%AF%E5%90%A6%E5%85%B3%E9%97%AD%EF%BC%9F</dd><dd id="__readable_translation__related_notes__disable_long">%E4%BD%A0%E6%83%B3%E5%85%B3%E9%97%AD%E7%9B%B8%E5%85%B3%E7%AC%94%E8%AE%B0%E5%8A%9F%E8%83%BD%E5%90%97%EF%BC%9F</dd><dd id="__readable_translation__filing_info__title_normal">%E5%AD%98%E6%A1%A3%EF%BC%9A</dd><dd id="__readable_translation__filing_info__title_smart">%E6%99%BA%E8%83%BD%E5%AD%98%E6%A1%A3%EF%BC%9A</dd><dd id="__readable_translation__filing_info__default_notebook">%E9%BB%98%E8%AE%A4%E7%AC%94%E8%AE%B0%E6%9C%AC</dd><dd id="__readable_translation__filing_info__view">%E6%9F%A5%E7%9C%8B</dd><dd id="__readable_translation__filing_info__edit">%E7%BC%96%E8%BE%91</dd><dd id="__readable_translation__filing_info__sentence">%E5%89%AA%E8%97%8F%E5%88%B0%5B%3Dnotebook%5D%E7%AC%94%E8%AE%B0%E6%9C%AC%EF%BC%8C%E8%AE%BE%E7%BD%AE%E6%A0%87%E7%AD%BE%E4%B8%BA%5B%3Dtags%5D%E3%80%82</dd><dd id="__readable_translation__filing_info__sentence_no_tags">%E5%89%AA%E8%97%8F%E5%88%B0%5B%3Dnotebook%5D%E7%AC%94%E8%AE%B0%E6%9C%AC%E3%80%82</dd><dd id="__readable_translation__filing_info__sentence_and">%E5%92%8C</dd><dd id="__readable_translation__filing_info__sentence_other_tags">%E5%85%B6%E4%BB%96%E6%A0%87%E7%AD%BE</dd><dd id="__readable_translation__evernote_clipping">%E6%AD%A3%E5%9C%A8%E5%89%AA%E8%97%8F%20...</dd><dd id="__readable_translation__evernote_clipping_failed">%E5%89%AA%E8%97%8F%E5%A4%B1%E8%B4%A5</dd><dd id="__readable_translation__evernote_login__heading">%E7%99%BB%E5%BD%95%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__evernote_login__spinner">%E7%99%BB%E5%BD%95%E5%88%B0%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__evernote_login__create_account">%E5%88%9B%E5%BB%BA%E5%B8%90%E6%88%B7</dd><dd id="__readable_translation__evernote_login__button_do__label">%E7%99%BB%E5%BD%95</dd><dd id="__readable_translation__evernote_login__button_cancel__label">%E5%8F%96%E6%B6%88</dd><dd id="__readable_translation__evernote_login__username__label">%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%20%E7%94%A8%E6%88%B7%E5%90%8D%E6%88%96%E7%94%B5%E5%AD%90%E9%82%AE%E7%AE%B1%E5%9C%B0%E5%9D%80</dd><dd id="__readable_translation__evernote_login__password__label">%E5%AF%86%E7%A0%81</dd><dd id="__readable_translation__evernote_login__rememberMe__label">%E8%AE%B0%E4%BD%8F%E6%88%91</dd><dd id="__readable_translation__evernote_login__username__error__required">%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%E3%80%82</dd><dd id="__readable_translation__evernote_login__username__error__length">%E7%94%A8%E6%88%B7%E5%90%8D%E9%95%BF%E5%BA%A6%E5%BF%85%E9%A1%BB%E5%9C%A81%E5%88%B064%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B9%8B%E9%97%B4%E3%80%82</dd><dd id="__readable_translation__evernote_login__username__error__format">%E7%94%A8%E6%88%B7%E5%90%8D%E5%8C%85%E5%90%AB%E4%B8%8D%E5%8F%AF%E7%94%A8%E7%9A%84%E5%AD%97%E7%AC%A6%E3%80%82</dd><dd id="__readable_translation__evernote_login__username__error__invalid">%E9%9D%9E%E6%9C%89%E6%95%88%E7%9A%84%E6%B4%BB%E5%8A%A8%E7%94%A8%E6%88%B7%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__required">%E9%9C%80%E8%A6%81%E5%AF%86%E7%A0%81%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__length">%E5%AF%86%E7%A0%81%E9%95%BF%E5%BA%A6%E5%BF%85%E9%A1%BB%E5%9C%A86%E5%88%B064%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B9%8B%E9%97%B4%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__format">%E5%AF%86%E7%A0%81%E4%B8%AD%E5%8C%85%E5%90%AB%E9%9D%9E%E6%B3%95%E5%AD%97%E7%AC%A6%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__invalid">%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A0%81%E4%B8%8E%E7%8E%B0%E6%9C%89%E5%B8%90%E6%88%B7%E4%B8%8D%E5%8C%B9%E9%85%8D%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__timeout">%E7%99%BB%E5%BD%95%E4%BC%9A%E8%AF%9D%E5%B7%B2%E8%B6%85%E6%97%B6%E3%80%82%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%86%8D%E8%AF%95%E3%80%82</dd><dd id="__readable_translation__evernote_login__password__error__reset">%E4%BD%A0%E7%9A%84%E5%AF%86%E7%A0%81%E5%B7%B2%E7%BB%8F%E8%BF%87%E6%9C%9F%EF%BC%8C%E8%AF%B7%E7%AB%8B%E5%8D%B3%E9%87%8D%E6%96%B0%E8%AE%BE%E7%BD%AE%E3%80%82</dd><dd id="__readable_translation__evernote_login__general__error">%E9%AA%8C%E8%AF%81%E5%A4%B1%E8%B4%A5</dd><dd id="__readable_translation__evernote_two_factor__message__sms">%E6%88%91%E4%BB%AC%E5%B7%B2%E7%BB%8F%E5%8F%91%E9%80%81%E4%BA%86%E4%B8%80%E4%B8%AA%E5%8C%85%E5%90%AB%E9%AA%8C%E8%AF%81%E7%A0%81%E7%9A%84%E6%96%87%E6%9C%AC%E6%B6%88%E6%81%AF%E8%87%B3</dd><dd id="__readable_translation__evernote_two_factor__message__google">%E8%BE%93%E5%85%A5Google%E9%AA%8C%E8%AF%81%E5%BA%94%E7%94%A8%E4%B8%AD%E6%98%BE%E7%A4%BA%E7%9A%84%E9%AA%8C%E8%AF%81%E7%A0%81%E3%80%82</dd><dd id="__readable_translation__evernote_two_factor__code__label">%E5%85%AD%E4%BD%8D%E4%BB%A3%E7%A0%81</dd><dd id="__readable_translation__evernote_two_factor__code__error__required">%E9%AA%8C%E8%AF%81%E7%A0%81%E5%BF%85%E5%A1%AB%E3%80%82</dd><dd id="__readable_translation__evernote_two_factor__code__error__length">%E9%AA%8C%E8%AF%81%E7%A0%81%E8%87%B3%E5%B0%91%E9%9C%80%E8%A6%816%E4%BD%8D%E3%80%82</dd><dd id="__readable_translation__evernote_two_factor__code__error__format">%E9%AA%8C%E8%AF%81%E7%A0%81%E5%BF%85%E9%A1%BB%E6%98%AF%E6%95%B0%E5%AD%97%E3%80%82</dd><dd id="__readable_translation__evernote_two_factor__code__error__invalid">%E9%AA%8C%E8%AF%81%E7%A0%81%E9%94%99%E8%AF%AF%E3%80%82</dd><dd id="__readable_translation__evernote_two_factor__button_do__label">%E7%BB%A7%E7%BB%AD</dd><dd id="__readable_translation__evernote_two_factor__button_help__label">%E6%88%91%E9%9C%80%E8%A6%81%E8%8E%B7%E5%8F%96%E9%AA%8C%E8%AF%81%E7%A0%81%E6%96%B9%E9%9D%A2%E7%9A%84%E5%B8%AE%E5%8A%A9</dd><dd id="__readable_translation__settings__theme__1">%E6%8A%A5%E7%BA%B8%E6%A8%A1%E5%BC%8F</dd><dd id="__readable_translation__settings__theme__2">%E6%99%AE%E9%80%9A%E6%A8%A1%E5%BC%8F</dd><dd id="__readable_translation__settings__theme__3">%E5%8F%8D%E7%99%BD%E6%A8%A1%E5%BC%8F</dd><dd id="__readable_translation__settings__theme__custom">%E8%87%AA%E5%AE%9A%E4%B9%89</dd><dd id="__readable_translation__settings__fontSize__small">%E5%B0%8F</dd><dd id="__readable_translation__settings__fontSize__medium">%E4%B8%AD</dd><dd id="__readable_translation__settings__fontSize__large">%E5%A4%A7</dd><dd id="__readable_translation__features__title__new">%E6%9C%89%E6%96%B0%E7%89%88%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E5%8F%AF%E7%94%A8</dd><dd id="__readable_translation__features__title__all">%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8%E5%85%A8%E6%96%B0%E7%9A%84%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB</dd><dd id="__readable_translation__features__speech__title">%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3</dd><dd id="__readable_translation__features__speech__text">%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E6%96%B0%E5%A2%9E%E2%80%9C%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3%E2%80%9D%E5%8A%9F%E8%83%BD%EF%BC%8C%E8%AE%A9%E4%BD%A0%E5%8F%AF%E4%BB%A5%E4%B8%80%E8%BE%B9%E4%BC%91%E6%81%AF%EF%BC%8C%E4%B8%80%E8%BE%B9%E5%90%AC%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E4%B8%BA%E4%BD%A0%E6%9C%97%E8%AF%BB%E5%8D%9A%E5%AE%A2%E5%92%8C%E7%BD%91%E9%A1%B5%E4%B8%8A%E7%9A%84%E6%96%87%E7%AB%A0%E7%AD%89%E5%86%85%E5%AE%B9%EF%BC%8C%E6%AD%A4%E4%B8%BA%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E9%AB%98%E7%BA%A7%E5%B8%90%E6%88%B7%E4%B8%93%E4%BA%AB%E5%8A%9F%E8%83%BD%E3%80%82</dd><dd id="__readable_translation__features__speech__text__powered">%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E7%94%B1%5B%3Dservice%5D%E6%8F%90%E4%BE%9B%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%E3%80%82</dd><dd id="__readable_translation__features__speech__text__requires">%E9%9C%80%E8%A6%81%5B%3Dproduct%5D%E3%80%82</dd><dd id="__readable_translation__features__speech__text__available">%E6%94%AF%E6%8C%8121%E7%A7%8D%E8%AF%AD%E8%A8%80%EF%BC%9A</dd><dd id="__readable_translation__features__speech__text__available_languages">%E8%8B%B1%E8%AF%AD%E3%80%81%E6%97%A5%E8%AF%AD%E3%80%81%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%AD%E3%80%81%E6%B3%95%E8%AF%AD%E3%80%81%E5%BE%B7%E8%AF%AD%E3%80%81%E6%B1%89%E8%AF%AD%E3%80%81%E9%9F%A9%E8%AF%AD%E3%80%81%E9%98%BF%E6%8B%89%E4%BC%AF%E8%AF%AD%E3%80%81%E6%8D%B7%E5%85%8B%E8%AF%AD%E3%80%81%E4%B8%B9%E9%BA%A6%E8%AF%AD%E3%80%81%E8%8A%AC%E5%85%B0%E8%AF%AD%E3%80%81%E5%B8%8C%E8%85%8A%E8%AF%AD%E3%80%81%E5%8C%88%E7%89%99%E5%88%A9%E8%AF%AD%E3%80%81%E6%84%8F%E5%A4%A7%E5%88%A9%E8%AF%AD%E3%80%81%E6%8C%AA%E5%A8%81%E8%AF%AD%E3%80%81%E6%B3%A2%E5%85%B0%E8%AF%AD%E3%80%81%E8%91%A1%E8%90%84%E7%89%99%E8%AF%AD%E3%80%81%E4%BF%84%E8%AF%AD%E3%80%81%E7%91%9E%E5%85%B8%E8%AF%AD%E5%92%8C%E5%9C%9F%E8%80%B3%E5%85%B6%E8%AF%AD%E3%80%82</dd><dd id="__readable_translation__features__speech__text__try">%E4%BD%93%E9%AA%8C%E2%80%9C%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3%E2%80%9D%E5%8A%9F%E8%83%BD</dd><dd id="__readable_translation__features__speech__text__upgrade">%E5%8D%87%E7%BA%A7%E5%88%B0%20%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%20%E9%AB%98%E7%BA%A7%E7%89%88</dd><dd id="__readable_translation__features__speech__text__language">%E8%AF%AD%E8%A8%80%E6%9A%82%E4%B8%8D%E6%94%AF%E6%8C%81</dd><dd id="__readable_translation__features__speech__text__play">%E7%94%A8%E8%BF%99%E7%A7%8D%E8%AF%AD%E8%A8%80%E6%9C%97%E8%AF%BB</dd><dd id="__readable_translation__features__speech__text__cancel">%E5%8F%96%E6%B6%88</dd><dd id="__readable_translation__features__speech__no_language_title">%E8%AF%AD%E8%A8%80%E6%9A%82%E4%B8%8D%E6%94%AF%E6%8C%81</dd><dd id="__readable_translation__features__speech__no_language_explanation">%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E6%97%A0%E6%B3%95%E6%94%B9%E5%8F%98%E6%96%87%E7%AB%A0%E8%AF%AD%E8%A8%80%E3%80%82%E5%A6%82%E6%9E%9C%E4%BD%A0%E8%AE%A4%E8%AF%86%E8%BF%99%E7%A7%8D%E8%AF%AD%E8%A8%80%EF%BC%8C%E5%9C%A8%E4%B8%8B%E9%9D%A2%E8%BF%9B%E8%A1%8C%E9%80%89%E6%8B%A9%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B0%86%E4%BC%9A%E4%B8%BA%E4%BD%A0%E6%9C%97%E8%AF%BB%E3%80%82</dd><dd id="__readable_translation__features__clipping__title">%E5%89%AA%E8%97%8F%E8%87%B3%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__features__clipping__text">%E7%82%B9%E5%87%BB%E4%B8%80%E4%B8%8B%EF%BC%8C%E5%8D%B3%E5%8F%AF%E6%8A%8A%E4%BD%A0%E9%98%85%E8%AF%BB%E7%9A%84%E5%86%85%E5%AE%B9%E5%89%AA%E8%97%8F%E5%88%B0%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E5%B8%90%E6%88%B7%EF%BC%8C%E9%9A%8F%E6%97%B6%E9%9A%8F%E5%9C%B0%E5%9C%A8%E4%BB%BB%E4%BD%95%E8%AE%BE%E5%A4%87%E4%B8%8A%E9%83%BD%E5%8F%AF%E4%BB%A5%E8%AF%BB%E5%8F%96%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E3%80%82</dd><dd id="__readable_translation__features__highlighting__title">%E9%AB%98%E4%BA%AE</dd><dd id="__readable_translation__features__highlighting__text">%E6%83%B3%E8%AE%B0%E4%BD%8F%E7%9A%84%E6%96%87%E5%AD%97%E8%AE%BE%E6%88%90%E9%AB%98%E4%BA%AE%E6%98%BE%E7%A4%BA%EF%BC%8C%E5%9C%A8%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E5%B8%90%E6%88%B7%E4%B8%AD%E5%BF%AB%E9%80%9F%E7%9C%8B%E5%88%B0%E3%80%82%E5%9C%A8%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%E4%B8%AD%E6%89%80%E4%BD%9C%E7%9A%84%E9%AB%98%E4%BA%AE%E4%BF%AE%E6%94%B9%EF%BC%8C%E5%B0%86%E4%BC%9A%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%88%B0%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E5%B8%90%E6%88%B7%E4%B8%AD%E3%80%82</dd><dd id="__readable_translation__features__related_notes__title">%E7%9B%B8%E5%85%B3%E7%AC%94%E8%AE%B0</dd><dd id="__readable_translation__features__related_notes__text">%E8%AE%A9%E4%BD%A0%E7%A5%9E%E5%A5%87%E7%9A%84%E9%87%8D%E6%96%B0%E5%8F%91%E7%8E%B0%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%E5%B8%90%E6%88%B7%E9%87%8C%E9%82%A3%E4%BA%9B%E5%92%8C%E4%BD%A0%E6%AD%A3%E5%9C%A8%E9%98%85%E8%AF%BB%E7%9A%84%E7%9B%B8%E5%85%B3%E7%AC%94%E8%AE%B0%E3%80%82%E5%A6%82%E6%9E%9C%E9%A1%B5%E9%9D%A2%E7%A9%BA%E9%97%B4%E5%85%81%E8%AE%B8%EF%BC%8C%E7%9B%B8%E5%85%B3%E7%AC%94%E8%AE%B0%E4%BC%9A%E6%98%BE%E7%A4%BA%E5%9C%A8%E4%BD%A0%E6%AD%A3%E5%9C%A8%E9%98%85%E8%AF%BB%E7%9A%84%E6%96%87%E7%AB%A0%E5%BA%95%E9%83%A8%E6%88%96%E8%80%85%E5%8F%B3%E4%BE%A7%E3%80%82</dd><dd id="__readable_translation__features__smart_filing__title">%E6%99%BA%E8%83%BD%E5%BD%92%E6%A1%A3</dd><dd id="__readable_translation__features__smart_filing__text">%E4%B8%BA%E7%BD%91%E9%A1%B5%E5%89%AA%E8%97%8F%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E6%A0%87%E7%AD%BE%EF%BC%8C%E5%B9%B6%E4%BF%9D%E5%AD%98%E5%88%B0%E6%81%B0%E5%BD%93%E7%9A%84%E7%AC%94%E8%AE%B0%E6%9C%AC</dd><dd id="__readable_translation__features__eula_notice">%E4%BD%BF%E7%94%A8%E5%8D%B0%E8%B1%A1%E7%AC%94%E8%AE%B0%C2%B7%E6%82%A6%E8%AF%BB%EF%BC%8C%E8%A1%A8%E7%A4%BA%E4%BD%A0%E5%90%8C%E6%84%8F%E6%88%91%E4%BB%AC%E7%9A%84%5B%3Deula%5D%E3%80%82</dd><dd id="__readable_translation__features__close2">%E5%85%B3%E9%97%AD</dd><dd id="__readable_translation__misc__page">%E9%A1%B5</dd></dl><script src="chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/js/__bookmarklet_to_inject.js" class="bookmarklet_launch"></script><script src="chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/js/target.js"></script><style id="readableCSS1" type="text/css">#readable_iframe { margin: 0; padding: 0; border: none; position: absolute; width: 100%; height: 100%; min-height: 100%; top: -100%; left: -100%; z-index: 2147483647 !important; } </style><iframe id="readable_iframe" frameborder="0" allowtransparency="true" scrolling="auto" style="top: 0px; left: 0px;"></iframe><style id="readableCSS2" type="text/css">html.readableBeforeVisible, html > body.readableBeforeVisible, body.readableBeforeVisible { position: static !important; margin: 0 !important; padding: 0 !important; border: 0 !important; } html.readableVisible, html > body.readableVisible, body.readableVisible { overflow: hidden !important; overflow-x: hidden !important; overflow-y: hidden !important; } html.readableBeforeVisible object, html.readableBeforeVisible embed, html.readableBeforeVisible iframe, html > body.readableBeforeVisible object, html > body.readableBeforeVisible embed, html > body.readableBeforeVisible iframe, body.readableBeforeVisible object, body.readableBeforeVisible embed, body.readableBeforeVisible iframe { visibility: hidden !important; } html.readableBeforeVisible #readable_iframe, html > body.readableBeforeVisible #readable_iframe, body.readableBeforeVisible #readable_iframe, #readable_iframe { display: block !important; overflow: auto !important; visibility: visible !important; } </style><audio id="VoiceOverFinished" src="chrome-extension://gahdmeenealomdkgofjdjphlcgpafobg/sound/finished.mp3" preload="true"></audio></body>
* */
// TODO 方案1：删除body内除了clearly插件生成的页面之外的其他所有内容，方案2：尝试向剥离出来的html内添加css？
                 // play finished audio
                self.playAudio();
            }
        }, 1000);
    };

    /**
     * Play the convert finished audio.
     */
    VoiceOver.prototype.playAudio = function() {
        if ($('#VoiceOverFinished').length == 0) {
            // audio element does not exists on page
            var audio = $('<audio id="VoiceOverFinished" src="" preload="true"></audio>');
            audio.attr('src', chrome.extension.getURL("sound/finished.mp3"));
            $('body').append(audio);
            VoiceOver.log('audio resource attached!');
        }
        $('#VoiceOverFinished').get(0).play();
        VoiceOver.log('finished audio playing!');
    };

    /**
     * Log message.
     *
     * @param msg
     */
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