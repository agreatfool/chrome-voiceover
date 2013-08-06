
	//	bind fast
	//	=========
		
	//	button
	//	======
		chrome.browserAction.onClicked.addListener(function(tab)
		{
			__readable_by_evernote.__common_launch();
		});

		
	//	context menu
	//	============
		chrome.contextMenus.create
		({
			'title': 	chrome.i18n.getMessage('chrome_context_menu'),
			'type': 	'normal',
			'contexts': ['all'],
			'onclick': 	function () { __readable_by_evernote.__common_launch(); }
		});

		
	//	both
	//	====
		__readable_by_evernote.__common_launch = function ()
		{
			chrome.tabs.query({ 'windowId': chrome.windows.WINDOW_ID_CURRENT, 'active': true }, function (_selected_tabs)
			{
                //  .query details
                //      optional parameter ('currentWindow': true)
                //          this parameter was available starting with Chrome 19
                //      the WINDOW_ID_CURRENT, on the other hand, has been available since Chrome 18
            
                //  first tab only
                    var _selected_tab = _selected_tabs[0];
                
				//	blank page
				//	==========
					if (_selected_tab.url.indexOf('chrome:') === 0)
					{
					    //  incognito; wil not work
					    if (_selected_tab.incognito) { return; }
					    
					    //  not incognito
						chrome.tabs.update(_selected_tab.id, {'url': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/blank.html'});
						return;
					}

                    if (_selected_tab.url.indexOf('chrome-devtools') !== -1) {
                        return; // do nothing with dev ext page
                    }
				
				//	inject script
				//	=============
					var 
						_options = __readable_by_evernote.__get_saved__options(),
						_vars = __readable_by_evernote.__get_saved__vars(),
						_translations = __readable_by_evernote.__get_translations(),
						
						__clip_on_launch = false,
						__highlight_on_launch = false,
						__speak_on_launch = false,
						
						__definition_items_html = __readable_by_evernote.__get__stuffAsDefinitionItemsHTML
						({
							'option': _options,
							'var': _vars,
							'translation': _translations
						})
					;
					
					chrome.tabs.executeScript(_selected_tab.id, { code:""
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
+	"_b.appendChild(_l);"
					}, function() { voiceover.convertListener(); });
			});
		};


		
	//	include
	//	=======
		
		//	options
		
	//	get options
	//	===========
		__readable_by_evernote.__get_saved__options = function ()
		{
			
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
	
	

			
	//	__encodeURIComponentForReadable must be defined

	var __default_options = 
	{
		'text_font': 			__encodeURIComponentForReadable('"PT Serif"'),
		'text_font_header': 	__encodeURIComponentForReadable('"PT Serif"'),
		'text_font_monospace': 	__encodeURIComponentForReadable('Inconsolata'),
		'text_size': 			__encodeURIComponentForReadable('16px'),
		'text_line_height': 	__encodeURIComponentForReadable('1.5em'),
		'box_width': 			__encodeURIComponentForReadable('36em'),
		'color_background': 	__encodeURIComponentForReadable('#f3f2ee'),
		'color_text': 			__encodeURIComponentForReadable('#1f0909'),
		'color_links': 			__encodeURIComponentForReadable('#065588'),
		'text_align': 			__encodeURIComponentForReadable('normal'),
		'base': 				__encodeURIComponentForReadable('theme-1'),
		'footnote_links': 		__encodeURIComponentForReadable('on_print'),
		'large_graphics': 		__encodeURIComponentForReadable('do_nothing'),
		'custom_css': 			__encodeURIComponentForReadable('')
	};

		
			var _return = {};
			for (var _x in __default_options) { _return[_x] = localStorage[_x]; }
			
			return _return;
		};
		
		
	//	get vars	
	//	========
		__readable_by_evernote.__get_saved__vars = function ()
		{
			
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
	
	

			
	//	__encodeURIComponentForReadable must be defined

	var __default_vars = 
	{
		'theme': 				    __encodeURIComponentForReadable('theme-1'),     /* theme-1, theme-2, theme-3, custom */
		
		'keys_activation': 		    __encodeURIComponentForReadable('Control + Alt + Right Arrow'),
		'keys_clip': 			    __encodeURIComponentForReadable('Control + Alt + Up Arrow'),
		'keys_highlight': 		    __encodeURIComponentForReadable('Control + Alt + H'),
		'keys_speech': 		        __encodeURIComponentForReadable('Control + Alt + S'),

		'clip_tag': 			    __encodeURIComponentForReadable(''),
		'clip_notebook': 			__encodeURIComponentForReadable(''),
		'clip_notebook_guid': 		__encodeURIComponentForReadable(''),
		
        'related_notes':            __encodeURIComponentForReadable('enabled'),     /* enabled, just_at_bottom, disabled */
        'smart_filing':             __encodeURIComponentForReadable('enabled'),     /* enabled, just_notebooks, just_tags, disabled */
        'smart_filing_for_business':__encodeURIComponentForReadable('disabled'),    /* enabled, disabled */

		'speech_speed': 			__encodeURIComponentForReadable('normal'),      /* slowest, slow, slower, normal, faster, fast, fastest */
		'speech_gender': 			__encodeURIComponentForReadable('default'),     /* default, female, male */
        
        'open_notes_in':            __encodeURIComponentForReadable('web'),         /* web, desktop */
        
		'custom_theme_options':	    __encodeURIComponentForReadable('')             /* the custom theme options get serialized into this */
	};

		
			var _return = {};
			for (var _x in __default_vars) { _return[_x] = localStorage[_x]; }
			
			return _return;
		};
	
		
	//	save
	//	====
		__readable_by_evernote.__save_someStuff = function (_to_save)
		{
			for (var _x in _to_save)
				{ localStorage[_x] = _to_save[_x]; }
		};
	
	
	//	get definitionList
	//	==================
		__readable_by_evernote.__get__stuffAsDefinitionItemsHTML = function (_stuffToTransform)
		{
			/*
				stuffToTransform = {
					'prefix-id': {
						'key': 'value'
					}
				};
			*/
			
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

            
            //  create html
			var _html = '';
			for (var _prefix in _stuffToTransform)
			{
				for (var _x in _stuffToTransform[_prefix])
				{
					_html += ''
						+ '<dd id="__readable_' + __escapeForHTML(_prefix) + '__' + __escapeForHTML(_x) + '">'
						+ 	__escapeForHTML(_stuffToTransform[_prefix][_x])
						+ '</dd>'
					;
				}
			}
			
			return _html;
		};
		
	
	//	set defaults
	//	============
		(function ()
		{
			
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
	
	

			
	//	__encodeURIComponentForReadable must be defined

	var __default_options = 
	{
		'text_font': 			__encodeURIComponentForReadable('"PT Serif"'),
		'text_font_header': 	__encodeURIComponentForReadable('"PT Serif"'),
		'text_font_monospace': 	__encodeURIComponentForReadable('Inconsolata'),
		'text_size': 			__encodeURIComponentForReadable('16px'),
		'text_line_height': 	__encodeURIComponentForReadable('1.5em'),
		'box_width': 			__encodeURIComponentForReadable('36em'),
		'color_background': 	__encodeURIComponentForReadable('#f3f2ee'),
		'color_text': 			__encodeURIComponentForReadable('#1f0909'),
		'color_links': 			__encodeURIComponentForReadable('#065588'),
		'text_align': 			__encodeURIComponentForReadable('normal'),
		'base': 				__encodeURIComponentForReadable('theme-1'),
		'footnote_links': 		__encodeURIComponentForReadable('on_print'),
		'large_graphics': 		__encodeURIComponentForReadable('do_nothing'),
		'custom_css': 			__encodeURIComponentForReadable('')
	};

			
	//	__encodeURIComponentForReadable must be defined

	var __default_vars = 
	{
		'theme': 				    __encodeURIComponentForReadable('theme-1'),     /* theme-1, theme-2, theme-3, custom */
		
		'keys_activation': 		    __encodeURIComponentForReadable('Control + Alt + Right Arrow'),
		'keys_clip': 			    __encodeURIComponentForReadable('Control + Alt + Up Arrow'),
		'keys_highlight': 		    __encodeURIComponentForReadable('Control + Alt + H'),
		'keys_speech': 		        __encodeURIComponentForReadable('Control + Alt + S'),

		'clip_tag': 			    __encodeURIComponentForReadable(''),
		'clip_notebook': 			__encodeURIComponentForReadable(''),
		'clip_notebook_guid': 		__encodeURIComponentForReadable(''),
		
        'related_notes':            __encodeURIComponentForReadable('enabled'),     /* enabled, just_at_bottom, disabled */
        'smart_filing':             __encodeURIComponentForReadable('enabled'),     /* enabled, just_notebooks, just_tags, disabled */
        'smart_filing_for_business':__encodeURIComponentForReadable('disabled'),    /* enabled, disabled */

		'speech_speed': 			__encodeURIComponentForReadable('normal'),      /* slowest, slow, slower, normal, faster, fast, fastest */
		'speech_gender': 			__encodeURIComponentForReadable('default'),     /* default, female, male */
        
        'open_notes_in':            __encodeURIComponentForReadable('web'),         /* web, desktop */
        
		'custom_theme_options':	    __encodeURIComponentForReadable('')             /* the custom theme options get serialized into this */
	};

		
			//	mac or pc
			//	=========
				if (window.navigator.appVersion.indexOf('Mac OS') > -1)
				{
					__default_vars['keys_activation'] = __encodeURIComponentForReadable('Control + Command + Right Arrow');
					__default_vars['keys_clip'] = 		__encodeURIComponentForReadable('Control + Command + Up Arrow');
					__default_vars['keys_highlight'] = 	__encodeURIComponentForReadable('Control + Command + H');
				}
		
			//	options
			//	=======
				for (var _x in __default_options)
				{
					var _valueDefault = __default_options[_x];
					
					switch (true)
					{
						case (!(_x in localStorage)):
						case (!(localStorage[_x] > '')):
							localStorage[_x] = __default_options[_x];
							break;
					}
				}
				
			//	vars
			//	====
				for (var _x in __default_vars)
				{
					var _valueDefault = __default_vars[_x];
					
					switch (true)
					{
						case (!(_x in localStorage)):
						case (!(localStorage[_x] > '')):
							localStorage[_x] = _valueDefault;
							break;
					}
				}
		})();


		//	evernote remote
		
	//	namespace
	//	=========
		__readable_by_evernote.__evernote_bootstrap =
		{
            /* predefined */
            'servers':                  false,
            'server_main':              '',     /* ends in slash */
            'server_china':             '',     /* ends in slash */
            
            /* set on load */
            'saved_server':             false,  /* main | china */
            'client_locale':            false,
            'has_chinese_locale':       false,
            'simulate_chinese_locale':  false,
            
            /* set on bootstrap() */
            'rpc__userStore':           false,
            'profiles':                 false,
            'profiles_as_string':       false,
            'server':                   false,
            'remote_domain':            false,  /* ends in slash */
            'remote_domain_marketing':  false,  /* ends in slash */
            'connected':                false
		};

        
    //  servers
    //  =======
        __readable_by_evernote.__evernote_bootstrap.servers = 
        {
            'live':
            {
                'main':      'https://www.evernote.com/',
                'china':     'https://app.yinxiang.com/'
            },
            'stage':
            {
                'main':      'https://stage.evernote.com/',
                //'main':      'https://stage-dev.corp.etonreve.com/',
                'china':     'https://stage-china.evernote.com/'
            }
        };
        
        //  qa stage
        //  __readable_by_evernote.__evernote_bootstrap.servers['live'] = __readable_by_evernote.__evernote_bootstrap.servers['stage'];
        
        
    //  bootstrap
    //  =========
        __readable_by_evernote.__evernote_bootstrap.bootstrap = function (_onSuccess, _onFailure)
        {
            //  already connected
            //  =================
                if (__readable_by_evernote.__evernote_bootstrap.connected) { _onSuccess(); return; }
        
        
            //  figure out order
            //  ================
                var _order = [];
                switch (true)
                {
                    case (__readable_by_evernote.__evernote_bootstrap.saved_server == 'main'):      _order = ['main', 'china']; break;
                    case (__readable_by_evernote.__evernote_bootstrap.saved_server == 'china'):     _order = ['china', 'main']; break;
                    case (__readable_by_evernote.__evernote_bootstrap.has_chinese_locale):          _order = ['china', 'main']; break;
                    case (__readable_by_evernote.__evernote_bootstrap.simulate_chinese_locale):     _order = ['china', 'main']; break;
                    default:                                                                        _order = ['main', 'china']; break;
                }

                
            //  try connect to one
            //  ==================
                var _try_connect_to_one = function (_order_number)
                {
                    //  invalid number; failed
                    //  ======================
                        if (_order[_order_number]); else
                        {
                            //  failed
                            _onFailure('connection / invalid');
                            
                            //  break
                            return;
                        };

                    
                    //  try current number
                    //  ==================
                        var _rpcBootstrapClient = new __readable_by_evernote.JSONRpcClient
                        (
                            function ()
                            { 
                                //	error / timeout
                                //  ===============
                                    if (this.UserStore); else
                                    {
                                        //  next -- will kill self on invalid
                                        _try_connect_to_one(_order_number + 1);
                                    
                                        //  break
                                        return;
                                    }

                                    
                                //	set conected
                                //  ============
                                    __readable_by_evernote.__evernote_bootstrap.connected = true;
                                    __readable_by_evernote.__evernote_bootstrap.rpc__userStore = this;

                                
                                //  get profiles
                                //  ============
                                    __readable_by_evernote.__evernote_bootstrap.rpc__userStore.UserStore.getBootstrapInfo
                                    (
                                        function (_rpc_result, _rpc_exception)
                                        {
                                            var 
                                                _bootstrapInfoResult = _rpc_result,
                                                _bootstrapInfoError = _rpc_exception
                                            ;
                                            
                                            
                                            //  error
                                            //  =====
                                                if (_bootstrapInfoError)
                                                {
                                                    _bootstrapInfoResult = {
                                                        'profiles': {
                                                           'list': [ {
                                                                'name':         'Evernote',
                                                                
                                                                'setName':      true,
                                                                'setSettings':  true,
                                                                
                                                                'settings': {
                                                                    'marketingUrl': 'http://www.evernote.com',
                                                                    'serviceHost':  'www.evernote.com',
                                                                    'supportUrl':   'https://evernote.com/contact/support/'
                                                                }
                                                            } ] 
                                                        }
                                                    };
                                                }
                                            
                                            
                                            //  result
                                            //  ======
                                            
                                                //  set profiles
                                                //  ============
                                                    __readable_by_evernote.__evernote_bootstrap.profiles = _bootstrapInfoResult.profiles.list;
                                                
                                                
                                                //  profiles as string
                                                //  ==================
                                                    __readable_by_evernote.__evernote_bootstrap.profiles_as_string = '';
                                                    for (var zz=0,_zz=__readable_by_evernote.__evernote_bootstrap.profiles.length; zz<_zz; zz++)
                                                        { __readable_by_evernote.__evernote_bootstrap.profiles_as_string += '_' + __readable_by_evernote.__evernote_bootstrap.getProfileName__short(__readable_by_evernote.__evernote_bootstrap.profiles[zz]); }
                                                    __readable_by_evernote.__evernote_bootstrap.profiles_as_string = __readable_by_evernote.__evernote_bootstrap.profiles_as_string.substr(1);
                                                
                                                
                                                //  select first
                                                //  ============
                                                    __readable_by_evernote.__evernote_bootstrap.server = __readable_by_evernote.__evernote_bootstrap.getProfileName__long(__readable_by_evernote.__evernote_bootstrap.profiles[0]);
                                                    __readable_by_evernote.__evernote_bootstrap.remote_domain = __readable_by_evernote.__evernote_bootstrap['server_' + __readable_by_evernote.__evernote_bootstrap.server];
                                                    __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing = __readable_by_evernote.__evernote_bootstrap.profiles[0].settings.marketingUrl + '/';
                                                
                                                
                                                //  first different than saved -- switch
                                                //  ==========================
                                                    if (true
                                                        && (__readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'in_cn')
                                                        && (__readable_by_evernote.__evernote_bootstrap.server == 'main')
                                                        && (__readable_by_evernote.__evernote_bootstrap.saved_server == 'china')
                                                    ){
                                                        __readable_by_evernote.__evernote_bootstrap.server = 'china';
                                                        __readable_by_evernote.__evernote_bootstrap.remote_domain = __readable_by_evernote.__evernote_bootstrap['server_' + 'china'];
                                                        __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing = __readable_by_evernote.__evernote_bootstrap.profiles[1].settings.marketingUrl + '/';
                                                        __readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'cn_in';
                                                    }
                                                    else if (true
                                                        && (__readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'cn_in')
                                                        && (__readable_by_evernote.__evernote_bootstrap.server == 'china')
                                                        && (__readable_by_evernote.__evernote_bootstrap.saved_server == 'main')
                                                    ){
                                                        __readable_by_evernote.__evernote_bootstrap.server = 'main';
                                                        __readable_by_evernote.__evernote_bootstrap.remote_domain = __readable_by_evernote.__evernote_bootstrap['server_' + 'main'];
                                                        __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing = __readable_by_evernote.__evernote_bootstrap.profiles[1].settings.marketingUrl + '/';
                                                        __readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'in_cn';
                                                    }
                                                
                                                
                                                //  run sucess
                                                //  ==========
                                                    _onSuccess();
                                        },
                                        (__readable_by_evernote.__evernote_bootstrap.simulate_chinese_locale ? 'zh_cn' : __readable_by_evernote.__evernote_bootstrap.client_locale)
                                    );
                            }, 
                            __readable_by_evernote.__evernote_bootstrap['server_' + _order[_order_number]] + 'json'
                        );
                };

                
            //  try first
            //  =========
                _try_connect_to_one(0);
        };
        
        
    //  profile name
    //  ============
        __readable_by_evernote.__evernote_bootstrap.getProfileName__short = function (_profile)
        {
            switch (_profile.name.toLowerCase())
            {
                case 'evernote':            return 'in';
                case 'evernote-china':      return 'cn';
            }
            
            return '';
        };
        
        __readable_by_evernote.__evernote_bootstrap.getProfileName__long = function (_profile)
        {
            switch (_profile.name.toLowerCase())
            {
                case 'evernote':            return 'main';
                case 'evernote-china':      return 'china';
            }
            
            return '';
        };
    
    
    //  set locale
    //  ==========
        __readable_by_evernote.__evernote_bootstrap.setLocale = function (_browser_locale)
        {
            //  which
            var _locale = _browser_locale;
                _locale = _locale.replace(/[-]/gi, '_');
                _locale = _locale.replace(/\s+/gi, '');
                _locale = _locale.toLowerCase()
            
            //   set
            __readable_by_evernote.__evernote_bootstrap.client_locale = _locale;
            
            //  chinese?
            __readable_by_evernote.__evernote_bootstrap.has_chinese_locale = ('|zh|zh_cn|zh_hans|zh_hans_cn|'.indexOf('|'+_locale+'|') > -1);
        };
    
    
    //  QA testing
    //  ==========
    
        __readable_by_evernote.__evernote_bootstrap.set_servers_to_stage = function ()
        {
            __readable_by_evernote.__evernote_bootstrap['server_main'] = __readable_by_evernote.__evernote_bootstrap.servers['stage']['main'];
            __readable_by_evernote.__evernote_bootstrap['server_china'] = __readable_by_evernote.__evernote_bootstrap.servers['stage']['china'];
        };
        
        __readable_by_evernote.__evernote_bootstrap.set_servers_to_live = function ()
        {
            __readable_by_evernote.__evernote_bootstrap['server_main'] = __readable_by_evernote.__evernote_bootstrap.servers['live']['main'];
            __readable_by_evernote.__evernote_bootstrap['server_china'] = __readable_by_evernote.__evernote_bootstrap.servers['live']['china'];
        };

        __readable_by_evernote.__evernote_bootstrap.set_simulate_chinese_locale = function ()
        {
            __readable_by_evernote.__evernote_bootstrap.simulate_chinese_locale = true;
        };
        
        __readable_by_evernote.__evernote_bootstrap.set_do_not_simulate_chinese_locale = function ()
        {
            __readable_by_evernote.__evernote_bootstrap.simulate_chinese_locale = false;
        };

        __readable_by_evernote.__evernote_bootstrap.disconnect = function ()
        {
            __readable_by_evernote.__evernote_bootstrap['connected'] =      false;
            __readable_by_evernote.__evernote_bootstrap['profiles'] =       false;
            __readable_by_evernote.__evernote_bootstrap['server'] =         false;
            __readable_by_evernote.__evernote_bootstrap['remote_domain'] =  false;
            __readable_by_evernote.__evernote_bootstrap['rpc__userStore'] = false;
        };
        
		
	//	included code
	//	json-rpc must exist in context

	
	//	namespace
	//	=========
		__readable_by_evernote.__evernote_remote =
		{
            /* predefined */
			'api__key': 		'en-clearly-xauth-new',
			'api__secret': 		'38f4e71b0172afbb',

            /* set on init */
            'setting__related_notes':               '',
            'setting__smart_filing':                '',
            'setting__smart_filing_for_business':   '',
            
            'setting__clip_tag':                    '',
            'setting__clip_notebook':               '',
            'setting__clip_notebook_guid':          '',

            'setting__open_notes_in':               '',
            
            /* stores */
            'store__id_to_guid':            {},
            'store__id_to_info':            {},
            'store__id_to_recommendation':  {},
            
            /* set on login */
			'rpc__userStore': 	false,
			'rpc__noteStore': 	false,
			
			'user__authToken': 	false,
			'user__expires': 	false,
            
            'user__id':         false,
			'user__shardId': 	false,
			'user__privilege': 	false,
            'user__username':   false,
            'user__email':      false,
			
			'is__connected': 	false,
			'is__loggedIn': 	false,
			
			'twoFactor__authToken':     false,
			'twoFactor__deliveryHint':  false,
            
            /* business */
            'is__business': 	    false,
            
            'business__authToken':  false,
            'business__expires':    false,

            'business__shardId':    false,
            'business__noteStore':  false
		};
        
	//  include
    //  =======
    
        
	//	connect
	//	=======
		__readable_by_evernote.__evernote_remote.connect = function (_onSuccess, _onFailure)
		{
            //  bootstrap first
            //  ===============
                __readable_by_evernote.__evernote_bootstrap.bootstrap
                (
                    function ()
                    {
                        //  bootstrap succesfull
                        //  ====================
                        try
                        {
                            var _rpcUserStoreClient = new __readable_by_evernote.JSONRpcClient
                            (
                                function ()
                                {
                                    //	error / timeout
                                    //  ===============
                                        if (this.UserStore); else
                                        {
                                            //  fail
                                            _onFailure('connection / invalid');
                                            
                                            //  break
                                            return;
                                        }
                                
                                    //	set conected
                                    //  ============
                                        __readable_by_evernote.__evernote_remote.is__connected = true;
                                        __readable_by_evernote.__evernote_remote.rpc__userStore = this;
                                    
                                    //  run success
                                    //  ===========
                                        _onSuccess();
                                }, 
                                __readable_by_evernote.__evernote_bootstrap.remote_domain + 'json'
                            );
                        }
                        catch (_error) { _onFailure('connection / invalid'); return; }
                    },
                    function () { _onFailure('connection / invalid'); }
                );
		};

        
    //  not expired
    //  ===========
        __readable_by_evernote.__evernote_remote.is__notExpired = function ()
        {
            //  invalid
            switch (true)
            {
                case (!__readable_by_evernote.__evernote_remote.is__connected):
                case (!__readable_by_evernote.__evernote_remote.is__loggedIn):
                case (!__readable_by_evernote.__evernote_remote.user__expires):
                    return false;
            }
            
            //  now
            var _now = (new Date()).getTime();

            //  not within 3 minutes of expiration
            if (_now > (__readable_by_evernote.__evernote_remote.user__expires - (3 * 60 * 1000))) return false;
            
            //  check business too
            if (__readable_by_evernote.__evernote_remote.is__business)
            {
                //  not within 3 minutes of expiration
                if (_now > (__readable_by_evernote.__evernote_remote.business__expires - (3 * 60 * 1000))) return false;
                
                //  business too, is not expired
                return true;
            }
            else
            {
                //  not business, and user not expired
                return true;
            }
            
            return false;
        };

        
	//	login
	//	=====
		__readable_by_evernote.__evernote_remote.loginLongSession = function (_user, _pass, _device_id, _device_description, _onSuccess, _onFailure)
		{
            //  login function
            //  ===============
                var _loginFunction = function ()
                {
                    //	login
                    //	=====
                        __readable_by_evernote.__evernote_remote.rpc__userStore.UserStore.authenticateLongSession
                        (
                            function (_rpc_result, _rpc_exception)
                            {
                                var 
                                    _loginResult = _rpc_result,
                                    _loginError = _rpc_exception
                                ;
                            
                                //  error
                                //  =====
                                
                                    if (_loginError)
                                    {
                                        //	unknown error
                                        //	=============
                                            switch (true)
                                            {
                                                case (!(_loginError.trace)):
                                                case (!(_loginError.trace.indexOf)):
                                                case (!(_loginError.trace.indexOf(')') > -1)):
                                                    _onFailure('login / exception / no trace');
                                                    return;
                                            }
                                        
                                        //	figure out error
                                        //	================
                                            var _trace = _loginError.trace.substr(0, _loginError.trace.indexOf(')')+1);
                                            switch (_trace)
                                            {
                                                case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:username)':
                                                    _onFailure('username');
                                                    return;

                                                case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:password)':
                                                    _onFailure('password');
                                                    return;

                                                case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:password)':
                                                    _onFailure('password-reset');
                                                    return;
                                            }

                                        //	could not figure out error
                                        //	==========================
                                            _onFailure('login / exception / unknown');
                                            return;
                                    }
                                    
                                
                                //  result
                                //  ======
                                 
                                    //  two factor
                                    //  ==========
                                    
                                        if (_loginResult.secondFactorRequired)
                                        {
                                            //  set
                                            __readable_by_evernote.__evernote_remote.twoFactor__authToken = _loginResult.authenticationToken;
                                            __readable_by_evernote.__evernote_remote.twoFactor__deliveryHint = (_loginResult.secondFactorDeliveryHint ? _loginResult.secondFactorDeliveryHint : '');
                                            __readable_by_evernote.__evernote_remote.twoFactor__username = _user;
                                        
                                            //  trigger
                                            _onFailure('two-factor');
                                            
                                            //  return
                                            return;
                                        }
                                 
                                    
                                    //	check
                                    //	=====
                                        switch (true)
                                        {
                                            case (!(_loginResult.authenticationToken)):
                                            case (!(_loginResult.user)):
                                            case (!(_loginResult.user.id)):
                                            case (!(_loginResult.user.shardId)):
                                                _onFailure('login / invalid result');
                                                return;
                                        }

                                        
                                    //	loginWithAuthToken
                                    //	==================
                                        __readable_by_evernote.__evernote_remote.loginWithAuthToken
                                        (
                                            _loginResult.authenticationToken,
                                            _onSuccess,
                                            _onFailure
                                        );
                                        return;
                            },
                            _user, 						                        	// username
                            _pass, 			                        				// password
                            __readable_by_evernote.__evernote_remote.api__key,		// consumer key
                            __readable_by_evernote.__evernote_remote.api__secret,	// consumer secret
                            _device_id,                                             // device id 
                            _device_description,                                    // device description
                            true                                                    // two factor
                        );
                };

                
			//	allready connected, connect, or error
			//	=====================================
				if (__readable_by_evernote.__evernote_remote.is__connected)
                {
                    //  do
                    _loginFunction();
                }
                else
				{
					//	connect
					__readable_by_evernote.__evernote_remote.connect
                    (
                        function () { _loginFunction(); },
                        function () { _onFailure('connection / invalid'); }
                    );
				}
        };


	//	login :: second factor
	//	======================
		__readable_by_evernote.__evernote_remote.loginLongSessionSecondFactor = function (_temp_auth, _code, _device_id, _device_description, _onSuccess, _onFailure)
		{
            //  login function
            //  ===============
                var _loginFunction = function ()
                {
                    //	login
                    //	=====
                        __readable_by_evernote.__evernote_remote.rpc__userStore.UserStore.completeTwoFactorAuthentication
                        (
                            function (_rpc_result, _rpc_exception)
                            {
                                var 
                                    _loginResult = _rpc_result,
                                    _loginError = _rpc_exception
                                ;
                            
                                // console.log(_loginResult);
                                // console.log(_loginError);
                            
                                //  error
                                //  =====
                                
                                    if (_loginError)
                                    {
                                        //	unknown error
                                        //	=============
                                            switch (true)
                                            {
                                                case (!(_loginError.trace)):
                                                case (!(_loginError.trace.indexOf)):
                                                case (!(_loginError.trace.indexOf(')') > -1)):
                                                    _onFailure('login / exception / no trace');
                                                    return;
                                            }
                                        
                                        //	figure out error
                                        //	================
                                            var _trace = _loginError.trace.substr(0, _loginError.trace.indexOf(')')+1);
                                            switch (_trace)
                                            {
                                                case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:oneTimeCode)':
                                                    _onFailure('code');
                                                    return;

                                                case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                    _onFailure('timeout');
                                                    return;
                                            }

                                        //	could not figure out error
                                        //	==========================
                                            _onFailure('login / exception / unknown');
                                            return;
                                    }
                                    
                                
                                //  result
                                //  ======
                                 
                                    //	check
                                    //	=====
                                        switch (true)
                                        {
                                            case (!(_loginResult.authenticationToken)):
                                            case (!(_loginResult.user)):
                                            case (!(_loginResult.user.id)):
                                            case (!(_loginResult.user.shardId)):
                                                _onFailure('login / invalid result');
                                                return;
                                        }

                                        
                                    //	loginWithAuthToken
                                    //	==================
                                        __readable_by_evernote.__evernote_remote.loginWithAuthToken
                                        (
                                            _loginResult.authenticationToken,
                                            _onSuccess,
                                            _onFailure
                                        );
                                        return;
                            },
                            _temp_auth,                                             // temporary authentification token
                            _code, 						                        	// second factor code
                            _device_id,                                             // device id 
                            _device_description                                    // device description
                        );
                };

                
			//	allready connected, connect, or error
			//	=====================================
				if (__readable_by_evernote.__evernote_remote.is__connected)
                {
                    //  do
                    _loginFunction();
                }
                else
				{
					//	connect
					__readable_by_evernote.__evernote_remote.connect
                    (
                        function () { _loginFunction(); },
                        function () { _onFailure('connection / invalid'); }
                    );
				}
        };

        
	//	logout
	//	======
		__readable_by_evernote.__evernote_remote.logoutWithAuthToken = function (_authToken)
        {
            try {
                __readable_by_evernote.__evernote_remote.rpc__userStore.UserStore.revokeLongSession(_authToken);
            }
            catch (e) { }
        };


	//	login
	//	=====
		__readable_by_evernote.__evernote_remote.loginWithAuthToken = function (_authToken, _onSuccess, _onFailure)
		{
		    //  fail fast
		    //  =========
		        if (_authToken > ''); else
		        {
                    _onFailure('getUser / exception / no token');
                    return;
		        }
		
            //  login sucess
            //  ============
                var _doSuccess = function () { _onSuccess(); };
        
            //  get user function
            //  =================
                var _getUserFunction = function ()
                {
                    //	get user
                    //	========
                        __readable_by_evernote.__evernote_remote.rpc__userStore.UserStore.getUser
                        (
                            function (_rpc_result, _rpc_exception)
                            {
                                var 
                                    _getUserResult = _rpc_result,
                                    _getUserError = _rpc_exception
                                ;
                            
                                //  error
                                //  =====
                                
                                    if (_getUserError)
                                    {
                                        //	could not figure out error
                                        //	==========================
                                            _onFailure('getUser / exception / unknown');
                                            return;
                                    }
                                    
                                
                                //  result
                                //  ======
                                    
                                    //	check
                                    //	=====
                                        switch (true)
                                        {
                                            case (!(_getUserResult)):
                                            case (!(_getUserResult.id)):
                                            case (!(_getUserResult.shardId)):
                                                _onFailure('getUser / invalid result');
                                                return;
                                        }

                                        
                                    //	set userInfo
                                    //	============
                                        __readable_by_evernote.__evernote_remote.user__authToken = 		_authToken;
                                        __readable_by_evernote.__evernote_remote.user__expires =        (new Date()).getTime() + (1000 * 60 * 60 * 24 * 1);     //  one day, in milliseconds

                                        __readable_by_evernote.__evernote_remote.user__id = 		    _getUserResult.id;
                                        __readable_by_evernote.__evernote_remote.user__shardId = 		_getUserResult.shardId;
                                        __readable_by_evernote.__evernote_remote.user__privilege = 		_getUserResult.privilege.value;
                                        __readable_by_evernote.__evernote_remote.user__name = 		    _getUserResult.name;
                                        __readable_by_evernote.__evernote_remote.user__username = 		_getUserResult.username;
                                        __readable_by_evernote.__evernote_remote.user__email = 		    _getUserResult.email;
                                    
                                        __readable_by_evernote.__evernote_remote.is__loggedIn = true;
                                        

                                    //	note store
                                    //	==========
                                        var _rpcNoteStoreClient = new __readable_by_evernote.JSONRpcClient
                                        (
                                            function ()
                                            {
                                                //	error / timeout
                                                //  ===============
                                                    if (this.NoteStore); else
                                                    {
                                                        //  failed
                                                        _onFailure('getUser / note store / invalid');
                                                        
                                                        //  break
                                                        return;
                                                    }

                                                //  set connected
                                                //  =============
                                                    __readable_by_evernote.__evernote_remote.rpc__noteStore = this;
                                                    
                                                //  not business
                                                //  ============
                                                    if (true
                                                        && _getUserResult.accounting
                                                        && _getUserResult.accounting.businessId 
                                                        && _getUserResult.accounting.businessId > 0); else
                                                    {
                                                        _doSuccess();
                                                        return;
                                                    }
                                                    
                                                //  is business -- try login
                                                //  ========================
                                                    __readable_by_evernote.__evernote_remote.loginToBusiness(_doSuccess, _doSuccess);
                                            },
                                            __readable_by_evernote.__evernote_bootstrap.remote_domain + 'shard/' + __readable_by_evernote.__evernote_remote.user__shardId + '/json'
                                        );
                                        
                            },
                            _authToken 						                    // token
                        );
                };

                
			//	allready connected, connect, or error
			//	=====================================
				if (__readable_by_evernote.__evernote_remote.is__connected)
                {
                    //  do
                    _getUserFunction();
                }
                else
				{
					//	connect
					__readable_by_evernote.__evernote_remote.connect
                    (
                        function () { _getUserFunction(); },
                        function () { _onFailure('connection / invalid'); }
                    );
				}
        };

        
    //  login to business
    //  =================
        __readable_by_evernote.__evernote_remote.loginToBusiness = function (_onSuccess, _onFailure)
		{
            //  login sucess
            //  ============
                var _doSuccess = function () { _onSuccess(); };

            //  authenticate to business
            //  ========================
                __readable_by_evernote.__evernote_remote.rpc__userStore.UserStore.authenticateToBusiness
                (
                    function (_rpc_result, _rpc_exception)
                    {
                        var 
                            _loginResultBusiness = _rpc_result,
                            _loginErrorBusiness = _rpc_exception
                        ;
                        
                        //  error
                        //  =====
                            if (_loginErrorBusiness) { _doSuccess(); return; }
                            
                        //  result
                        //  ======
                            
                            //	check
                            //	=====
                                switch (true)
                                {
                                    case (!(_loginResultBusiness.authenticationToken)):
                                    case (!(_loginResultBusiness.user)):
                                    case (!(_loginResultBusiness.user.shardId)):
                                        _doSuccess();
                                        return;
                                }
                                //  console.log(_loginResultBusiness);

                            //	set business info
                            //	=================
                                __readable_by_evernote.__evernote_remote.business__authToken = 	_loginResultBusiness.authenticationToken;
                                __readable_by_evernote.__evernote_remote.business__expires =    _loginResultBusiness.expiration;

                                __readable_by_evernote.__evernote_remote.business__shardId =    _loginResultBusiness.user.shardId;
                                
                                //  console.log(_loginResultBusiness);
                                
                                
                            //	note store
                            //	==========
                                var _rpcNoteStoreClientBusiness = new __readable_by_evernote.JSONRpcClient
                                (
                                    function ()
                                    {
                                        //	error / timeout
                                        //  ===============
                                            if (this.NoteStore); else
                                            {
                                                _onFailure();
                                                return;
                                            }

                                        //  set connected
                                        //  =============
                                            __readable_by_evernote.__evernote_remote.is__business = true;
                                            __readable_by_evernote.__evernote_remote.business__noteStore = this;
                                            
                                        //  success
                                        //  =======
                                            _doSuccess();
                                    },
                                    __readable_by_evernote.__evernote_bootstrap.remote_domain + 'shard/' + __readable_by_evernote.__evernote_remote.business__shardId + '/json'
                                );
                    },
                    __readable_by_evernote.__evernote_remote.user__authToken
                );
        };
        
	//	clip
	//	====
		__readable_by_evernote.__evernote_remote.clip = function (_id, _url, _title, _body, _onSuccess, _onFailure)
		{
			//	preliminary check
			//	=================
				switch (true)
				{
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore)):
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore)):
					case (!(__readable_by_evernote.__evernote_remote.is__connected)):
					case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
					case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
						_onFailure('login');
						return;
				}

            //  smart filing enabled -- but the recommendation hasn't been requested yet; turn around
            //  ====================
                if (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'disabled'); else
                {
                    switch (true)
                    {
                        case (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'enabled'):
                        case (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'just_notebooks'):
                        case (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'just_tags'):
                            if (__readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]); else
                            {
                                //  get recommendation
                                //  ==================
                                    __readable_by_evernote.__evernote_remote.get_recommendation
                                    (
                                        _id,
                                        _url,
                                        _body,
                                        function ()
                                        {
                                            //  do it again; recommendatin was added to the global store
                                            __readable_by_evernote.__evernote_remote.clip(
                                                _id, _url, _title, _body, _onSuccess, _onFailure
                                            );
                                        },
                                        function ()
                                        {
                                            //  set to dummy; only try this once
                                            __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id] = true;
                                            
                                            //  do it again -- with no smart filing
                                            __readable_by_evernote.__evernote_remote.clip(
                                                _id, _url, _title, _body, _onSuccess, _onFailure
                                            );
                                        }
                                    );
                                
                                //  turn around
                                //  ===========
                                    return;
                            }
                    }
				}
            
                
            //  the finling info object
            //  =======================
            
                var _filingInfo = {
                    'source':                   'Clearly',
                    
                    'notebookGuid':             __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid,
                    'notebookName':             false,
                    'createNotebook':           false,
                    
                    'tagNameList':              [],
                    'tagNameObject':            {},
                    'tagNameRecommendation':    false,
                    'createTags':               true
                };
                
                //  previously clipped
                //  ==================
                    if (_id in __readable_by_evernote.__evernote_remote.store__id_to_guid) { _filingInfo['originalNoteGuid'] = __readable_by_evernote.__evernote_remote.store__id_to_guid[_id]; }
                
                //	tags from options
                //  =================
                    var _tags_from_options = __readable_by_evernote.__evernote_remote.setting__clip_tag.split(',');
                    for (var i=0, _i=_tags_from_options.length, _t=false; i<_i;i++)
                    {
                        _t = _tags_from_options[i].replace(/^ /, '').replace(/ $/, '')
                        if (_t > '' && !(_filingInfo.tagNameObject[_t]))
                        {
                            _filingInfo.tagNameList.push(_t);
                            _filingInfo.tagNameObject[_t] = true;
                        }
                    }

                //  personal smart-filing
                //  =====================
                
                    //  notebook
                    if (true
                        && (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'enabled' || __readable_by_evernote.__evernote_remote.setting__smart_filing == 'just_notebooks')
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].notebook
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].notebook.guid
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].notebook.name
                    )
                    {
                        _filingInfo['notebookGuid'] = __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].notebook.guid;
                        _filingInfo['notebookName'] = __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].notebook.name;
                    }
                
                    //  tags
                    if (true
                        && (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'enabled' || __readable_by_evernote.__evernote_remote.setting__smart_filing == 'just_tags')
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].tags
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].tags.list
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].tags.list.length
                    )
                    {
                        for (var i=0, _i=__readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].tags.list.length, _t=false; i<_i;i++)
                        {
                            _t = __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].tags.list[i].name;
                            if (_t > '' && !(_filingInfo.tagNameObject[_t]))
                            {
                                _filingInfo.tagNameList.push(_t);
                                _filingInfo.tagNameObject[_t] = true;
                            }
                        }
                    }
                    
                //  business smart-filing
                //  =====================
                
                    //  notebook
                    if (true
                        && (__readable_by_evernote.__evernote_remote.setting__smart_filing == 'enabled' || __readable_by_evernote.__evernote_remote.setting__smart_filing == 'just_notebooks')
                        && (__readable_by_evernote.__evernote_remote.setting__smart_filing_for_business == 'enabled')
                        && __readable_by_evernote.__evernote_remote.is__business
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation.notebook
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation.notebook.guid
                        && __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation.notebook.name
                    )
                    {
                        _filingInfo['notebookGuid'] = __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation.notebook.guid;
                        _filingInfo['notebookName'] = __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation.notebook.name;
                    }
                
			//	try and clip
			//	============

                //  final info
                //  ==========
                    //console.log('filing info');
                    //console.log(_filingInfo);
            
                //  clip do
                //  =======
                    var _clip_do = function (_do_filingInfo, _to_business)
                    {
                        //  which?
                        //  ======
                            var 
                                _noteStore = (
                                    _to_business 
                                    ? __readable_by_evernote.__evernote_remote.business__noteStore 
                                    : __readable_by_evernote.__evernote_remote.rpc__noteStore
                                ),
                                _authToken = (
                                    _to_business 
                                    ? __readable_by_evernote.__evernote_remote.business__authToken 
                                    : __readable_by_evernote.__evernote_remote.user__authToken
                                )
                            ;
                            
                        //  filing info -- for business, ignore tags
                        //  ===========
                        
                            //  properties
                            var _actualFilingInfoProperties = [ 'source', 'notebookGuid', 'originalNoteGuid' ];
                            if (_to_business); else
                            {
                                _actualFilingInfoProperties.push('tagNameList');
                                _actualFilingInfoProperties.push('createTags');
                            }
                            
                            //  copy to new filingInfo object
                            var _actualFilingInfo = {};
                            for (var z=0, _z=_actualFilingInfoProperties.length, _p=false; z<_z; z++)
                            {
                                _p = _actualFilingInfoProperties[z];
                                if (_do_filingInfo[_p]) { _actualFilingInfo[_p] = _do_filingInfo[_p]; }
                            }
                            //  console.log(_actualFilingInfo);
                            
                        //  clip
                        //  ====
                            _noteStore.NoteStoreExtra.clipNote
                            (
                                function (_rpc_result, _rpc_exception)
                                {
                                    var 
                                        _clipResult = _rpc_result,
                                        _clipError = _rpc_exception
                                    ;
                                
                                    //  error
                                    //  =====
                                    
                                        if (_clipError)
                                        {
                                            //  Firebug.Console.log(_clipError);
                                            //  console.log(_clipError);
                                            
                                            //	unknown error
                                            //	=============
                                                switch (true)
                                                {
                                                    case (!(_clipError.trace)):
                                                    case (!(_clipError.trace.indexOf)):
                                                    case (!(_clipError.trace.indexOf(')') > -1)):
                                                        _onFailure('clip / exception / no trace');
                                                        return;
                                                }
                                            
                                            //	figure out error
                                            //	================
                                                var _trace = _clipError.trace.substr(0, _clipError.trace.indexOf(')')+1);
                                                switch (_trace)
                                                {
                                                    case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                                    case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                                    case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                        _onFailure('login');
                                                        return;
                                                }

                                            //	could not figure out error
                                            //	==========================
                                                _onFailure('clip / exception / unknown');
                                                return;
                                        }
                                        
                                    //  result
                                    //  ======

                                        //	check
                                        //	=====
                                            switch (true)
                                            {
                                                case (!(_clipResult > '')):
                                                case (!(_clipResult.split('-').length == 5)):
                                                    _onFailure('clip / invalid result');
                                                    return;
                                            }
                                            
                                        //  store this version
                                        //  ==================
                                            
                                            //  guid
                                            __readable_by_evernote.__evernote_remote.store__id_to_guid[_id] = _clipResult;
                                            
                                            //  other details
                                            __readable_by_evernote.__evernote_remote.store__id_to_info[_id] =
                                            {
                                                'guid':             __readable_by_evernote.__evernote_remote.store__id_to_guid[_id],
                                                'tag_names':        (_do_filingInfo['tagNameList'] ? _do_filingInfo['tagNameList'] : []),
                                                'notebook_name':    (_do_filingInfo['notebookName'] ? _do_filingInfo['notebookName'] : ''),
                                                'notebook_guid':    (_do_filingInfo['notebookGuid'] ? _do_filingInfo['notebookGuid'] : '')
                                            };
                                            
                                            //  urls
                                            var 
                                                _n = __readable_by_evernote.__evernote_remote.store__id_to_info[_id],
                                                _nURL = __readable_by_evernote.__evernote_remote.get_note_link(_to_business, _n.guid, _n.notebook_guid)
                                            ;
                                                
                                            __readable_by_evernote.__evernote_remote.store__id_to_info[_id]['url_view'] = _nURL;
                                            __readable_by_evernote.__evernote_remote.store__id_to_info[_id]['url_edit'] = _nURL;
                                            
                                        //	success
                                        //	=======
                                            _onSuccess();
                                },
                                _authToken,                     // authentification token
                                _actualFilingInfo,              // filing information
                                (_title > '' ? _title : _url), 	// title
                                _url, 							// url
                                _body							// html
                            );
                    };
                        
                        
                //  do the clip -- but where?
                //  ===========
                    
                    //  the fallabck
                    //  ============
                        var _clip_to_user_default_notebook = function (_default_filingInfo)
                        {
                            __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore.getDefaultNotebook
                            (
                                function (_rpc_result, _rpc_exception)
                                {
                                    var _getResult = _rpc_result, _getError = _rpc_exception;
                                    if (true
                                        && !(_getError)
                                        && _getResult
                                        && _getResult.guid
                                        && _getResult.name)
                                    {
                                        //  found default notebook
                                        //  ======================
                                            _default_filingInfo['notebookGuid'] = _getResult.guid;
                                            _default_filingInfo['notebookName'] = _getResult.name;
                                            _clip_do(_default_filingInfo, false);
                                    }
                                    else
                                    {
                                        //  didn't find default notebook
                                        //  ============================
                                            _default_filingInfo['notebookName'] = '';
                                            delete _default_filingInfo['notebookGuid'];
                                            _clip_do(_default_filingInfo, false);
                                    }
                                },
                                __readable_by_evernote.__evernote_remote.user__authToken 	// authentification token
                            );
                        };
                        
                        
                    //  clip to shared notebook
                    //  =======================
                        var _clip_to_shared_notebook_or_user_default_notebook = function (_filingInfo)
                        {
                        };
                        
                        
                    //  straight to user's default notebook
                    //  ===================================
                        if (_filingInfo['notebookGuid'] > ''); else
                        {
                            _clip_to_user_default_notebook(_filingInfo);
                            return;
                        }
                    
                    //  try one of the user's notebooks
                    //  ===============================
                        __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore.getNotebook
                        (
                            function (_rpc_result, _rpc_exception)
                            {
                                var _getResult = _rpc_result, _getError = _rpc_exception;
                                if (true
                                    && !(_getError)
                                    && _getResult
                                    && _getResult.guid
                                    && _getResult.name)
                                {
                                    //  found user's notebook
                                    //  =====================
                                        _filingInfo['notebookName'] = _getResult.name;
                                        _clip_do(_filingInfo, false);
                                }
                                else if (__readable_by_evernote.__evernote_remote.is__business)
                                {
                                    //  try one of the user's business notebooks -- selected with proper guid
                                    //  ========================================
                                        __readable_by_evernote.__evernote_remote.business__noteStore.NoteStore.getNotebook
                                        (
                                            function (_rpc_result, _rpc_exception)
                                            {
                                                var _getResult = _rpc_result, _getError = _rpc_exception;
                                                if (true
                                                    && !(_getError)
                                                    && _getResult
                                                    && _getResult.guid
                                                    && _getResult.name)
                                                {
                                                    //  found business notebook
                                                    //  =======================
                                                        _filingInfo['notebookName'] = _getResult.name;
                                                        _clip_do(_filingInfo, true);
                                                }
                                                else
                                                {
                                                    //  user's default notebook
                                                    _clip_to_user_default_notebook(_filingInfo);
                                                }
                                            },
                                            __readable_by_evernote.__evernote_remote.business__authToken, 	// authentification token
                                            _filingInfo['notebookGuid']                                     // notebook guid
                                        );
                                }
                                else
                                {
                                    //  user's default notebook
                                    _clip_to_user_default_notebook(_filingInfo);
                                }
                            },
                            __readable_by_evernote.__evernote_remote.user__authToken, 	// authentification token
                            _filingInfo['notebookGuid']                                 // notebook guid
                        );
		};

        
