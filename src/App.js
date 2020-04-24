import React from 'react';
import Box from './Box';
import Footer from './Footer';

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
const closedValues = [
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
  {module:"COS 341", name:"Practical 01", due:"7 May 2020", isImportant:"false"},
  {module:"COS 301", name:"Semester Test 1", due:"22 May 2020", isImportant:"true"},
  {module:"COS 344", name:"Assignment 3", due:"6 May 2020", isImportant:"false"},
];

function App(){
  return (
    <div>
      <div id="body">
        <Box state="open" items={openValues}/>    
        <Box state="closed" items={closedValues}/>    
      </div>
      <Footer author="Phillip Schulze"/>
    </div>
  );
}

export default App;
