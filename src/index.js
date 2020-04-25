import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Sortable from 'sortablejs';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// var boxes = document.querySelectorAll('.box');
// for(let box of boxes){
//   var sortable = Sortable.create(box,{
//       group: "box",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
//       draggable: ".box-item",  // Specifies which items inside the element should be draggable
  
//       ghostClass: "box-item-ghost",  // Class name for the drop placeholder
//       chosenClass: "box-item-chosen",  // Class name for the chosen item
//       dragClass: "box-item-drag",  // Class name for the dragging item  
//     });
// }

// var items = document.querySelectorAll('.box-item');
// for(let item of items){
//   var sortable = Sortable.create(item);
// }

function start(event){
  document.getElementById('removeItem').className = 'active';
}

function end(event){
  document.getElementById('removeItem').className = '';
}

var boxes = document.querySelectorAll('.box-list');
for(let box of boxes){
 Sortable.create(box,{
    group:'box-list',
    ghostClass: 'box-item-ghost',
    onStart: start,
    onEnd: end
  });
}

Sortable.create(document.getElementById('removeItem'),{
  group:'box-list',
  ghostClass: 'box-item-ghost',
  onStart: start,
  onEnd: end,
  onAdd: (event) => {
    event.item.parentElement.removeChild(event.item);
  }
});