/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Start Up
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


document.addEventListener("DOMContentLoaded", function() {
    scribblerExample();

    setInterval(function(){
        scribblerExample()
    }, 7500);

    logoExample();
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Device Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

scribblerExample = function(){
    scribbler.draw({
        "selector": "#Phone path, #Phone polygon",
        "strokeColor": "#f37322",
        "strokeWidth": "2px",
        "duration": "2000ms",
        "fillColor": "#f0f0f0"
    });

    setTimeout(function(){
        scribbler.draw({
            "selector": "#Tablet path, #Tablet polygon",
            "strokeColor": "#f37322",
            "strokeWidth": "2px",                        
            "duration": "2000ms",
            "fillColor": "#f0f0f0"
        });
    }, 1000);

    setTimeout(function(){
        scribbler.draw({
            "selector": "#Laptop path, #Laptop polygon",
            "strokeColor": "#f37322",
            "strokeWidth": "2px",  
            "duration": "2000ms",
            "fillColor": "#f0f0f0"
        });
    }, 2000);

    setTimeout(function(){
        scribbler.draw({
            "selector": "#websites path, #websites polygon",
            "action": "erase",
            "strokeColor": "#f37322",
            "strokeWidth": "2px",
            "fillColor": "#f0f0f0"
        })
    }, 5000);
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Logo Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var logoExample = function(){
    var duration = 600;

    var timeOut = duration;

    timeOutChange = duration + 50;

    scribbler.draw({
        "strokeColor": "#f37322",
        "strokeWidth": "3px", 
        "selector": "#S path",
        "duration": duration + "ms",
        "easing": "ease-in-out"
    });

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#C path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#R1 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#I1 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#B1 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#B2 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#L path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#E path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#R2 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "3px", 
            "selector": "#I2 path",
            "duration": duration + "ms",
            "easing": "ease-in-out"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#S-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#C-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#R1-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#I1-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#B1-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#B2-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#L-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#E-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#R2-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);

    timeOut += timeOutChange;

    setTimeout(function(){
        scribbler.draw({
            "strokeColor": "#f37322",
            "strokeWidth": "20px", 
            "selector": "#I2-mask path",
            "duration": duration + "ms",
            "easing": "ease-in-out",
            "strokeLineCap": "bevel",
            "strokeLineJoin": "bevel"
        });
    }, timeOut);
}