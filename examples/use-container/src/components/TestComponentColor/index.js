import React from 'react'

import { useContainer } from "react-toolkit"

function TestComponent({name = "foobar", children, bgColor}) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  const [color, setColor] = useContainer('color', 'ffffff')

  console.log('render component', name, 'with color', color)
  return (
    <div style={{backgroundColor: bgColor ?? `#${randomColor}`}} className="container">
      <div className="name" onClick={() => {setColor(randomColor)}}>Im component {name} - I have useContainer - color is {color}</div>

      <div className="children">{children}</div>
    </div>
  );
}

export default TestComponent;
