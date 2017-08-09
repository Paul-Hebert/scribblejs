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

    return {
        draw: function(selector, duration) {
            this.update(selector, duration, "forwards")
        },

        erase: function(selector, duration) {
            this.update(selector, duration, "backwards")
        },

        update: function(selector,duration, direction){
            var domCollection = document.querySelectorAll(selector);

            for(var i = 0; i < domCollection.length; i++){
                var newScribbleElement = createScribbleElement(domCollection[i]);

                newScribbleElement.setStyles(
                    {
                        'fill': '#fff',
                        'stroke': '#000',
                        'stroke-width': '1px',
                        'stroke-dashoffset': (direction === "forwards" ? newScribbleElement.strokeLength : "0"),
                        'stroke-dasharray': newScribbleElement.strokeLength + " " + newScribbleElement.strokeLength
                    }
                );

                newScribbleElement.setStyles({'transition': 'stroke-dashoffset ' + duration});

                newScribbleElement.flushDOM();

                newScribbleElement.setStyles({'stroke-dashoffset': (direction === "forwards" ? "0" : newScribbleElement.strokeLength)});                
            }
        }
    }
})();