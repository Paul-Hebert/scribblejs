var scribble = (function() {
    createScribbleElement = function(element) {
        var scribbleElement = {};

        scribbleElement.strokeLength = element.getTotalLength();

        scribbleElement.setStyles = function(styles){
            var styleKeys = Object.keys(styles);


            for(var i = 0; i < styleKeys.length; i++){
                var key = styleKeys[i];
                var name = styles[key];

                element.style[key] = name;

                window.getComputedStyle(element).getPropertyValue(key);
            }
        }

        scribbleElement.flushDOM = function(){
            element.getBoundingClientRect();
        }

        return scribbleElement;
    }

    var defaults = {
        "selector": "path, polygon",
        "duration": "1000ms",
        "action": "draw",
        "loop": "false",
        "strokeWidth": "1px",
        "strokeColor": "#000",
        "fillColor": "#fff"
    };

    function overwriteDefaults(customSettings){
        var settings = defaults;

        if(typeof customSettings !== "undefined"){
            var customSettingKeys = Object.keys(customSettings);

            for(var i = 0; i < customSettingKeys.length; i++){
                settings[customSettingKeys[i]] = customSettings[customSettingKeys[i]];
            }
        }

        return settings;
    }

    return {
        draw: function(customSettings){
            var settings = overwriteDefaults(customSettings);

            var domCollection = document.querySelectorAll(settings.selector);

            for(var i = 0; i < domCollection.length; i++){
                var newScribbleElement = createScribbleElement(domCollection[i]);

                newScribbleElement.setStyles(
                    {
                        'fill': settings.fillColor,
                        'stroke': settings.strokeColor,
                        'stroke-width': settings.strokeWidth,
                        'stroke-dashoffset': (settings.action === "draw" ? newScribbleElement.strokeLength : "0"),
                        'stroke-dasharray': newScribbleElement.strokeLength + " " + newScribbleElement.strokeLength
                    }
                );

                newScribbleElement.setStyles({'transition': 'stroke-dashoffset ' + settings.duration});

                newScribbleElement.flushDOM();

                newScribbleElement.setStyles({'stroke-dashoffset': (settings.action === "draw" ? "0" : newScribbleElement.strokeLength)});                
            }
        }
    }
})();