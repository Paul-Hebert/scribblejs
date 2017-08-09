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

        element.getBoundingClientRect();

        return scribbleElement;
    }

    return {
        draw: function(selector, duration) {
            var domCollection = document.querySelectorAll(selector);

            for(var i = 0; i < domCollection.length; i++){
                var newScribbleElement = createScribbleElement(domCollection[i]);

                newScribbleElement.setStyles(
                    {
                        'fill': '#fff',
                        'stroke': '#000',
                        'stroke-width': '1px',
                        'stroke-dashoffset': newScribbleElement.strokeLength,
                        'stroke-dasharray': newScribbleElement.strokeLength + " " + newScribbleElement.strokeLength
                    }
                );

                newScribbleElement.setStyles({'transition': 'stroke ' + duration + ', stroke-dashoffset ' + duration});

                newScribbleElement.setStyles({'stroke-dashoffset': '0', 'stroke': '#f00'});                
            }
        }
    }
})();