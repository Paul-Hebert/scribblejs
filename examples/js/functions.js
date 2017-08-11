/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Start Up
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var primaryColor = "#f37322";
var strokeWidth = "3px";

document.addEventListener("DOMContentLoaded", function() {
    /*scribblerExample();

    setInterval(function(){
        scribblerExample()
    }, 7500);*/

    logoExample();
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Device Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

scribblerExample = function(){
    scribbler.draw({
        "selector": "#Phone path, #Phone polygon",
        "strokeColor": primaryColor,
        "strokeWidth": "2px",
        "duration": "2000",
        "fillColor": "#f0f0f0"
    });

    setTimeout(function(){
        scribbler.draw({
            "selector": "#Tablet path, #Tablet polygon",
            "strokeColor": primaryColor,
            "strokeWidth": "2px",                        
            "duration": "2000",
            "fillColor": "#f0f0f0"
        });
    }, 1000);

    setTimeout(function(){
        scribbler.draw({
            "selector": "#Laptop path, #Laptop polygon",
            "strokeColor": primaryColor,
            "strokeWidth": "2px",  
            "duration": "2000",
            "fillColor": "#f0f0f0"
        });
    }, 2000);

    setTimeout(function(){
        scribbler.draw({
            "selector": "#websites path, #websites polygon",
            "action": "erase",
            "strokeColor": primaryColor,
            "strokeWidth": "2px",
            "fillColor": "#f0f0f0"
        })
    }, 5000);
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Logo Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var logoExample = function(){
    scribbler.draw({
        "strokeColor": primaryColor,
        "strokeWidth": strokeWidth, 
        "duration": "600",
        "easing": "ease-in-out",
        "selector": [
            "#S path",
            "#C path",
            "#R1 path",
            "#I1 path",
            "#B1 path",
            "#B2 path",
            "#L path",
            "#E path",
            "#R2 path",
            "#I2 path"
        ],
        callback: function(){
            scribbler.draw({
                "strokeColor": primaryColor,
                "strokeWidth": "20px", 
                "duration": "600",
                "easing": "ease-in-out",
                "strokeLineCap": "bevel",
                "strokeLineJoin": "bevel",
                "selector": [
                    "#S-mask path",
                    "#C-mask path",
                    "#R1-mask path",
                    "#I1-mask path",
                    "#B1-mask path",
                    "#B2-mask path",
                    "#L-mask path",
                    "#E-mask path",
                    "#R2-mask path",
                    "#I2-mask path"
                ]
            });
        }
    });
}