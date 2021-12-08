import React from 'react'

function TestComponent({name = "foobar", children, bgColor}) {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16)

  return (
    <div style={{backgroundColor: bgColor ?? `#${randomColor()}`}} className="container">
      <div className="name">Im component {name}</div>

      <div className="children">{children}</div>
    </div>
  );
}

export default TestComponent;
