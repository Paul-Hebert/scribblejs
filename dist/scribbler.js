var scribbler = (function() {
    createScribblerElement = function(element) {
        var scribblerElement = {};

        scribblerElement.strokeLength = element.getTotalLength();

        scribblerElement.setStyles = function(styles){
            var styleKeys = Object.keys(styles);


            for(var i = 0; i < styleKeys.length; i++){
                var key = styleKeys[i];
                var name = styles[key];

                element.style[key] = name;

                window.getComputedStyle(element).getPropertyValue(key);
            }
        }

        scribblerElement.flushDOM = function(){
            element.getBoundingClientRect();
        }

        return scribblerElement;
    }

    var defaults = {
        "selector": "path, polygon",
        "duration": "1000ms",
        "easing": "ease-out",
        "action": "draw",
        "loop": "false",
        "strokeWidth": "1px",
        "strokeColor": "#000",
        "fillColor": "#fff",
        "strokeOpacity": "1",
        "strokeLineCap": "miter",
        "strokeLineJoin": "miter"
    };

    overwriteDefaults = function(customSettings){
        var settings = copyObject(defaults);

        if(typeof customSettings !== "undefined"){
            var customSettingKeys = Object.keys(customSettings);

            for(var i = 0; i < customSettingKeys.length; i++){
                settings[customSettingKeys[i]] = customSettings[customSettingKeys[i]];
            }
        }

        return settings;
    }

    copyObject = function(object){
        return JSON.parse(JSON.stringify(object));
    }

    return {
        draw: function(customSettings){
            var settings = overwriteDefaults(customSettings);

            var domCollection = document.querySelectorAll(settings.selector);

            for(var i = 0; i < domCollection.length; i++){
                var newScribblerElement = createScribblerElement(domCollection[i]);

                newScribblerElement.setStyles(
                    {
                        'fill': settings.fillColor,
                        'stroke': settings.strokeColor,
                        'stroke-width': settings.strokeWidth,
                        'stroke-opacity': settings.strokeOpacity,
                        'stroke-dashoffset': (settings.action === "draw" ? newScribblerElement.strokeLength : "0"),
                        'stroke-dasharray': newScribblerElement.strokeLength + " " + newScribblerElement.strokeLength,
                        'stroke-linejoin': settings.strokeLineJoin,
                        'stroke-linecap': settings.strokeLineCap,
                        'transition': 'none' // Clear old transitions
                    }
                );

                newScribblerElement.setStyles({'transition': 'stroke-dashoffset ' + settings.duration + ' ' + settings.easing});

                newScribblerElement.flushDOM();

                newScribblerElement.setStyles({'stroke-dashoffset': (settings.action === "draw" ? "0" : newScribblerElement.strokeLength)});                
            }
        }
    }
})();