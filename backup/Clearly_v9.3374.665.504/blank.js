
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


    document.title = chrome.i18n.getMessage('meta_extension_name');
    document.getElementById('tips__heading').innerHTML = __escapeForHTML(chrome.i18n.getMessage('inside__blank_error__heading'));
    document.getElementById('tips__body').innerHTML = __escapeForHTML(chrome.i18n.getMessage('inside__blank_error__body'));
