/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Start Up
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var primaryColor = "#f37322";

document.addEventListener("DOMContentLoaded", function() {
    scribblerExample();

    logoExample();
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Device Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var scribbleDevices = function(){
    //throttle(function(){
        if(isScrolledIntoView(document.getElementById("websites"))){
            scribbler.draw({
                "strokeColor": primaryColor,
                "strokeWidth": "2px",
                "duration": "2000",
                "fillColor": "#ddd",
                "delay": -1000,
                "selector": [
                    "#Phone path, #Phone polygon",
                    "#Tablet path, #Tablet polygon",
                    "#Laptop path, #Laptop polygon"
                ]
            });

            document.removeEventListener("scroll", scribbleDevices);
        }
    //}, 300)
}

var scribblerExample = function(){
    document.addEventListener("scroll", scribbleDevices);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Logo Example
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var logoExample = function(){
    scribbler.draw({
        "strokeColor": primaryColor,
        "strokeWidth": "3px", 
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
        "callback": function(){
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
                ],
                callback: function(){
                    document.getElementById('arrow').style.opacity = 1;

                    setTimeout(function(){
                        scribbler.draw({
                            'strokeColor':"#ddd",
                            'strokeWidth': "18px",
                            'fillColor':"#f0f0f0",
                            'selector': "#arrow-circle"
                        });
                    });
                }
            });
        }
    });
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Helpers
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  