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
        "selector": "path",
        "duration": "1000",
        "delay": "100",
        "easing": "ease-out",
        "action": "draw",
        "loop": "false",
        "strokeWidth": "1px",
        "strokeColor": "#000",
        "fillColor": "none",
        "strokeOpacity": "1",
        "strokeLineCap": "miter",
        "strokeLineJoin": "miter",
        "callback": null
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

    // Can't handle functions as properties.
    copyObject = function(object){
        return JSON.parse(JSON.stringify(object));
    }

    drawSelector = function(selector, settings){
        var domCollection = document.querySelectorAll(selector);

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

            newScribblerElement.setStyles({'transition': 'stroke-dashoffset ' + settings.duration + 'ms ' + settings.easing});

            newScribblerElement.flushDOM();

            newScribblerElement.setStyles({'stroke-dashoffset': (settings.action === "draw" ? "0" : newScribblerElement.strokeLength)});     
        }
    }

    delayedDraw = function(selector, settings, timeoutLength){
        setTimeout(function(){
            drawSelector(selector, settings);
        }, timeoutLength);
    }

    return {
        draw: function(customSettings){
            var settings = overwriteDefaults(customSettings);
            var timeoutLength = 0;

            if(typeof settings.selector === "object"){ // This is an array of selectors
                for(x = 0; x < settings.selector.length; x++){
                    delayedDraw(settings.selector[x], settings, timeoutLength);

                    timeoutLength += parseFloat(settings.delay) + parseFloat(settings.duration);
                }

                timeoutLength -= parseFloat(settings.delay);
            } else{
                drawSelector(settings.selector, settings);
            }

            var callbackDelay = timeoutLength;

            if(callbackDelay === 0){
                callbackDelay = settings.duration;
            }

            if(typeof settings.callback === "function"){
                setTimeout(function(){
                    settings.callback();
                }, callbackDelay);
            }
        }
    }
})();