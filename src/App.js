import React from 'react';
import Box from './Box';
import Footer from './Footer';
import ControlBar from './ControlBar';

let n = 0;
const openValues = [
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
  {module:"COS 341", name:"Practical 01", due:"7 May 2020", isImportant:"false"},
  {module:"COS 301", name:"Semester Test 1", due:"22 May 2020", isImportant:"true"},
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
  {module:"COS 341", name:"Practical 01", due:"7 May 2020", isImportant:"false"},
  {module:"COS 344", name:"Assignment 4", due:"6 May 2020", isImportant:"false"},
  {module:"COS 341", name:"Practical 02", due:"7 May 2020", isImportant:"false"},
  {module:"COS 301", name:"Semester Test 1", due:"22 May 2020", isImportant:"true"},
  {module:"COS 341", name:"Practical 01", due:"7 May 2020", isImportant:"false"},
];
for(let i = 0; i < openValues.length; ++i) {openValues[i].id = "item-"+n;n++}

const closedValues = [
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
  {module:"COS 341", name:"Practical 01", due:"7 May 2020", isImportant:"false"},
  {module:"COS 301", name:"Semester Test 1", due:"22 May 2020", isImportant:"true"},
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
];
for(let i = 0; i < closedValues.length; ++i) {closedValues[i].id = "item-"+n;n++}

function App(){
  return (
    <div>
      <div id="body">
        <Box state="open" items={openValues}/>    
        <Box state="closed" items={closedValues}/>    
        <ControlBar />
      </div>
      <Footer author="Phillip Schulze"/>
    </div>
  );
}

export default App;
