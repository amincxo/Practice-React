import React from 'react'

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color } >
      {console.log(props.children)}
    </div>
  );
}

function App (){
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title" >
        Welcome
      </h1>
      <p className="Dialog-message" >
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default App