/*

    //  clip to shared notebook, with a saved share.guid
    //  ============================================
    
        //  try one of the user's business notebooks -- selected by the user, as a shared/linked notebook
        //  ========================================
            __readable_by_evernote.__evernote_remote.get_linked_notebooks
            (
                //  got all linked notebooks
                //  ========================
                    function (_linked_notebooks)
                    {
                        //  loop through linked notebooks
                        //  =============================
                            for (var i=0, _i=_linked_notebooks.length; i<_i; i++)
                            {
                                if (_linked_notebooks[i].businessId && _linked_notebooks[i].guid == _filingInfo['notebookGuid'])
                                {
                                    var 
                                        _linkedNotebookShareKey = _linked_notebooks[i].shareKey,
                                        _linkedNotebookShareName = _linked_notebooks[i].shareName
                                    ;
                                    
                                    //  authenticate to shared notebook
                                    //  ===============================
                                        __readable_by_evernote.__evernote_remote.business__noteStore.NoteStore.authenticateToSharedNotebook
                                        (
                                            function (_rpc_result, _rpc_exception)
                                            {
                                                var _getResult = _rpc_result, _getError = _rpc_exception;
                                                if (true
                                                    && !(_getError)
                                                    && _getResult
                                                    && _getResult.authenticationToken)
                                                {
                                                    //  get shared notebook
                                                    //  ===================
                                                        var _sharedNotebookToken = _getResult.authenticationToken;
                                                        __readable_by_evernote.__evernote_remote.business__noteStore.NoteStore.getSharedNotebookByAuth
                                                        (
                                                            function (_rpc_result, _rpc_exception)
                                                            {
                                                                var _getResult = _rpc_result, _getError = _rpc_exception;
                                                                if (true
                                                                    && !(_getError)
                                                                    && _getResult
                                                                    && _getResult.notebookGuid)
                                                                {
                                                                    //  found business notebook
                                                                    //  =======================
                                                                        _filingInfo['notebookName'] = _linkedNotebookShareName;
                                                                        _filingInfo['notebookGuid'] = _getResult.notebookGuid;
                                                                        _clip_do(_filingInfo, true);
                                                                }
                                                                else
                                                                {
                                                                    //  user's default notebook
                                                                    _clip_to_user_default_notebook(_filingInfo);
                                                                }
                                                            },
                                                            _sharedNotebookToken
                                                        );    
                                                }
                                                else
                                                {
                                                    //  user's default notebook
                                                    _clip_to_user_default_notebook(_filingInfo);
                                                }
                                            },
                                            _linkedNotebookShareKey,
                                            __readable_by_evernote.__evernote_remote.user__authToken
                                        );
                                        
                                    //  break loop
                                    //  ==========
                                        return;
                                }
                            }
                        
                        //  user's default notebook
                        _clip_to_user_default_notebook(_filingInfo);
                    },
                
                //  failed to get linked notebooks
                //  ==============================
                    function ()
                    {
                        //  user's default notebook
                        _clip_to_user_default_notebook(_filingInfo);
                    }
            );
            
*/        
        
        
	//	recommendation
	//	==============
		__readable_by_evernote.__evernote_remote.get_recommendation = function (_id, _url, _body, _onSuccess, _onFailure)
		{
			//	preliminary check
			//	=================
				switch (true)
				{
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore)):
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore)):
					case (!(__readable_by_evernote.__evernote_remote.is__connected)):
					case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
					case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
						_onFailure('login');
						return;
				}

            //  get scuccess
            //  ============
                var _doSuccess = function () { _onSuccess(); };
            
            
            //  default to false
            //  ================
                var _defaultResultToFalse = function (_thisResult)
                {
                    var _theResult = _thisResult;
                    
                    if (_theResult); else                  { _theResult = {}; }
                    if (_theResult.notebook); else         { _theResult.notebook = false; }
                    if (_theResult.tags); else             { _theResult.tags = false; }
                    if (_theResult.relatedNotes); else     { _theResult.relatedNotes = false; }
                    
                    return _theResult;
                };
            
            //  add absolute URLs
            //  =================
                var _addAbsoluteURLs = function (_addToThisResult, _use_business)
                {
                    var _theResult = _addToThisResult;
                    
                    //  check
                    if (true
                        && _theResult.relatedNotes 
                        && _theResult.relatedNotes.list 
                        && _theResult.relatedNotes.list.length > 0); else { return _theResult; }
                    
                    //  loop
                    //  ====
                        for (var i=0, _i=_theResult.relatedNotes.list.length; i<_i; i++)
                        {
                            var _n = _theResult.relatedNotes.list[i];
                            _theResult.relatedNotes.list[i]['absoluteURL__thumbnail'] = __readable_by_evernote.__evernote_remote.get_note_thumbnail(_use_business, _n.guid);
                            _theResult.relatedNotes.list[i]['absoluteURL__noteView'] = __readable_by_evernote.__evernote_remote.get_note_link(_use_business, _n.guid, _n.notebookGuid);
                            
                            // no thumbnail
                            if (_theResult.relatedNotes.list[i]['largestResourceSize'] > 0); else {
                                _theResult.relatedNotes.list[i]['absoluteURL__thumbnail'] = 'none';
                            }
                        }
                    
                    //  return
                    return _theResult;
                };
                
            //  _body
            //  =====
                //  just text
                _body = _body.replace(/<[^>]+?>/gi, ' ');
                
                //  remove spaces
                _body = _body.replace(/\s+/gi, ' ');
                _body = _body.replace(/^\s+/gi, '');
                
                //  cut off
                _body = _body.substr(0, 5000);
                
            //  recommendation request
            //  ======================
                var _recommendationRequest = 
                {
                    'url': _url,
                    'text': _body,
                    'relatedNotesResultSpec':
                    {
                        'includeTitle': true,
                        'includeSnippet': true,
                        
                        'includeCreated': true,
                        
                        'includeLargestResourceMime': true,
                        'includeLargestResourceSize': true,
                        
                        'includeNotebookGuid': true,

                        'includeAttributes': false,
                        'includeTagNames': false
                    }
                };
                //  console.log('NoteStoreExtra.getFilingRecommendations Called with:');
                //  console.log(_recommendationRequest);
                
                
            //	try and get -- a FilingReccomendation object
			//	===========
                __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStoreExtra.getFilingRecommendations
                (
                    function (_rpc_result, _rpc_exception)
                    {
                        var 
                            _getResult = _rpc_result,
                            _getError = _rpc_exception
                        ;
                    
                        //  error
                        //  =====
                        
                            if (_getError)
                            {
                                //  Firebug.Console.log(_getError);
                                //  console.log(_getError);
                                
                                //	unknown error
                                //	=============
                                    switch (true)
                                    {
                                        case (!(_getError.trace)):
                                        case (!(_getError.trace.indexOf)):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_recommendation / exception / no trace');
                                            return;
                                    }
                                
                                //	figure out error
                                //	================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }

                                //	could not figure out error
                                //	==========================
                                    _onFailure('get_recommendation / exception / unknown');
                                    return;
                            }
                            
                        //  result
                        //  ======
                        
                            //  fill in to false
                            //  ================
                                _getResult = _defaultResultToFalse(_getResult);
                            
                            //  add absoluteURLs
                            //  ================
                                _getResult = _addAbsoluteURLs(_getResult, false);
                                
                            //  store result
                            //  ============
                                __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id] = _getResult;
                                
                            //  not business; end
                            //  =================
                                if (true
                                    && __readable_by_evernote.__evernote_remote.is__business
                                    && __readable_by_evernote.__evernote_remote.business__noteStore
                                    && __readable_by_evernote.__evernote_remote.business__noteStore.NoteStore); else
                                {
                                    _doSuccess();
                                    return;
                                }
                                
                            //  is business; get second reccomendation
                            //  ======================================
                                __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]['businessRecommendation'] = false;
                                
                                __readable_by_evernote.__evernote_remote.business__noteStore.NoteStoreExtra.getFilingRecommendations
                                (
                                    function (_rpc_result, _rpc_exception)
                                    {
                                        var 
                                            _getResultBusiness = _rpc_result,
                                            _getErrorBusiness = _rpc_exception
                                        ;
                                        
                                        //  error
                                        //  =====
                                            if (_getErrorBusiness) { _doSuccess(); return; }
                                            
                                        //  result
                                        //  ======
                                            
                                            //  fill in to false
                                            //  ================
                                                _getResultBusiness = _defaultResultToFalse(_getResultBusiness);
                                            
                                            //  add absoluteURLs
                                            //  ================
                                                _getResultBusiness = _addAbsoluteURLs(_getResultBusiness, true);
                                                
                                            //  store result
                                            //  ============
                                                __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id].businessRecommendation = _getResultBusiness;

                                        //  success
                                        //  =======
                                            //  console.log(__readable_by_evernote.__evernote_remote.store__id_to_recommendation[_id]);
                                            _doSuccess();
                                    },
                                    __readable_by_evernote.__evernote_remote.business__authToken,
                                    _recommendationRequest
                                );
                    },
                    __readable_by_evernote.__evernote_remote.user__authToken, 	// authentification token
                    _recommendationRequest                                      // recommendation request
                );
        };

        
	//	get notebooks
	//	=============
		__readable_by_evernote.__evernote_remote.get_notebooks = function (_onSuccess, _onFailure)
		{
			//	preliminary check
			//	=================
				switch (true)
				{
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore)):
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore)):
					case (!(__readable_by_evernote.__evernote_remote.is__connected)):
					case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
					case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
						_onFailure('login');
						return;
				}

            //	try and get -- a list of notebooks
			//	===========
                __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore.listNotebooks
                (
                    function (_rpc_result, _rpc_exception)
                    {
                        var 
                            _getResult = _rpc_result,
                            _getError = _rpc_exception
                        ;
                    
                        //  error
                        //  =====
                        
                            if (_getError)
                            {
                                //  Firebug.Console.log(_getError);
                                //  console.log(_getError);
                                
                                //	unknown error
                                //	=============
                                    switch (true)
                                    {
                                        case (!(_getError.trace)):
                                        case (!(_getError.trace.indexOf)):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_notebooks / exception / no trace');
                                            return;
                                    }
                                
                                //	figure out error
                                //	================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }

                                //	could not figure out error
                                //	==========================
                                    _onFailure('get_notebooks / exception / unknown');
                                    return;
                            }
                            
                        //  result
                        //  ======
                        
                            //	check
                            //	=====
                            
                                switch (true)
                                {
                                    case (!(_getResult.list)):
                                    case (!(_getResult.list.length)):
                                        _onFailure('get_notebooks / invalid result');
                                        return;
                                }
                            
                            //	success
                            //	=======
                            
                                //  sort
                                //  ====
                                    _getResult.list.sort(function (a, b)
                                    {
                                        switch (true)
                                        {
                                            case (a.name < b.name): return -1;
                                            case (a.name > b.name): return 1;
                                            default: return 0;
                                        }
                                    });
                                
                                //  return
                                //  ======
                                    _onSuccess(_getResult.list);
                    },
                    __readable_by_evernote.__evernote_remote.user__authToken 	// authentification token
                );
        };


	//	get business notebooks
	//	======================
		__readable_by_evernote.__evernote_remote.get_business_notebooks = function (_onSuccess, _onFailure)
		{
			//	preliminary check
			//	=================
				switch (true)
				{
					case (!(__readable_by_evernote.__evernote_remote.business__noteStore)):
					case (!(__readable_by_evernote.__evernote_remote.business__noteStore.NoteStore)):
					case (!(__readable_by_evernote.__evernote_remote.is__business)):
					case (!(__readable_by_evernote.__evernote_remote.is__connected)):
					case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
					case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
						_onFailure('login');
						return;
				}

            //	try and get -- a list of notebooks
			//	===========
                __readable_by_evernote.__evernote_remote.business__noteStore.NoteStore.listNotebooks
                (
                    function (_rpc_result, _rpc_exception)
                    {
                        var 
                            _getResult = _rpc_result,
                            _getError = _rpc_exception
                        ;
                    
                        //  error
                        //  =====
                        
                            if (_getError)
                            {
                                //  Firebug.Console.log(_getError);
                                //  console.log(_getError);
                                
                                //	unknown error
                                //	=============
                                    switch (true)
                                    {
                                        case (!(_getError.trace)):
                                        case (!(_getError.trace.indexOf)):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_business_notebooks / exception / no trace');
                                            return;
                                    }
                                
                                //	figure out error
                                //	================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }

                                //	could not figure out error
                                //	==========================
                                    _onFailure('get_business_notebooks / exception / unknown');
                                    return;
                            }
                            
                        //  result
                        //  ======
                        
                            //	check
                            //	=====
                            
                                switch (true)
                                {
                                    case (!(_getResult.list)):
                                    case (!(_getResult.list.length)):
                                        _onFailure('get_business_notebooks / invalid result');
                                        return;
                                }
                            
                            //	success
                            //	=======
                            
                                //  sort
                                //  ====
                                    _getResult.list.sort(function (a, b)
                                    {
                                        switch (true)
                                        {
                                            case (a.name < b.name): return -1;
                                            case (a.name > b.name): return 1;
                                            default: return 0;
                                        }
                                    });
                                
                                //  return
                                //  ======
                                    _onSuccess(_getResult.list);
                    },
                    __readable_by_evernote.__evernote_remote.business__authToken 	// authentification token
                );
        };

        
	//	get linked notebooks
	//	====================
		__readable_by_evernote.__evernote_remote.get_linked_notebooks = function (_onSuccess, _onFailure)
		{
			//	preliminary check
			//	=================
				switch (true)
				{
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore)):
					case (!(__readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore)):
					case (!(__readable_by_evernote.__evernote_remote.is__connected)):
					case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
					case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
						_onFailure('login');
						return;
				}

            //	try and get -- a list of notebooks
			//	===========
                __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore.listLinkedNotebooks
                (
                    function (_rpc_result, _rpc_exception)
                    {
                        var 
                            _getResult = _rpc_result,
                            _getError = _rpc_exception
                        ;
                    
                        //  error
                        //  =====
                        
                            if (_getError)
                            {
                                //  Firebug.Console.log(_getError);
                                //  console.log(_getError);
                                
                                //	unknown error
                                //	=============
                                    switch (true)
                                    {
                                        case (!(_getError.trace)):
                                        case (!(_getError.trace.indexOf)):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_notebooks / exception / no trace');
                                            return;
                                    }
                                
                                //	figure out error
                                //	================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }

                                //	could not figure out error
                                //	==========================
                                    _onFailure('get_linked_notebooks / exception / unknown');
                                    return;
                            }
                            
                        //  result
                        //  ======
                        
                            //	check
                            //	=====
                                
                                switch (true)
                                {
                                    case (!(_getResult.list)):
                                    case (!(_getResult.list.length)):
                                        _onFailure('get_linked_notebooks / invalid result');
                                        return;
                                }
                            
                            //	success
                            //	=======
                            
                                //  sort
                                //  ====
                                    _getResult.list.sort(function (a, b)
                                    {
                                        switch (true)
                                        {
                                            case (a.name < b.name): return -1;
                                            case (a.name > b.name): return 1;
                                            default: return 0;
                                        }
                                    });
                                
                                //  return
                                //  ======
                                    _onSuccess(_getResult.list);
                    },
                    __readable_by_evernote.__evernote_remote.user__authToken 	// authentification token
                );
        };
        
        
    //  get note link
    //      takes into account the setting "open_notes_in"
    //      if for business, uses business shard id, if not uses user shard id
    //      ads the authToken automatically
    
    __readable_by_evernote.__evernote_remote.get_note_link = function (_for_business, _note_guid, _notebook_guid)
    {
        var
            _authToken = (
                _for_business 
                ? __readable_by_evernote.__evernote_remote.business__authToken 
                : __readable_by_evernote.__evernote_remote.user__authToken
            ),
            _shardId = (
                _for_business 
                ? __readable_by_evernote.__evernote_remote.business__shardId 
                : __readable_by_evernote.__evernote_remote.user__shardId
            )
        ;
        
        switch (true)
        {
            case (__readable_by_evernote.__evernote_remote.setting__open_notes_in == 'web'):
            //  ============================================================================
            
                switch (true)
                {
                    case (!!_for_business):
                        return __readable_by_evernote.__evernote_remote.get_setAuthAndRedirect_link(''
                            +   __readable_by_evernote.__evernote_bootstrap.remote_domain 
                            +   'shard/' +  _shardId + '/' 
                            +   'business/dispatch/' 
                            +   'view/' + _note_guid
                            +   '#st=b' + '&n=' + _note_guid + '&b=' + _notebook_guid
                        );
                        break;
                        
                    case (!_for_business):
                        return __readable_by_evernote.__evernote_remote.get_setAuthAndRedirect_link(''
                            +   __readable_by_evernote.__evernote_bootstrap.remote_domain 
                            +   'shard/' +  _shardId + '/' 
                            +   'view/' + _note_guid 
                            +   '#st=p' + '&n=' + _note_guid
                        );
                        break;
                }
            
                break;
                
            case (__readable_by_evernote.__evernote_remote.setting__open_notes_in == 'desktop'):
            //  ================================================================================

                switch (true)
                {
                    case (!!_for_business):
                        return ''
                            +   'evernote:///view/' 
                            +   __readable_by_evernote.__evernote_remote.user__id + '/' 
                            +   _shardId + '/' 
                            +   _note_guid + '/'
                            +   _note_guid + '/'
                            +   _notebook_guid + '/'
                            +   '?currentUSN=0'
                        ;
                        break;
                        
                    case (!_for_business):
                        return ''
                            +   'evernote:///view/' 
                            +   __readable_by_evernote.__evernote_remote.user__id + '/' 
                            +   _shardId + '/' 
                            +   _note_guid + '/'
                            +   _note_guid + '/'
                            +   '?currentUSN=0'
                        ;
                        break;
                }
            
                break;
        }
    };
    
    
    //  get SetAuthAndRedirect link
    //      if desktop client selected, will return the URL it was given
    //      to login on the web/client, before going to where we wnt to go
    
    __readable_by_evernote.__evernote_remote.get_setAuthAndRedirect_link = function (_link)
    {
        switch (true)
        {
            case (__readable_by_evernote.__evernote_remote.setting__open_notes_in == 'web'):
                return ''
                    + __readable_by_evernote.__evernote_bootstrap.remote_domain
                    + 'SetAuthToken.action?auth=' + encodeURIComponent(__readable_by_evernote.__evernote_remote.user__authToken)
                    + '&targetUrl=' + encodeURIComponent(_link)
                ;
                break;
                
            case (__readable_by_evernote.__evernote_remote.setting__open_notes_in == 'desktop'):
                return _link;
                break;
        }        
    };
    
    
    //  get note thumbnail image
    //      will always get from the web
    //      will use the business auth token to get a business thumnbail
    
    __readable_by_evernote.__evernote_remote.get_note_thumbnail = function (_for_business, _note_guid)
    {
        var
            _authToken = (
                _for_business 
                ? __readable_by_evernote.__evernote_remote.business__authToken 
                : __readable_by_evernote.__evernote_remote.user__authToken
            ),
            _shardId = (
                _for_business 
                ? __readable_by_evernote.__evernote_remote.business__shardId 
                : __readable_by_evernote.__evernote_remote.user__shardId
            )
        ;

        return ''
            + __readable_by_evernote.__evernote_bootstrap.remote_domain
            + 'shard/' +  _shardId + '/'
            + 'thm/note/'
            + _note_guid
            + '?auth=' + encodeURIComponent(_authToken)
            + '&size=75'
        ;
    };
    

	
	//	logout
	//	======
		__readable_by_evernote.__evernote_remote.logout = function ()
		{
			__readable_by_evernote.__evernote_remote['is__connected'] =     	false;
			__readable_by_evernote.__evernote_remote['is__loggedIn'] = 	        false;

			__readable_by_evernote.__evernote_remote['rpc__userStore'] = 	    false;
			__readable_by_evernote.__evernote_remote['rpc__noteStore'] = 	    false;

			__readable_by_evernote.__evernote_remote['user__authToken'] = 	    false;
            __readable_by_evernote.__evernote_remote['user__expires'] = 	    false;
            
            __readable_by_evernote.__evernote_remote['user__id'] = 	            false;
			__readable_by_evernote.__evernote_remote['user__shardId'] = 	    false;
			__readable_by_evernote.__evernote_remote['user__privilege'] = 	    false;
			__readable_by_evernote.__evernote_remote['user__username'] = 	    false;
			__readable_by_evernote.__evernote_remote['user__email'] = 	        false;

            
            __readable_by_evernote.__evernote_remote['is__business'] = 	        false;

            __readable_by_evernote.__evernote_remote['business__noteStore'] =   false;
            
            __readable_by_evernote.__evernote_remote['business__authToken'] =   false;
            __readable_by_evernote.__evernote_remote['business__expires'] =     false;

            __readable_by_evernote.__evernote_remote['business__shardId'] =     false;
		};

		
    //  disconnect -- QA testing
    //  ==========
        __readable_by_evernote.__evernote_remote.disconnect = function ()
        {
            __readable_by_evernote.__evernote_remote.logout();
        };
        
		/*
 * Evernote.XORCrypt
 * Evernote
 *
 * Created by Pavel Skaldin on 3/7/10
 * Copyright 2010-2013 Evernote Corp. All rights reserved
 */
