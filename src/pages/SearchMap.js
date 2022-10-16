// import React, { Component } from 'react';
// import Page from './Map.html';
// import Page2 from './Map2.html';
// var htmlDoc = {__html: Page};
// var htmlDOc2 = {__html: Page2}
// var __html = require('./template.html');
// var template = { __html: __html };

// export default class searchMap extends Component {
//   constructor(props){
//     super(props);
//   };

//   function GetMap() {
//     //Initialize a map instance.
//     map = new atlas.Map('myMap', {
//         view: 'Auto',
//         authOptions: {
//             //Azure Maps key. Get an Azure Maps key at https://azure.com/maps. NOTE: The primary key should be used as the key.
//             authType: 'subscriptionKey',
//             subscriptionKey: 'eFCnbq1RbppJDXcvapDijiwmtrgc5ybpL_EleAAHGa4'
//         }
//     })};

//     //Wait until the map resources are ready.
//     map.events.add('ready', function () {

//         //Create a marker that has the default htmlContent.
//         var marker = new atlas.HtmlMarker({
//             position: [0, 0],
//             draggable: true
//         });
                        
//         for (var i = 0; i < events.length; i++) {
//             //Add the event to the marker.
//             map.events.add(events[i], marker, highlight);

//             //Add a div to highlight the event.
//             document.getElementById('eventPanel').innerHTML += '<div id="' + events[i] + '">' + events[i] + '</div>'
//         }                

//         //Add the marker to the map.
//         map.markers.add(marker);
//     });
// }

//   function highlight(e) {
//       //Highlight the div to indicate that the event has fired.
//       document.getElementById(e.type).style.background = 'LightGreen';

//       //Remove the highlighting after a second.
//       setTimeout(function () { document.getElementById(e.type).style.background = 'white'; }, 1000);
// }

//   render(){
//      return (
//      <div dangerouslySetInnerHTML={htmlDoc}></div>

//         // var map, marker, events = (["click", "contextmenu", 
//         // "dblclick", "drag", "dragstart", "dragend", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup"]);
//       <div dangerouslySetInnerHTML={htmlDoc2}></div>
//      )
//   }
// };