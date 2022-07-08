//import React from "react";


import "./variable"
import variable from "./variable";
// var EfectoCss = () => {
  //let swap = false;

  const EfectoCss = () => {
    var sliceDiv = document.getElementById("inicio");
  
    var gridX = 4;
    //console.log(sliceDiv);
    var w = sliceDiv.offsetWidth;
    var h = sliceDiv.offsetHeight;
  
    var img = document.querySelectorAll("#inicio img")[0].src;
    var delay = 0.05;
  
    console.log(w, h, img);
  
   //  this.create = function () {
     console.log("primer swap: " + variable.swap);
      for (let x = 0; x < gridX; x++) {
        var width = (x * w) / gridX + "px";
        var div = document.createElement("div");
        document.getElementById("inicio").appendChild(div);
  
        div.style.left = width;
  
        div.style.top = 0;
  
        div.style.width = w / gridX + "px";
  
        div.style.height = h + "px";
        // div.style.height = 600 + "px";
  
        div.style.backgroundImage = "url(" + img + ")";
        div.style.backgroundPosition = "-" + width;
        div.style.backgroundSize = w + "px";
        div.style.delay = x * delay + "s";
        div.style.transitionDelay = x * delay + "s";
      }
    // };
  
    // this.create();
     //create();

     if (!variable.swap ) {
     variable.swap = true;
      console.log("segundo swap: " + variable.swap);
      sliceDiv.classList.add('active');
       
     }
     
    document.getElementById('inicio').onmouseover = function () {
      mouseOver();
   
    };
  
    document.getElementById('inicio').onmouseout = function () {
      mouseOut();
  
    };
  
    function mouseOver() {
      //sliceDiv.classList.add('active');
      sliceDiv.classList.remove('active');
    }
  
    function mouseOut() {
      //sliceDiv.classList.remove('active');
      sliceDiv.classList.add('active');
    }
  };
  
  // const Efecto = () => {
  //   window.onload = function () {
  //     var slice = EfectoCss();
  //     console.log("window.onload")
  //   };

  // }

  // export default Efecto;

  export default EfectoCss;
  
  