/**
 * Naive implementation of XOR encryption with padding. It is not meant to be a
 * strong encryption of any kind, just an obfuscation. The algorithm uses a seed
 * string for XORing. The string to be encrypted is first XOR'd with a random
 * number to avoid recognizable patterns; the result is then padded and then
 * XOR'd with the seed string.
 * 
 * Make sure that XORCrypt.LENGTH is larger than the strings you're trying to
 * encrypt.
 * 
 * <pre>
 * Usage: 
 * var enc = Evernote.XORCrypt.encrypt(secret, seed); 
 * var dec = Evernote.XORCrypt.decrypt(enc, seed);
 * </pre>
 */
__readable_by_evernote.__evernote_xor = {
  DELIMIT : ":",
  LENGTH : 128,
  /**
   * Pads string to make it XORCrypt.LENGTH characters in length. Padding is
   * done by prepending the string with random chars from a range of printable
   * ascii chars.
   */
  _padString : function(str) {
    var counter = 0;
    if (str.length < 128) {
      for ( var i = str.length; i <= 128; i++) {
        str = String.fromCharCode(this._randomForChar()) + str;
        counter++;
      }
    }
    return counter + this.DELIMIT + str;
  },
  /**
   * Returns random number that would correspond to a printable ascii char.
   */
  _randomForChar : function() {
    var r = 0;
    var c = 0;
    while (r < 33 || r > 126) {
      // just a waiting... this shouldn't happen frequently
      r = parseInt(Math.random() * 150);
      c++;
    }
    return r;
  },
  /**
   * Returns random non-zero integer.
   */
  _randomNonZero : function() {
    var r = 0;
    while ((r = parseInt(Math.random() * 100)) == 0) {
      // just a waiting... this shouldn't happen frequently
    }
    return r;
  },
  /**
   * Shifts string by XOR'ing it with a number larger than 100 so as to avoid
   * non-printable characters. The resulting string will be prepended with the
   * number used to XOR followed by DELIMITER.
   */
  _shiftString : function(str) {
    var delta = this._randomNonZero() + 100;
    var shifted = [];
    for ( var i = 0; i < str.length; i++) {
      shifted.push(String.fromCharCode(str.charCodeAt(i) + delta));
    }
    return delta + this.DELIMIT + shifted.join("");
  },
  /**
   * Unshifts and returns a shifted string. The argument should be in a format
   * produced by _shitString(), i.e. begin with the shift coefficient followed
   * by DELIMITER, followed by the shifted string.
   */
  _unshiftString : function(str) {
    var delta = parseInt(str.substring(0, str.indexOf(this.DELIMIT)));
    var unshifted = [];
    if (!isNaN(delta)) {
      for ( var i = ((delta + "").length + this.DELIMIT.length); i < str.length; i++) {
        unshifted.push(String.fromCharCode(str.charCodeAt(i) - delta));
      }
    }
    return unshifted.join("");
  },
  /**
   * Encrypts string with a seed string and returns encrypted string padded to
   * be XORCrypt.LENGTH characters long.
   */
  encrypt : function(str, seed) {
    str += "";
    seed += "";
    var newStr = this._padString(this._shiftString(str));
    var enc = [];
    for ( var i = 0; i < newStr.length; i++) {
      var e = newStr.charCodeAt(i);
      for ( var j = 0; j < seed.length; j++) {
        e = seed.charCodeAt(j) ^ e;
      }
      enc.push(String.fromCharCode(e + 100));
    }
    return enc.join("");
  },
  /**
   * Decrypts string using seed string. The seed string has to be the same
   * string that was used in encrypt()ing.
   */
  decrypt : function(str, seed) {
    str += "";
    seed += "";
    var dec = [];
    for ( var i = 0; i < str.length; i++) {
      var e = str.charCodeAt(i) - 100;
      for ( var j = seed.length - 1; j >= 0; j--) {
        e = seed.charCodeAt(j) ^ e;
      }
      dec.push(String.fromCharCode(e));
    }
    var decStr = dec.join("");
    var pad = parseInt(decStr.substring(0, decStr.indexOf(this.DELIMIT)));
    if (!isNaN(pad)) {
      return this._unshiftString(decStr.substring(("" + pad).length
          + this.DELIMIT.length + pad));
    }
    return "";
  }
};


        
		//	stored credentials
		
	//	get/set stored evernote credentials
	//	requires __evernote_xor present in context
	//	==========================================
	
	//	get
	//	===
		__readable_by_evernote.__get_stored_evernote_credentials = function ()
		{
			switch (true)
			{
				case (!(localStorage['storedEvernoteUsername'] > '')):
				case (!(localStorage['storedEvernotexAuthToken'] > '')):
					return false;
			}
		
			var _r = {};
				_r.username = localStorage['storedEvernoteUsername'];
                _r.server = ((localStorage['storedEvernoteServer'] == 'main' || localStorage['storedEvernoteServer'] == 'china') ? localStorage['storedEvernoteServer'] : 'none');
				_r.xAuthToken = __readable_by_evernote.__evernote_xor.decrypt(localStorage['storedEvernotexAuthToken'], _r.username);
			return _r;
		};

		
	//	set
	//	===
		__readable_by_evernote.__set_stored_evernote_credentials = function (_o)
		{
			switch (true)
			{
				case (!(_o['username'] > '')):
				case (!(_o['xAuthToken'] > '')):
					return false;
			}
		
			localStorage['storedEvernoteServer'] = __readable_by_evernote.__evernote_bootstrap.server;
			localStorage['storedEvernoteUsername'] = _o.username;
			localStorage['storedEvernotexAuthToken'] = __readable_by_evernote.__evernote_xor.encrypt(_o['xAuthToken'], _o['username']);
			localStorage['storedEvernotePassword'] = '';

            return true;
		};

		
	//	logout on next action
	//	=====================
	
		__readable_by_evernote.__get_stored_evernote_logoutOnNextAction = function ()
		{
			if (localStorage['storedEvernoteLogoutOnNextAction']); else { return false; }
			if (localStorage['storedEvernoteLogoutOnNextAction'] == 'yes'); else { return false; }
			
			//	reset
			localStorage['storedEvernoteLogoutOnNextAction'] = '';
			
			//	return true
			return true;
		};
	
		__readable_by_evernote.__set_stored_evernote_logoutOnNextAction = function ()
		{
			//	set
			localStorage['storedEvernoteLogoutOnNextAction'] = 'yes';
		};
	
	
		//	select theme and size
		
	//	select theme
	//	============
		__readable_by_evernote.__save__select_theme = function (_theme_id)
		{
			//	the themes
			
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
	
	

			
	//	__encodeURIComponentForReadable must be defined

	var __the_themes = 
	{
		'theme-1':
		{
			'text_font': 			__encodeURIComponentForReadable('"PT Serif"'),
			'text_font_header': 	__encodeURIComponentForReadable('"PT Serif"'),
			'text_font_monospace': 	__encodeURIComponentForReadable('Inconsolata'),
			'text_size': 			__encodeURIComponentForReadable('16px'),
			'text_line_height': 	__encodeURIComponentForReadable('1.5em'),
			'box_width': 			__encodeURIComponentForReadable('36em'),
			'color_background': 	__encodeURIComponentForReadable('#f3f2ee'),
			'color_text': 			__encodeURIComponentForReadable('#1f0909'),
			'color_links': 			__encodeURIComponentForReadable('#065588'),
			'text_align': 			__encodeURIComponentForReadable('normal'),
			'base': 				__encodeURIComponentForReadable('theme-1'),
			'footnote_links': 		__encodeURIComponentForReadable('on_print'),
			'large_graphics': 		__encodeURIComponentForReadable('do_nothing'),
			'custom_css': 			__encodeURIComponentForReadable('')
		},
		
		'theme-2':
		{
			'text_font': 			__encodeURIComponentForReadable('Helvetica, Arial'),
			'text_font_header': 	__encodeURIComponentForReadable('Helvetica, Arial'),
			'text_font_monospace': 	__encodeURIComponentForReadable('"Droid Sans Mono"'),
			'text_size': 			__encodeURIComponentForReadable('14px'),
			'text_line_height': 	__encodeURIComponentForReadable('1.5em'),
			'box_width': 			__encodeURIComponentForReadable('42em'),
			'color_background': 	__encodeURIComponentForReadable('#fff'),
			'color_text': 			__encodeURIComponentForReadable('#333'),
			'color_links': 			__encodeURIComponentForReadable('#090'),
			'text_align': 			__encodeURIComponentForReadable('normal'),
			'base': 				__encodeURIComponentForReadable('theme-2'),
			'footnote_links': 		__encodeURIComponentForReadable('on_print'),
			'large_graphics': 		__encodeURIComponentForReadable('do_nothing'),
			'custom_css': 			__encodeURIComponentForReadable('')
		},
		
		'theme-3':
		{
			'text_font': 			__encodeURIComponentForReadable('"PT Serif"'),
			'text_font_header': 	__encodeURIComponentForReadable('"PT Serif"'),
			'text_font_monospace': 	__encodeURIComponentForReadable('Inconsolata'),
			'text_size': 			__encodeURIComponentForReadable('16px'),
			'text_line_height': 	__encodeURIComponentForReadable('1.5em'),
			'box_width': 			__encodeURIComponentForReadable('36em'),
			'color_background': 	__encodeURIComponentForReadable('#2d2d2d'),
			'color_text': 			__encodeURIComponentForReadable('#e3e3e3'),
			'color_links': 			__encodeURIComponentForReadable('#e3e3e3'),
			'text_align': 			__encodeURIComponentForReadable('normal'),
			'base': 				__encodeURIComponentForReadable('theme-3'),
			'footnote_links': 		__encodeURIComponentForReadable('on_print'),
			'large_graphics': 		__encodeURIComponentForReadable('do_nothing'),
			'custom_css': 			__encodeURIComponentForReadable('')
		}
	};
			
			//	to save
			var _to_save = __the_themes[_theme_id];
				_to_save['theme'] = _theme_id;
				
			//	save
			__readable_by_evernote.__save_someStuff(_to_save);
		};
	
		__readable_by_evernote.__save__select_theme__custom = function ()
		{
			//	the themes
			
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
	
	


			//	to save
			var _to_save = {};
				_to_save['theme'] = 'custom';
				
			//	get custom
			var _vars = __readable_by_evernote.__get_saved__vars();
			__decodeURIComponentForReadable(_vars['custom_theme_options']).replace
			(
				/\[\[=(.*?)\]\[=(.*?)\]\]/gi,
				function (_match, _name, _value) { _to_save[_name] = _value; }
			);
				
			//	save
			__readable_by_evernote.__save_someStuff(_to_save);
		};
	
	
	//	select size
	//	===========
		__readable_by_evernote.__save__select_size = function (_size)
		{
			//	the sizes
			
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
	
	

			
	var __the_sizes = 
	{
		'small':
		{
			'theme-1': '12px',
			'theme-2': '12px',
			'theme-3': '12px',
			'custom':  '12px'
		},
	
		'medium':
		{
			'theme-1': '16px',
			'theme-2': '16px',
			'theme-3': '16px',
			'custom':  '16px'
		},
		
		'large':
		{
			'theme-1': '20px',
			'theme-2': '20px',
			'theme-3': '20px',
			'custom':  '20px'
		}
	};

		
			//	current vars
			var _current_vars = __readable_by_evernote.__get_saved__vars();
			
			//	save
			__readable_by_evernote.__save_someStuff(
				{ 'text_size': __the_sizes[_size][_current_vars['theme']] }
			);
		};

        
	//	select related notes
	//	====================
		__readable_by_evernote.__save__select_related_notes = function (_setting)
		{
			//	encode
			
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
	
	

		
			//	save
			__readable_by_evernote.__save_someStuff(
				{ 'related_notes': __encodeURIComponentForReadable(_setting) }
			);
		};
        

		//	translations
		
	__readable_by_evernote.__get_translations = function ()
	{
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
	
	


		//	translations include
		
	function __get_translations_inside()
	{
		var 
			_return = {},
			_list =
			[
				'menu__close__tooltip',
				'menu__clip_to_evernote__tooltip',
                'menu__highlight_to_evernote__tooltip',
				'menu__print__tooltip',
				'menu__settings__tooltip',
				'menu__fitts__tooltip',
                'menu__speak__tooltip',
                'menu__speak__play__tooltip',
                'menu__speak__pause__tooltip',
                'menu__speak__forward__tooltip',
                'menu__speak__rewind__tooltip',
				
				'rtl__main__label',
				'rtl__ltr__label',
				'rtl__rtl__label',
				
				'blank_error__heading',
				'blank_error__body',
				
                'related_notes__title',
                'related_notes__disable_short',
                'related_notes__disable_long',

                'filing_info__title_normal',
                'filing_info__title_smart',
                'filing_info__default_notebook',
                'filing_info__view',
                'filing_info__edit',
                'filing_info__sentence',
                'filing_info__sentence_no_tags',
                'filing_info__sentence_and',
                'filing_info__sentence_other_tags',
                
				'evernote_clipping',
				'evernote_clipping_failed',
				
				'evernote_login__heading',
				'evernote_login__spinner',
				'evernote_login__create_account',
				'evernote_login__button_do__label',
				'evernote_login__button_cancel__label',
				
				'evernote_login__username__label',
				'evernote_login__password__label',
				'evernote_login__rememberMe__label',
				
				'evernote_login__username__error__required',
				'evernote_login__username__error__length',
				'evernote_login__username__error__format',
				'evernote_login__username__error__invalid',
				
				'evernote_login__password__error__required',
				'evernote_login__password__error__length',
				'evernote_login__password__error__format',
				'evernote_login__password__error__invalid',
                'evernote_login__password__error__timeout',

                'evernote_login__password__error__reset',
                'evernote_login__general__error',

                'evernote_two_factor__message__sms',
                'evernote_two_factor__message__google',

                'evernote_two_factor__code__label',
                'evernote_two_factor__code__error__required',
                'evernote_two_factor__code__error__length',
                'evernote_two_factor__code__error__format',
                'evernote_two_factor__code__error__invalid',
        
                'evernote_two_factor__button_do__label',
                'evernote_two_factor__button_help__label',
                
				'settings__theme__1',
				'settings__theme__2',
				'settings__theme__3',
				'settings__theme__custom',
				
				'settings__fontSize__small',
				'settings__fontSize__medium',
				'settings__fontSize__large',
                
                'features__title__new',
                'features__title__all',

                'features__speech__title',
                'features__speech__text',
                'features__speech__text__powered',
                'features__speech__text__requires',
                'features__speech__text__available',
                'features__speech__text__available_languages',
                'features__speech__text__try',
                'features__speech__text__upgrade',
                'features__speech__text__language',
                'features__speech__text__play',
                'features__speech__text__cancel',
                'features__speech__no_language_title',
                'features__speech__no_language_explanation',
                
                'features__clipping__title',
                'features__clipping__text',

                'features__highlighting__title',
                'features__highlighting__text',

                'features__related_notes__title',
                'features__related_notes__text',

                'features__smart_filing__title',
                'features__smart_filing__text',
                
                'features__eula_notice',
                'features__close2',
                
                'misc__page'
			]
		;
		
		for (var i=0,_i=_list.length; i<_i; i++) {
			_return[_list[i]] = __get_translations_inside__getForKey(_list[i]);
		}
		
		return _return;
	}


		//	translation function
		function __get_translations_inside__getForKey(_key)
		{
			var _t = chrome.i18n.getMessage('inside__'+_key);
			return __encodeURIComponentForReadable(_t > '' ? _t : '');
		}
	
		return __get_translations_inside();
	}


		
	//	events
	//	======
		
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
	{
		//	invalid
		if (request._type); else { sendResponse({}); }
		
        //  dispatcher
        var __event_dispatch = function (_event_name, _arguments)
        {
            switch (true)
            {
                case (_event_name == 'to-content--evernote--login--request-second-factor'):
                    chrome.tabs.sendRequest(
                        sender.tab.id, 
                        { 
                            '_type': _event_name,
                            '_deliveryHint': _arguments['_deliveryHint']
                        }
                    );
                    break;
            
                case (_event_name == 'to-content--evernote--get-recommendation--successful'):
                    chrome.tabs.sendRequest(
                        sender.tab.id, 
                        { 
                            '_type': _event_name,
                            '_recommendation': __readable_by_evernote.__evernote_remote.store__id_to_recommendation[_arguments['_page_id']]
                        }
                    );
                    break;
                    
                case (_event_name == 'to-content--evernote--clip--successful'):
                case (_event_name == 'to-content--evernote--clip-highlights--successful'):
                    chrome.tabs.sendRequest(
                        sender.tab.id, 
                        { 
                            '_type': _event_name,
                            '_info': __readable_by_evernote.__evernote_remote.store__id_to_info[_arguments['_page_id']]
                        }
                    );
                    break;
                    
                default:
                    chrome.tabs.sendRequest(
                        sender.tab.id, 
                        { '_type': _event_name }
                    );
                    break;
            }
        };
        
		//	switch
		switch (request._type)
		{
            case 'to-chrome--open--settings':                           chrome.tabs.create({ 'selected': true, 'url': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/options/options.html' }); sendResponse({});             break;
            case 'to-chrome--open--settings--theme':                    chrome.tabs.create({ 'selected': true, 'url': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/options/options.html#showCustom' }); sendResponse({});  break;
            case 'to-chrome--open--settings--speech':                   chrome.tabs.create({ 'selected': true, 'url': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/options/options.html#showSpeech' }); sendResponse({});  break;

            case 'to-chrome--open--password-reset':                     
                var defaultLoginPath = 'https://www.evernote.com/';
                __readable_by_evernote.__evernote_bootstrap.bootstrap(
                    function () {
                        var url = '';
                            url = (url > '' ? url : __readable_by_evernote.__evernote_bootstrap.remote_domain);
                            url = (url > '' ? url : defaultLoginPath); 
                            url = url + 'Login.action?targetUrl=%2FChangePassword.action%3Fv1%3Dtrue';
                             
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    },
                    function () {
                        var url = defaultLoginPath;
                            url = url + 'Login.action?targetUrl=%2FChangePassword.action%3Fv1%3Dtrue';
                        
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    }
                );
                sendResponse({});
                break;
            
            case 'to-chrome--open--premium':
                var defaultInfoURL = 'http://www.evernote.com/premium/';
                __readable_by_evernote.__evernote_bootstrap.bootstrap(
                    function () {
                        var url = '';
                            url = (url > '' ? url : __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing);
                            url = (url > '' ? url + 'premium/' : defaultInfoURL); 
                        
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    },
                    function () {
                        var url = defaultInfoURL;
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    }
                );
                sendResponse({});
                break;

            case 'to-chrome--open--two-factor-help':
                var defaultLoginPath = 'https://www.evernote.com/';
                __readable_by_evernote.__evernote_bootstrap.bootstrap(
                    function () {
                        var url = '';
                            url = (url > '' ? url : __readable_by_evernote.__evernote_bootstrap.remote_domain);
                            url = (url > '' ? url : defaultLoginPath); 
                            url = url + 'TwoStepHelp.action?auth='+encodeURIComponent(__readable_by_evernote.__evernote_remote.twoFactor__authToken);
                             
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    },
                    function () {
                        var url = defaultLoginPath;
                            url = url + 'TwoStepHelp.action?auth='+encodeURIComponent(__readable_by_evernote.__evernote_remote.twoFactor__authToken);
                        
                        /* some indenting to catch the code above */    chrome.tabs.create({ 'url': url, 'selected': true });
                    }
                );
                sendResponse({});
                break;

        
            /* === */
        
            case 'to-chrome--select--theme--theme-1':                   __readable_by_evernote.__save__select_theme('theme-1');                 sendResponse({}); break;
            case 'to-chrome--select--theme--theme-2':                   __readable_by_evernote.__save__select_theme('theme-2');                 sendResponse({}); break;
            case 'to-chrome--select--theme--theme-3':                   __readable_by_evernote.__save__select_theme('theme-3');                 sendResponse({}); break;
            case 'to-chrome--select--theme--custom':                    __readable_by_evernote.__save__select_theme__custom();                  sendResponse({}); break;
				
            case 'to-chrome--select--size--small': 	                    __readable_by_evernote.__save__select_size('small'); 	                sendResponse({}); break;
            case 'to-chrome--select--size--medium':                     __readable_by_evernote.__save__select_size('medium'); 	                sendResponse({}); break;
            case 'to-chrome--select--size--large': 	                    __readable_by_evernote.__save__select_size('large'); 	                sendResponse({}); break;

            case 'to-chrome--select--related-notes--just-at-bottom':    __readable_by_evernote.__save__select_related_notes('just_at_bottom'); 	sendResponse({}); break;
            case 'to-chrome--select--related-notes--disabled': 	        __readable_by_evernote.__save__select_related_notes('disabled'); 	    sendResponse({}); break;
                
            /* === */
            
            case 'to-chrome--track--view':                              __readable_by_evernote.__analytics__track_event(['View', request._domain, request._theme]); __readable_by_evernote.__analytics__track_session__do(); sendResponse({}); break;
            case 'to-chrome--track--clip':                              /* will be done from inside extension code; here just for uniformity's sake */ sendResponse({}); break;
            case 'to-chrome--track--theme-popup':                       __readable_by_evernote.__analytics__track_event(['Theme Popup', 'Theme Popup']); __readable_by_evernote.__analytics__track_session__do(); sendResponse({}); break;
            case 'to-chrome--track--settings':                          __readable_by_evernote.__analytics__track_event(['Settings Page', 'Settings Page']); __readable_by_evernote.__analytics__track_session__do(); sendResponse({}); break;
            case 'to-chrome--track--speech-start':                      __readable_by_evernote.__analytics__track_event(['Speech Function', 'Speech Function']); __readable_by_evernote.__analytics__track_session__do(); sendResponse({}); break;

            case 'to-chrome--track--first-show--check':
                switch (true)
                {
                    case (!(__readable_by_evernote['firstShow'])):
                        sendResponse({});
                        break;
                        
                    case (__readable_by_evernote['firstShow'] == 'new-features'):
                        __event_dispatch('to-content--show--dialog-first--new-features');
                        sendResponse({});
                        break;
                        
                    case (__readable_by_evernote['firstShow'] == 'all-features'):
                        __event_dispatch('to-content--show--dialog-first--all-features');
                        sendResponse({});
                        break;
                }
                break;
                
            case 'to-chrome--track--first-show--mark':
                //  this instance
                __readable_by_evernote['firstShow'] = true;
                
                //  include
                //  Options:
//      "the curent version number"
//      "nope"

var __first_show_identifier = '3374.665.504';
    __first_show_identifier = 'nope';

                
                //  set
                localStorage['firstShowIdentifier'] = __first_show_identifier;
                break;
            
            /* === */
            
            case 'to-chrome--evernote--clip':
                
	//	check login
	//		if not logged in, try stored log in 
	//			on successfull login, do clip again
	//			on failed login, or no stored login, show login form
	//	
	//	try clip
	//		on fail, because of login, try stored login
	//			on successfull login, try clip again
	//			on failed login, or no stored login, show login form
	//	============================================================
	
	
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();

    
    
	//	logout on next action
	//	=====================
		if (__readable_by_evernote.__get_stored_evernote_logoutOnNextAction()) { __readable_by_evernote.__evernote_remote.logout(); }
	
	
	//	stored login
	//	============
		var _storedLogin = __readable_by_evernote.__get_stored_evernote_credentials();

            
    //  success function
    //  ================
        var _clipping_successful = function (_id)
        {
            //  send event
            //  ==========
                __event_dispatch(
                    'to-content--evernote--clip--successful',
                    { '_page_id': _id }
                );
            
            //  track
            //  =====
                __readable_by_evernote.__analytics__track_event([
                    'Clip', 
                    (sender.tab && sender.tab.url && (sender.tab.url.indexOf('/', 8) > -1) ? sender.tab.url.substr(0, (sender.tab.url.indexOf('/', 8)+1)) : 'blank-domain'), 
                    (__readable_by_evernote.__evernote_remote['user__privilege'] ? 'privilege-'+__readable_by_evernote.__evernote_remote['user__privilege'] : 'blank-privilege')
                ]);
                __readable_by_evernote.__analytics__track_session__do();
        };

        
    //  failed function
    //  ===============
        var _clipping_failed = function ()
        {
            //  send event
            //  ==========
                __event_dispatch('to-content--evernote--clip--failed');
        };

        
    //  bootstrap + show login
    //  ======================
        var _request_login = function ()
        {
            __readable_by_evernote.__evernote_bootstrap.bootstrap(
                function ()
                {
                    __event_dispatch('to-content--evernote--login--set--' + (__readable_by_evernote.__evernote_bootstrap.profiles_as_string.replace(/_/g, '-')));
                    __event_dispatch('to-content--evernote--login--show--in-frame');
                    __event_dispatch('to-content--evernote--login--show');
                },
                function () { _clipping_failed(); }
            );
        };
        
    
	switch (true)
	{

		//	not connected / logged-in
		//	and we know this -- so do connect/login
		//	=======================================
		case (!(__readable_by_evernote.__evernote_remote.is__connected)):
		case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
        case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
            
			//	no stored login
			//	===============
			if (_storedLogin == false) { _request_login(); return; }
		
			//	do stored login
			//	================
			__readable_by_evernote.__evernote_remote.loginWithAuthToken
			(
				_storedLogin.xAuthToken,

				//	success | login
				function ()
				{
					__readable_by_evernote.__evernote_remote.clip
					(
                        request._id,
						request._url,
						request._title,
						request._body,

						//	success | clip
						function () { _clipping_successful(request._id); },

						//	failure | clip
						function (_failReason) { _clipping_failed(); }
					);
				},

				//	failure | login
				function (_failReason) { _request_login(); }
			);
			
			break;
			

		//	should be both connected and logged in
		//		in case it fails because of login, we try another stored login
		//	===================================================================
		default:
		
			__readable_by_evernote.__evernote_remote.clip
			(
                request._id,
				request._url,
				request._title,
				request._body,

				//	success | clip
				function () { _clipping_successful(request._id); },

				//	failuse | clip
				function (_failReason)
				{
					//	failure because of soemthing else
					if (_failReason == 'login'); else { _clipping_failed(); return; }

					//	no stored login
					if (_storedLogin == false) { _request_login(); return; }

					//	try stored login
					__readable_by_evernote.__evernote_remote.loginWithAuthToken
					(
						_storedLogin.xAuthToken,

						//	success | login
						function ()
						{
							__readable_by_evernote.__evernote_remote.clip
							(
                                request._id,
								request._url,
								request._title,
								request._body,

								//	success | clip
								function () { _clipping_successful(request._id); },

								//	failure | clip
								function (_failReason) { _clipping_failed(); }
							);
						},

						//	failure | login
						function (_failReason) { _request_login(); }
					);
				}
			);

			break;
	}

                sendResponse({});
                break;

            case 'to-chrome--evernote--clip-highlights':
                
	//	check login
	//		if not logged in, fail 
    //	    on failed login, fail
	//	
	//	try highlight
	//		on fail, fail
	//	============================================================
	
	
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();

    
    
	//	logout on next action
	//	=====================
		if (__readable_by_evernote.__get_stored_evernote_logoutOnNextAction()) { __readable_by_evernote.__evernote_remote.logout(); }
	
	
	//	stored login
	//	============
		var _storedLogin = __readable_by_evernote.__get_stored_evernote_credentials();

            
    //  success function
    //  ================
        var _clipping_successful = function (_id)
        {
            //  send event
            //  ==========
                __event_dispatch(
                    'to-content--evernote--clip-highlights--successful',
                    { '_page_id': _id }
                );
            
            //  track
            //  =====
                __readable_by_evernote.__analytics__track_session__do();

                /*
                __readable_by_evernote.__analytics__track_event([
                    'Clip', 
                    (sender.tab && sender.tab.url && (sender.tab.url.indexOf('/', 8) > -1) ? sender.tab.url.substr(0, (sender.tab.url.indexOf('/', 8)+1)) : 'blank-domain'), 
                    (__readable_by_evernote.__evernote_remote['user__privilege'] ? 'privilege-'+__readable_by_evernote.__evernote_remote['user__privilege'] : 'blank-privilege')
                ]);
                */
        };

        
    //  failed function
    //  ===============
        var _clipping_failed = function ()
        {
            //  send event
            //  ==========
                __event_dispatch('to-content--evernote--clip-highlights--failed');
        };
        
        
    //  bootstrap + show login
    //  ======================
        var _request_login = function ()
        {
            __readable_by_evernote.__evernote_bootstrap.bootstrap(
                function ()
                {
                    __event_dispatch('to-content--evernote--login--set--' + (__readable_by_evernote.__evernote_bootstrap.profiles_as_string.replace(/_/g, '-')));
                    __event_dispatch('to-content--evernote--login--show--in-frame');
                    __event_dispatch('to-content--evernote--login--show');
                },
                function () { _clipping_failed(); }
            );
        };

        
	switch (true)
	{
    
		//	not connected / logged-in
		//	and we know this -- so do connect/login
		//	=======================================
		case (!(__readable_by_evernote.__evernote_remote.is__connected)):
		case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
        case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
		
			//	no stored login
			//	===============
			if (_storedLogin == false) { _request_login(); return; }
		
			//	do stored login
			//	================
			__readable_by_evernote.__evernote_remote.loginWithAuthToken
			(
				_storedLogin.xAuthToken,

				//	success | login
				function ()
				{
					__readable_by_evernote.__evernote_remote.clip
					(
                        request._id,
						request._url,
						request._title,
						request._body,

						//	success | clip
						function () { _clipping_successful(request._id); },

						//	failure | clip
						function (_failReason) { _clipping_failed(); }
					);
				},

				//	failure | login
				function (_failReason) { _request_login(); }
			);
            
			break;
			

		//	should be both connected and logged in
		//		in case it fails because of login, we try another stored login
		//	===================================================================
		default:
		
			__readable_by_evernote.__evernote_remote.clip
			(
                request._id,
				request._url,
				request._title,
				request._body,

				//	success | clip
				function () { _clipping_successful(request._id); },

				//	failuse | clip
				function (_failReason)
                {
					//	failure because of soemthing else
					if (_failReason == 'login'); else { _clipping_failed(); return; }

					//	no stored login
					if (_storedLogin == false) { _request_login(); return; }

					//	try stored login
					__readable_by_evernote.__evernote_remote.loginWithAuthToken
					(
						_storedLogin.xAuthToken,

						//	success | login
						function ()
						{
							__readable_by_evernote.__evernote_remote.clip
							(
                                request._id,
								request._url,
								request._title,
								request._body,

								//	success | clip
								function () { _clipping_successful(request._id); },

								//	failure | clip
								function (_failReason) { _clipping_failed(); }
							);
						},

						//	failure | login
						function (_failReason) { _request_login(); }
					);
                }
			);
            
			break;
	}

                sendResponse({});
                break;

            case 'to-chrome--evernote--speech-start':
                
	//	check login
    //      if no login, show speech dialog (with login)
	//		if logged in, check premium 
    //          if not premium, show speech dialog (with premium)
	//		if not logged in but has login, login, check premium
    //          if not premium, show speech dialog (with premium)
    //	    on failed login, show speech dialog (with login)
	//	
	//	============================================================
	
	
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();

    
	//	logout on next action
	//	=====================
		if (__readable_by_evernote.__get_stored_evernote_logoutOnNextAction()) { __readable_by_evernote.__evernote_remote.logout(); }
	
	//	stored login
	//	============
		var _storedLogin = __readable_by_evernote.__get_stored_evernote_credentials();
            
    //  bootstrap + show login
    //  ======================
        var _request_login = function ()
        {
            var _need_login = function ()
            {
                __event_dispatch('to-content--evernote--login--set--' + (__readable_by_evernote.__evernote_bootstrap.profiles_as_string.replace(/_/g, '-')));
                __event_dispatch('to-content--evernote--login--show--in-frame');
                __event_dispatch('to-content--show--dialog-speech--need-login');
            };
            
            __readable_by_evernote.__evernote_bootstrap.bootstrap(
                _need_login,
                _need_login
            );
        };

    //  start speaking
    //  ==============
        var _speak_or_upgrade = function ()
        {
            switch (true)
            {
                case (__readable_by_evernote.__evernote_remote.user__privilege > 1):
                    __event_dispatch('to-content--evernote--speech--go');
                    break;
                    
                default:
                    __event_dispatch('to-content--show--dialog-speech--need-premium');
                    break;
            }
        };
        
	switch (true)
	{
    
		//	not connected / logged-in
		//	and we know this -- so do connect/login
		//	=======================================
		case (!(__readable_by_evernote.__evernote_remote.is__connected)):
		case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
        case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
		
			//	no stored login
			//	===============
			if (_storedLogin == false) { _request_login(); return; }
		
			//	do stored login
			//	================
			__readable_by_evernote.__evernote_remote.loginWithAuthToken
			(
				_storedLogin.xAuthToken,

				//	success | login
				function () { _speak_or_upgrade(); },

				//	failure | login
				function (_failReason) { _request_login(); }
			);
            
			break;
			

		//	should be both connected and logged in
		//		in case it fails because of login, we try another stored login
		//	===================================================================
		default:
            //  which one?
            _speak_or_upgrade();
			break;
            
	}

                sendResponse({});
                break;

            case 'to-chrome--evernote--get-recommendation':
                
	//	check login
	//		if not logged in, fail 
    //	    on failed login, fail
	//	
	//	try get
	//		on fail, fail
	//	============================================================

    
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();

    
    
	//	logout on next action
	//	=====================
		if (__readable_by_evernote.__get_stored_evernote_logoutOnNextAction()) { __readable_by_evernote.__evernote_remote.logout(); }
	
	
	//	stored login
	//	============
		var _storedLogin = __readable_by_evernote.__get_stored_evernote_credentials();

            
    //  success function
    //  ================
        var _get_successful = function (_id)
        {
            //  send event
            //  ==========
                __event_dispatch(
                    'to-content--evernote--get-recommendation--successful', 
                    { '_page_id': _id }
                );
        };

        
    //  failed function
    //  ===============
        var _get_failed = function ()
        {
            //  send event
            //  ==========
                __event_dispatch('to-content--evernote--get-recommendation--failed');
        };
        
	switch (true)
	{
		//	not connected / logged-in
		//	and we know this -- so do connect/login
		//	=======================================
		case (!(__readable_by_evernote.__evernote_remote.is__connected)):
		case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
        case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
		
			//	no stored login
			//	===============
			if (_storedLogin == false) { _get_failed(); return; }
		
			//	do stored login
			//	================
			__readable_by_evernote.__evernote_remote.loginWithAuthToken
			(
				_storedLogin.xAuthToken,

				//	success | login
				function ()
				{
					__readable_by_evernote.__evernote_remote.get_recommendation
					(
						request._id,
						request._url,
						request._body,

						//	success | get
						function () { _get_successful(request._id); },

						//	failure | get
						function (_failReason) { _get_failed(); }
					);
				},

				//	failure | login
				function (_failReason) { _get_failed(); }
			);
            
			break;
			

		//	should be both connected and logged in
		//		in case it fails because of login, we try another stored login
		//	===================================================================
		default:
		
			__readable_by_evernote.__evernote_remote.get_recommendation
			(
                request._id,
				request._url,
				request._body,

				//	success | get
				function () { _get_successful(request._id); },

				//	failuse | get
				function (_failReason) { _get_failed(); }
			);
			break;
	}
    
                sendResponse({});
                break;

                    
            case 'to-chrome--evernote--login--do':
                
	//	do login
	//		store login, if rememberMe
	//	==============================

    
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();


    //  Long-session Device identification
    //  ==================================
    
        
    function identifyOsFromUserAgent (ua)
    {
        switch (true)
        {
            case (/linux/i.test(ua)):
                return 'Linux';
            
            case (/macintosh/i.test(ua)):
                var _m = ua.match(/(Mac OS [^\)]+?)\)/i);
                // if (_m && _m[1]) { return _m[1].replace(/_/g, '.'); }
                return 'Mac OS';
                
            case (/windows/i.test(ua)):
                var _m = ua.match(/Windows NT ([0-9.]+)/i);
                var _windows_variants = { 
                    "3.1":  "Windows NT 3.1",
                    "3.5":  "Windows NT 3.5",
                    "3.51": "Windows NT 3.51",
                    "4.0":  "Windows NT 4.0",
                    "5.0":  "Windows 2000",
                    "5.1":  "Windows XP",
                    "5.2":  "Windows XP",
                    "6.0":  "Windows Vista",
                    "6.1":  "Windows 7",
                    "6.2":  "Windows 8",
                };  
                if (_m && _m[1] && _windows_variants[_m[1]]) { return _windows_variants[_m[1]]; }
                return 'Windows';
        }
        
        return 'Unknown OS';
    }
    

        //  get description
        var _device_description = 'Google Chrome (' + identifyOsFromUserAgent(window.navigator.userAgent) + ')';
        


        //  set id, if not present
        if (localStorage['storedEvernoteDeviceId']); else {
            localStorage['storedEvernoteDeviceId'] = Math.floor((Math.random()*1000000)+1);
        }
        
        //  get id
        var _device_id = localStorage['storedEvernoteDeviceId'];


    //  the actual login
    //  ================
        __readable_by_evernote.__evernote_remote.loginLongSession
        (
            request._user,
            request._pass,
        
            _device_id,
            _device_description,
    
            //	success | login
            function ()
            {
                //	save credentials
                __readable_by_evernote.__set_stored_evernote_credentials({
                    'username': __readable_by_evernote.__evernote_remote.user__username,
                    'xAuthToken': __readable_by_evernote.__evernote_remote.user__authToken
                });
            
                //	raise event	
                __event_dispatch('to-content--evernote--login--successful');
            },
        
            //	fail | login
            function (_failReason)
            {
                switch (_failReason)
                {
                    case 'two-factor': 	    __event_dispatch(
                                                'to-content--evernote--login--request-second-factor',
                                                { '_deliveryHint': __readable_by_evernote.__evernote_remote.twoFactor__deliveryHint }
                                            );                                                                          break;

                    case 'username': 	    __event_dispatch('to-content--evernote--login--failed--username');          break;
                    case 'password': 	    __event_dispatch('to-content--evernote--login--failed--password');          break;
                    case 'password-reset': 	__event_dispatch('to-content--evernote--login--failed--password-reset');    break;

                    default: 			    __event_dispatch('to-content--evernote--login--failed');                    break;
                }
            }
        );

                sendResponse({});
                break;

            case 'to-chrome--evernote--login--do-second-factor':
                
	//	do login
	//		store login, if rememberMe
	//	==============================

    
	//	update settings
	//	===============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();


    //  Long-session Device identification
    //  ==================================
    
        
    function identifyOsFromUserAgent (ua)
    {
        switch (true)
        {
            case (/linux/i.test(ua)):
                return 'Linux';
            
            case (/macintosh/i.test(ua)):
                var _m = ua.match(/(Mac OS [^\)]+?)\)/i);
                // if (_m && _m[1]) { return _m[1].replace(/_/g, '.'); }
                return 'Mac OS';
                
            case (/windows/i.test(ua)):
                var _m = ua.match(/Windows NT ([0-9.]+)/i);
                var _windows_variants = { 
                    "3.1":  "Windows NT 3.1",
                    "3.5":  "Windows NT 3.5",
                    "3.51": "Windows NT 3.51",
                    "4.0":  "Windows NT 4.0",
                    "5.0":  "Windows 2000",
                    "5.1":  "Windows XP",
                    "5.2":  "Windows XP",
                    "6.0":  "Windows Vista",
                    "6.1":  "Windows 7",
                    "6.2":  "Windows 8",
                };  
                if (_m && _m[1] && _windows_variants[_m[1]]) { return _windows_variants[_m[1]]; }
                return 'Windows';
        }
        
        return 'Unknown OS';
    }
    

        //  get description
        var _device_description = 'Google Chrome (' + identifyOsFromUserAgent(window.navigator.userAgent) + ')';
        

        //  set id, if not present
        if (localStorage['storedEvernoteDeviceId']); else {
            localStorage['storedEvernoteDeviceId'] = Math.floor((Math.random()*1000000)+1);
        }
        
        //  get id
        var _device_id = localStorage['storedEvernoteDeviceId'];


    //  invalid
    //  =======
        if (__readable_by_evernote.__evernote_remote.twoFactor__authToken); else
            { __event_dispatch('to-content--evernote--login--failed'); return; }


    //  the actual login
    //  ================
        __readable_by_evernote.__evernote_remote.loginLongSessionSecondFactor
        (
            __readable_by_evernote.__evernote_remote.twoFactor__authToken,
            request._code,
            
            _device_id,
            _device_description,
    
            //	success | login
            function ()
            {
                //	save credentials
                __readable_by_evernote.__set_stored_evernote_credentials({
                    'username': __readable_by_evernote.__evernote_remote.twoFactor__username,
                    'xAuthToken': __readable_by_evernote.__evernote_remote.user__authToken
                });
            
                //	raise event	
                __event_dispatch('to-content--evernote--login--successful');
            },
        
            //	fail | login
            function (_failReason)
            {
                switch (_failReason)
                {
                    case 'code': 	    __event_dispatch('to-content--evernote--login--failed--two-factor--code');       break;
                    case 'timeout': 	__event_dispatch('to-content--evernote--login--failed--two-factor--timeout');    break;
                    default: 			__event_dispatch('to-content--evernote--login--failed');                            break;
                }
            }
        );

                sendResponse({});
                break;

                
            case 'to-chrome--evernote--login--switch-to-cn':
                if (__readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'in_cn')
                {
                    __readable_by_evernote.__evernote_bootstrap.profiles_as_string = 'cn_in';
                    __readable_by_evernote.__evernote_bootstrap.server = 'china';
                    __readable_by_evernote.__evernote_bootstrap.remote_domain = __readable_by_evernote.__evernote_bootstrap['server_'+'china'];
                    __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing = false;
                    
                    __readable_by_evernote.__evernote_remote.disconnect();
                    
                    __event_dispatch('to-content--evernote--login--set--cn-in');
                    sendResponse({});
                }
                break;
        
            case 'to-chrome--evernote--login--switch-to-in':
                if (__readable_by_evernote.__evernote_bootstrap.profiles_as_string == 'cn_in')
                {
                    __readable_by_evernote.__evernote_bootstrap.profiles_as_string = 'in_cn';
                    __readable_by_evernote.__evernote_bootstrap.server = 'main';
                    __readable_by_evernote.__evernote_bootstrap.remote_domain = __readable_by_evernote.__evernote_bootstrap['server_'+'main'];
                    __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing = false;
                    
                    __readable_by_evernote.__evernote_remote.disconnect();
                    
                    __event_dispatch('to-content--evernote--login--set--in-cn');
                    sendResponse({});
                }
                break;
            
            /* === */ /* -- chrome only events, further down */

            case 'to-chrome--get-keyboard-info':
                var 
                    _options = __readable_by_evernote.__get_saved__options(),
                    _vars = __readable_by_evernote.__get_saved__vars(),
                    _translations = __readable_by_evernote.__get_translations(),
                    
                    __key_activation = _vars['keys_activation'],
                    __key_clip = _vars['keys_clip'],
                    __key_highlight = _vars['keys_highlight'],
                    __key_speak = _vars['keys_speech'],
                    
                    __definition_items_html = __readable_by_evernote.__get__stuffAsDefinitionItemsHTML
                    ({
                        'option': _options,
                        'var': _vars,
                        'translation': _translations
                    })
                ;
                
                sendResponse
                ({
                    '_key_activation': __key_activation,
                    '_key_clip': __key_clip,
                    '_key_highlight': __key_highlight,
                    '_key_speak': __key_speak,
                    '_definition_items_html': __definition_items_html
                });
                break;
		}
	});



    //  set bootstrap info
    //  ==================
        
        //  set to live
        __readable_by_evernote.__evernote_bootstrap.set_servers_to_live();
        
        
        //  set locale
        __readable_by_evernote.__evernote_bootstrap.setLocale(window.navigator.language);

        //  saved server
        (function ()
        {
            var _storedCredentialsForBootstrap = __readable_by_evernote.__get_stored_evernote_credentials();
            if (_storedCredentialsForBootstrap && _storedCredentialsForBootstrap.server)
                { __readable_by_evernote.__evernote_bootstrap.saved_server = _storedCredentialsForBootstrap.server; }
        })();

        
	//	get settings
	//	============
		
//  set evernote remote settings
//  ============================

    (function ()
    {
    
        
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
	
	

    
        var _storedVars = __readable_by_evernote.__get_saved__vars();
        
        __readable_by_evernote.__evernote_remote.setting__related_notes = __decodeURIComponentForReadable(_storedVars['related_notes']);

        __readable_by_evernote.__evernote_remote.setting__smart_filing = __decodeURIComponentForReadable(_storedVars['smart_filing']);
        __readable_by_evernote.__evernote_remote.setting__smart_filing_for_business = __decodeURIComponentForReadable(_storedVars['smart_filing_for_business']);

        __readable_by_evernote.__evernote_remote.setting__open_notes_in = __decodeURIComponentForReadable(_storedVars['open_notes_in']);
        
        __readable_by_evernote.__evernote_remote.setting__clip_tag = __decodeURIComponentForReadable(_storedVars['clip_tag']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook = __decodeURIComponentForReadable(_storedVars['clip_notebook']);
        __readable_by_evernote.__evernote_remote.setting__clip_notebook_guid = __decodeURIComponentForReadable(_storedVars['clip_notebook_guid']);
    
    })();



	//	first run
	//	=========
		
	(function(){
        
        //  include
        //  =======
            //  Options:
//      "the curent version number"
//      "nope"

var __first_show_identifier = '3374.665.504';
    __first_show_identifier = 'nope';

    
    
		//	check
		//	=====
    
            //  already done -- somehow
            if (__readable_by_evernote['firstShow']) { return; }
        
			//	check if not first run
			if (localStorage['notFirstRun'] != 'yes') 
            {
                __readable_by_evernote['firstShow'] = 'all-features';
                return;
            }
            else
            {
                if (localStorage['firstShowIdentifier'] == __first_show_identifier); else
                {
                    __readable_by_evernote['firstShow'] = 'new-features';
                    return;
                }
            }
			
	})();
		
	(function(){
	
		//	check
		//	=====

			//	check -- maybe return
			if (localStorage['notFirstRun'] == 'yes') { return; }

			//	set
			localStorage['notFirstRun'] = 'yes';
		
		
		//	First Run
		//	=========
		
			//	open info url
			//	=============
                var defaultInfoURL = 'http://www.evernote.com/clearly/guide/';
                
                //  bootstrap first
                //  ================
                    __readable_by_evernote.__evernote_bootstrap.bootstrap
                    (
                        function ()
                        {
                            var url = '';
                                url = (url > '' ? url : __readable_by_evernote.__evernote_bootstrap.remote_domain_marketing);
                                url = (url > '' ? url + 'clearly/guide/' : defaultInfoURL);
                                
                            chrome.tabs.create({
                                'url': url,
                                'selected': true
                            });
                        },
                        function ()
                        {
                            chrome.tabs.create({
                                'url': defaultInfoURL,
                                'selected': true
                            });
                        }
                    );
            
			
	})();

            
    //  analytics
    //  =========
        var _gaq = _gaq || [];
            //_gaq.push(['_setAccount', 'UA-28238478-1']); /* test */
            _gaq.push(['_setAccount', 'UA-28770131-1']); /* live */
            _gaq.push(['_trackPageview']);
    
		
    __readable_by_evernote.__analytics__track_event = function (_params_array)
    {
        //  _gaq.push(['_trackEvent', 'category', 'action', 'opt_label', 'opt_value', 'opt_noninteraction']);
        
        _params_array.unshift('_trackEvent');
        _gaq.push(_params_array);
    };

        
    //  session analytics
    //  =================
		//  wrap everything in anonymous function
//  to isolate UsageMetrics functions from global scope
(function () {

    //  xml-http
    //  ========
        /**
 * XMLHttpRequest Wrapper Object
 * @copyright Fiji Web Deisgn, GNU/GPL
 * @author gabe@fijiwebdesign.com
 * @url www.fijiwebdesign.com
 * @version 0.1
 */

// make sure we have our fiji namespace
if (typeof(fiji) == 'undefined') {
	fiji = {};
}

/**
 * Constructor
 * @param {String} method (POST | GET)
 * @param {String} url 
 * @param {Function} callback
 * @param {Bool} async Optional Mode, defaults to Asynchronous
 */ 
fiji.xhr = function(method, url, callback, async) {
	this._init(method, url, callback, async);
};
/**
 * @static ie_activex
 * Holds IE6- XHR ActiveX version
 */
fiji.xhr.ie_activex = false;
	
/**
 * @Prototype Inherited Methods
 */
fiji.xhr.prototype = {
	
	/**
	 * Output Logging function
	 */
	debug: function(str) {},
	
	/**
	 * Constructor
	 * @param {String} method
	 * @param {String} url
	 * @param {Function} callback
	 * @param {Bool} async
	 */
	_init: function(method, url, callback, async) {
		if (method && url && callback) {
			this.req(method, url, callback, async);	
		}
	},

	/**
	 * Returns the platform dependent XHR Instance
	 */
	getXHR: function() {
		if (window.XMLHttpRequest) {
	        return new XMLHttpRequest();
	    } else if (window.ActiveXObject) {
	        if (fiji.xhr.ie_activex) {
	            return new ActiveXObject(fiji.xhr.ie_activex);
	        } else {
			    var axs = [
					"Msxml2.XMLHTTP.6.0", 
					"Msxml2.XMLHTTP.5.0", 
					"Msxml2.XMLHTTP.4.0", 
					"MSXML2.XMLHTTP.3.0", 
					"MSXML2.XMLHTTP",
					"Microsoft.XMLHTTP"
				];
	            for (var i = 0; i < axs.length ; i++) {
	                try {
	                    var xhr = new ActiveXObject(axs[i]);
	                    if (xhr) {
	                        fiji.xhr.ie_activex = axs[i];
							return xhr;
	                        break;
	                    }
	                }
	                catch (e) {/* next */}
	            }
	        }
	    }
		return false;
	},
	
	/**
	 * Create XMLHttpRequest
	 * @param {String} method
	 * @param {String} url
	 * @param {Function} callback
	 * @param {Bool} async
	 */
	req: function(method, url, callback, async) {
		// closure
	    var self = this;
	    self.xhr = this.getXHR();
	    self.callback = callback;
		method = method.toUpperCase();
		
	    // handles state changes
	    self.xhr.onreadystatechange = function( ) {
			try {
				self.callback.apply(self.xhr, [self]);
			} catch(e) {
				this.debug(e);
			}
	    }
	
	    self.xhr.open(method, url, (async === false ? false : true));
	
	    if (method == "POST") {
	        self.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        self.xhr.setRequestHeader("Method", "POST " + url + " HTTP/1.1");
	    }
		
		this.debug('new '+method+': '+url);
		
	    return self.xhr;
	},
	
	/**
	 * Stringify Object Parameters
	 * @param {Object} parameters
	 */
	stringifyParams: function(data) {
		// stringify data
		var params = '';
		for(var x in data) {
			if (data.hasOwnProperty(x)) {
				params += '&'+this.encode(x)+'='+this.encode(data[x].toString());
			}
		}
		return params;
	},
	
	/**
	 * Send the XHR request
	 * @param {Mixed} Data. Can be an Object to strigify or String Data
	 */
	send: function (data) {
		if (typeof(data) != 'string') {
			data = this.stringifyParams(data);
		}
		this.debug('sending:'+data);
		this.xhr.send(data);
	},
	
	/**
	 * Encode a url parameter
	 * @param {String} str
	 */
	encode: function(str) {
		return encodeURIComponent ? encodeURIComponent(str) : escape(str);
	}
};

    
    
    //  md5
    //  ===
        /*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "";  /* base-64 pad character. "=" for strict RFC compliance   */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s)    { return rstr2hex(rstr_md5(str2rstr_utf8(s))); }
function b64_md5(s)    { return rstr2b64(rstr_md5(str2rstr_utf8(s))); }
function any_md5(s, e) { return rstr2any(rstr_md5(str2rstr_utf8(s)), e); }
function hex_hmac_md5(k, d)
  { return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }
function b64_hmac_md5(k, d)
  { return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }
function any_hmac_md5(k, d, e)
  { return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of a raw string
 */
function rstr_md5(s)
{
  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */
function rstr_hmac_md5(key, data)
{
  var bkey = rstr2binl(key);
  if(bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}

/*
 * Convert a raw string to a hex string
 */
function rstr2hex(input)
{
  try { hexcase } catch(e) { hexcase=0; }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}

/*
 * Convert a raw string to a base-64 string
 */
function rstr2b64(input)
{
  try { b64pad } catch(e) { b64pad=''; }
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for(var i = 0; i < len; i += 3)
  {
    var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > input.length * 8) output += b64pad;
      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);
    }
  }
  return output;
}

/*
 * Convert a raw string to an arbitrary string encoding
 */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var i, j, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for(i = 0; i < dividend.length; i++)
  {
    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
  }

  /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. All remainders are stored for later
   * use.
   */
  var full_length = Math.ceil(input.length * 8 /
                                    (Math.log(encoding.length) / Math.log(2)));
  var remainders = Array(full_length);
  for(j = 0; j < full_length; j++)
  {
    quotient = Array();
    x = 0;
    for(i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if(quotient.length > 0 || q > 0)
        quotient[quotient.length] = q;
    }
    remainders[j] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for(i = remainders.length - 1; i >= 0; i--)
    output += encoding.charAt(remainders[i]);

  return output;
}

/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;

  while(++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if(x <= 0x7F)
      output += String.fromCharCode(x);
    else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
    else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                                    0x80 | ((x >>> 12) & 0x3F),
                                    0x80 | ((x >>> 6 ) & 0x3F),
                                    0x80 | ( x         & 0x3F));
  }
  return output;
}

/*
 * Encode a string as utf-16
 */
function str2rstr_utf16le(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,
                                  (input.charCodeAt(i) >>> 8) & 0xFF);
  return output;
}

