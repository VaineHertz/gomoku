(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/GreatVibes-Regular.859a0d36.ttf"},function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(8),n(9),n(10),n(11),n(12),{black:[],white:[],turn:"black"}),i=[],u=0;u<15;u++){i.push([]);for(var s=0;s<15;s++)i[u].push("   ")}var f=function(e){var t=Object(a.useRef)(null),n=function(e){for(var t=e.canvas.height/80,n=.97*e.canvas.width,a=.97*e.canvas.height,r=0;r<=480;r+=32)e.moveTo(.5+r+t,t),e.lineTo(.5+r+t,a+t);for(var o=0;o<=480;o+=32)e.moveTo(t,.5+o+t),e.lineTo(n+t,.5+o+t);e.strokeStyle="black",e.stroke()};return Object(a.useEffect)(function(){var e=t.current,a=e.getContext("2d");e.addEventListener("mousedown",function(e){var t;t=e,"black"==l.turn?l.black.push([t.offsetX,t.offsetY,!1]):"white"==l.turn&&l.white.push([t.offsetX,t.offsetY,!1]);for(var n=23;n<480;n+=32)for(var r=23;r<480;r+=32){for(var o in l.white){var c=l.white[o][0],u=l.white[o][1];c>n-16&&c<n+16&&u>r-16&&u<r+16&&(a.fillStyle="white",a.fillRect(n-8,r-8,15,15),i[Math.round(n/32-1)][Math.round(r/32-1)]="WHT",l.white[o][2]=!0)}for(var s in l.black){var f=l.black[s][0],h=l.black[s][1];f>n-16&&f<n+16&&h>r-16&&h<r+16&&(a.fillStyle="black",a.fillRect(n-8,r-8,15,15),i[Math.round(n/32-1)][Math.round(r/32-1)]="BLK",l.black[s][2]=!0)}}for(var d="",v=0;v<15;v++){d+="\n";for(var w=0;w<15;w++)d+="".concat(w+1,",").concat(v+1,"[").concat(i[w][v],"]")}console.log(d);for(var b=0;b<11;b++)for(var m=0;m<15;m++)"BLK"!=i[b][m]&&"WHT"!=i[b][m]||i[b][m]==i[b+1][m]&&i[b][m]==i[b+2][m]&&i[b][m]==i[b+3][m]&&i[b][m]==i[b+4][m]&&console.log("WINNERWINNERWINNERWINNERWINNER");"black"==l.turn&&1==l.black[l.black.length-1][2]?(l.turn="white",document.getElementById("whosturn").innerHTML="It is white's turn"):"white"==l.turn&&1==l.white[l.white.length-1][2]&&(l.turn="black",document.getElementById("whosturn").innerHTML="It is black's turn"),console.log("".concat(l.turn,"'s turn"))}),n(a)},[n]),r.a.createElement("canvas",Object.assign({ref:t},e))};var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"style.css"}),r.a.createElement("head",null,r.a.createElement("title",null,"Gomoku")),r.a.createElement("body",null,r.a.createElement(f,{width:"495",height:"495"}),r.a.createElement("div",{id:"whosturn"},"It is black's turn"),r.a.createElement("script",{src:"modal.js"})))},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),d()}],[[3,1,2]]]);
//# sourceMappingURL=main.4b78d8d6.chunk.js.map