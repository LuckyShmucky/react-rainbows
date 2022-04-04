import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './components/color-block/index'
import ColorForm from './components/color-form';


function App() {
  let [colors, setColors] = useState([
    // 'violet', 'blue',
    // 'lightblue', 'green',
    // 'greenyellow', 'yellow',
    // 'orange', 'red'
///make empty string and iterate over it
  ])
  
  
  const colorMap = colors.map((color) => {
    // console.log(color)
    return <div key={color}>
      <ColorBlock className='w-50' color={color}/>
    </div>
  })

  const addColor = (newColor) =>{
    ///to get rid of current color and replace it with the user's input
    setColors([newColor])
    // setColors([...colors, newColor])
    console.log(newColor)
  }

  return (
    <div className="App">
       {colorMap}
       <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