function str2rstr_utf16be(input)
{
  var output = "";
  for(var i = 0; i < input.length; i++)
    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,
                                   input.charCodeAt(i)        & 0xFF);
  return output;
}

/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binl(input)
{
  var output = Array(input.length >> 2);
  for(var i = 0; i < output.length; i++)
    output[i] = 0;
  for(var i = 0; i < input.length * 8; i += 8)
    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (i%32);
  return output;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2rstr(input)
{
  var output = "";
  for(var i = 0; i < input.length * 32; i += 8)
    output += String.fromCharCode((input[i>>5] >>> (i % 32)) & 0xFF);
  return output;
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function binl_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}



    //  send not-logged-in session count
    //  ================================
        __readable_by_evernote.__send_not_logged_in_session_count = function (_count, _callback)
        {
            //  get device id; set, if not present
            //  ==================================
                //  set id, if not present
                if (localStorage['storedEvernoteDeviceId']); else {
                    localStorage['storedEvernoteDeviceId'] = Math.floor((Math.random()*1000000)+1);
                }
        
                //  get id
                var _device_id = localStorage['storedEvernoteDeviceId'];
        
            //  create request
            //  ==============
                var _request = ''
                    +  'a=' + encodeURIComponent('en-clearly-xauth-new')
                    + '&d=' + encodeURIComponent(_device_id)
                    + '&t=' + 'sessions'
                    + '&c=' + encodeURIComponent(_count)
                    + '&w=' + encodeURIComponent(Math.floor((new Date()).getTime()/1000))
                ;
                
            //  sign request
            //  ============
                var _signature = hex_md5(_request + '38f4e71b0172afbb');
                    _request = _request + '&g=' + encodeURIComponent(_signature);
                
            //  send request
            //  ============
                new fiji.xhr(
                    'get', 
                    'https://metrics.evernote.com/r?' + _request, 
                    function() {
                        //  failure
                        if (this.readyState == 4 && this.status == 200); else { return; }
                        
                        //  success
                        if (_callback) { _callback(this); }
                    }
                ).send();
        };


    //  uage metrics
    //  ============
		/*
    imported from the web-clipper
    /js/main/UsageMetrics.js
*/

// Each logged in user should get his own UsageMetrics object.
function UsageMetrics(authFunction) {
  "use strict";

  var INTERVAL_MINUTES = 15;

  // Timestamp of the 15 minute interval last sent to the server. We will not record events in this block or before.
  var lastSent = 0;
  var activityBlocks = {};

  // Gets the timestamp for the first second of the 15 minute block that we're currently in.
  function getTimeBlock() {
    var now = new Date();
    var minutes = Math.floor(now.getMinutes() / INTERVAL_MINUTES) * INTERVAL_MINUTES;
    now.setMinutes(minutes);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return Math.round(now.getTime() / 1000);
  }

  function recordActivity(callback) {
    var time = getTimeBlock();
    if (lastSent >= time) {
      if (callback) callback();
      return;
    }
    activityBlocks[time] = true;
    send(callback);
  }

  function send(callback) {
    if (!navigator.onLine) {
      if (callback) callback();
      return;
    }
    var count = 0;
    var newLastSent = 0;
    for (var i in activityBlocks) {
      var num = parseInt(i);
      count++;
      if (num > newLastSent) {
        newLastSent = num;
      }
    }

    if (count > 0) {
      sendRequest(count, newLastSent, callback);
    }
    else {
      if (callback) callback();
    }
  }

  function sendRequest(count, newLastSent, callback) {
    function resultCallback(data, error) {
      if (data) {
        activityBlocks = [];
        if (newLastSent > lastSent) {
          lastSent = newLastSent;
        }
      }
      if (callback) callback();
    }

    function sendCallback() {
      __readable_by_evernote.__evernote_remote.rpc__noteStore.NoteStore.getSyncStateWithMetrics(
        resultCallback, 
        __readable_by_evernote.__evernote_remote.user__authToken, 
        { 'sessions': count }
      );
    }

    function authCallback(_authInfo) {
      if (_authInfo && _authInfo.authenticationToken){
        sendCallback();
      }
      else {
        //console.warn("Tried to send UsageMetrics, but not logged in.");
        if (callback) callback();
      }
    }

    authFunction(authCallback, true);
  }
  
  function getJson() {
    var json = {};
    json.lastSent = lastSent;
    json.activityBlocks = {};
    // Deep copy.
    for (var i in activityBlocks) {
      json.activityBlocks[i] = activityBlocks[i];
    }
    return json;
  }

  function importFromJson(json) {
    try {
      lastSent = json.lastSent;
      activityBlocks = json.activityBlocks;
    }
    catch(e) {
      lastSent = 0;
      activityBlocks = {};
      //console.warn("Failed to import saved UsageMetrics from JSON object.");
    }
  }

  this.recordActivity = recordActivity;
  this.send = send;
  this.getJson = getJson;
  this.importFromJson = importFromJson;

  Object.preventExtensions(this);
}

Object.preventExtensions(UsageMetrics);

		/*
    derived from UsageMetrics
*/

function UsageMetricsSignedOut() {
  "use strict";

  var INTERVAL_MINUTES = 15;

  // Timestamp of the 15 minute interval last sent to the server. We will not record events in this block or before.
  var lastSent = 0;
  var activityBlocks = {};

  // Gets the timestamp for the first second of the 15 minute block that we're currently in.
  function getTimeBlock() {
    var now = new Date();
    var minutes = Math.floor(now.getMinutes() / INTERVAL_MINUTES) * INTERVAL_MINUTES;
    now.setMinutes(minutes);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return Math.round(now.getTime() / 1000);
  }

  function recordActivity(callback) {
    var time = getTimeBlock();
    if (lastSent >= time) {
      if (callback) callback();
      return;
    }
    activityBlocks[time] = true;
    send(callback);
  }

  function send(callback) {
    if (!navigator.onLine) {
      if (callback) callback();
      return;
    }
    var count = 0;
    var newLastSent = 0;
    for (var i in activityBlocks) {
      var num = parseInt(i);
      count++;
      if (num > newLastSent) {
        newLastSent = num;
      }
    }

    if (count > 0) {
      sendRequest(count, newLastSent, callback);
    }
    else {
      if (callback) callback();
    }
  }

  function sendRequest(count, newLastSent, callback) {
    function resultCallback(data) {
      if (data) {
        activityBlocks = [];
        if (newLastSent > lastSent) {
          lastSent = newLastSent;
        }
      }
      if (callback) callback();
    }

    __readable_by_evernote.__send_not_logged_in_session_count(
        count, 
        resultCallback
    );
  }

  this.recordActivity = recordActivity;
  this.send = send;

  Object.preventExtensions(this);
}

Object.preventExtensions(UsageMetrics);

		/*
    imported from the web-clipper
    /js/main/UsageMetrics.js
*/

/*
    init like this:
    if (!usageMetricsManager && auth)
        { usageMetricsManager = new UsageMetricsManager(url, isAuthenticated); }
*/

// Takes a URL to make requests against, and a function that can be called to get back auth info. Currently, the spec
// for what should be passed to authFunction and what gets passed to authFunction's callback is exactly equivalent to
// Auth.isAuthenticated(), which is:
// Auth.isAuthenticated(callback, autoRenew)
//  callback: a function to call when we've decided whether a user is authenticated, this function will be passed an
//  object with the following properties:
//    username: the username used to perform the authentication (which can be an email address).
//    authenticationToken: the authentication token returned by a successful login on the server.
//    displayName: the username as it should be displayed in the UI (should not be an email address, may be the same as
//    username.  
//  NOTE: if authentication fails, NULL is passed to 'callback', not an object with null property values.
//
//  autoRenew: a boolean indicating whether the authFunction should attempt to automatically renew a stale auth token.
function UsageMetricsManager(authFunction) {

  var usageMetrics = {};

  function recordActivity(_callback) {
    var name = "";
    function checkAuthCallback(auth)
    {
      // signed in/out
      if (auth) {
        name = auth.displayName;
      }
      else {
        name = '__signed_out';
      }
      
      // signed out
      if (name == '__signed_out') {
        var usage = usageMetrics[name];
        if (!usage) {
          usage = new UsageMetricsSignedOut();
          usageMetrics[name] = usage;
        }
        usage.recordActivity(_callback);
        return; // signed out, and done
      }
      
      // signed in
      if (name) {
        var usage = usageMetrics[name];
        if (!usage) {
          usage = new UsageMetrics(authFunction);
          usageMetrics[name] = usage;
        }
        usage.recordActivity(_callback);
      }
    }
    
    authFunction(checkAuthCallback, true);
  }

  this.recordActivity = recordActivity;

  Object.preventExtensions(this);
}
Object.preventExtensions(UsageMetricsManager);


        
    //  the metrics manager
    //  ===================
        __readable_by_evernote.__analytics__track_session__usageMetricsManager = false;

        
    //  the high level track function
    //  =============================
        __readable_by_evernote.__analytics__track_session__do = function ()
        {
            //  not instantiated yet
            //  ====================
                if (__readable_by_evernote.__analytics__track_session__usageMetricsManager); else
                {
                    //  pass "record" as callback
                    __readable_by_evernote.__analytics__track_session__init(
                        function () { __readable_by_evernote.__analytics__track_session__do(); }
                    );
                    
                    //  return
                    return;
                }
            
            //  do now
            //  ======
                __readable_by_evernote.__analytics__track_session__usageMetricsManager.recordActivity(
                    function () { console.log('UsageMetricsManager / recordActivity'); }
                );
        };
        
        
    //  init metrics manager
    //  ====================
        __readable_by_evernote.__analytics__track_session__init = function (_onSuccess)
        {
            //  instantiate
            //  ===========
                __readable_by_evernote.__analytics__track_session__usageMetricsManager = new UsageMetricsManager(
                    __readable_by_evernote.__analytics__track_session__authFunction
                );
            
            //  callback
            //  ========
                _onSuccess();
        };
    
    
    //  auth function
    //  =============
        __readable_by_evernote.__analytics__track_session__authFunction = function (_callback, _autoRenew)
        {
            //  doCallback
            var _doCallback = function (_success)
            {
                //  failed
                if (!_success) { _callback(false); return; }
                
                //  success
                _callback({ 
                    'authenticationToken':  __readable_by_evernote.__evernote_remote.user__authToken,
                    'displayName':          __readable_by_evernote.__evernote_remote.user__id,
                    'username':             __readable_by_evernote.__evernote_remote.user__id
                }); 
            };
            
            //  not logged in
            switch (true)
            {
                case (!(__readable_by_evernote.__evernote_remote.is__connected)):
                case (!(__readable_by_evernote.__evernote_remote.is__loggedIn)):
                case (!(__readable_by_evernote.__evernote_remote.is__notExpired())):
                    
                    //  don't auto renew -- just fail
                    if (_autoRenew); else { _doCallback(false); return; }

                    //  get login
                    var _storedLogin = __readable_by_evernote.__get_stored_evernote_credentials();
                    
                    //	do stored login
                    __readable_by_evernote.__evernote_remote.loginWithAuthToken
                    (
                        _storedLogin.xAuthToken,

                        //	success | login
                        function () { _doCallback(true); return; },

                        //	failure | login
                        function (_failReason) { _doCallback(false); return; }
                    );
                    
                    return;
                    break;
            }
                        
            //  logged in -- do callback
            _doCallback(true);
        };
        
})();

    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    //-* SELF DEFINED
    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    var VoiceOver = function() {
        this.alwaysMode = false;
        this.whiteList = [
            "chrome://",
            "taobao.com", "tmall.com", "jd.com", "yinyuetai.com",
            "xenojoshua.com", "weibo.com",
            "stackoverflow.com"
        ];
    };

    /**
     * Triggered when page dom loaded, start to convert page to simple format.
     *
     * <pre>
     * Notes:
     *     1. readyListener will only handle DOM ready events, and only when always mode enabled
     *     2. request must be {action: "convert"}
     *     3. current tab must be an valid page tab
     *     4. current tab url must not be in the white list, white list sites will not be converted automatically
     * </pre>
     *
     * @param {Object} request json request message
     * @param {Object} sender http://developer.chrome.com/extensions/runtime.html#type-MessageSender
     * @param {Function} sendResponse
     */
    VoiceOver.prototype.readyListener = function(request, sender, sendResponse) {
        if (!this.alwaysMode) {
            return; // always mode not enabled
        }
        if (!(request.hasOwnProperty("action") && request.action == "convert")) {
            VoiceOver.log('[backend] readyListener: request format invalid!');
            return; // request not defined by "VoiceOver", skip it
        }
        if (!sender.hasOwnProperty("tab")) {
            VoiceOver.log('[backend] readyListener: request not from a valid tab!');
            return; // request sender is an valid tab, skip it
        }

        for (var index in this.whiteList) {
            if (-1 !== sender.tab.url.indexOf(this.whiteList[index])) {
                VoiceOver.log('[backend] readyListener: url in the white list, do not convert!');
                VoiceOver.log('[backend] url: ' + sender.tab.url + ' , matched: ' + this.whiteList[index]);
                VoiceOver.log('[backend] white list:');
                VoiceOver.log(this.whiteList);
                return; // target tab is in the url white list, do not convert it
            }
        }

        // convert page
        __readable_by_evernote.__common_launch();
    };

    /**
     * Triggered when function "__readable_by_evernote.__common_launch()" done.
     * Then notify "content.js".
     */
    VoiceOver.prototype.convertListener = function() {
        VoiceOver.log('[backend] convert done!');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {finished: true});
        });
    };

    /**
     * Send log message to "content.js", and it will be logged in console.
     * @param msg
     */
    VoiceOver.log = function(msg) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {msg: msg});
        });
    };

    var voiceover = new VoiceOver();

    /**
     * Event lister of "content.js".
     */
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        voiceover.readyListener(request, sender, sendResponse); // current only {action: "convert"} be handled
    });

    chrome.commands.onCommand.addListener(function(command) {
        if (command === 'toggle-always-mode') {
            this.alwaysMode = !this.alwaysMode; // reverse the always mode status
        }
    });