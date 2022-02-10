import React from 'react'

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "mvm",
            model: "x22",
            Fuel: "Ptrol"
            }
    }
    componentDidUpdate(){
        var input = document.getElementById("input1");
        var rangeValue = document.getElementById("rangeValue");
        rangeValue.innerHTML = input.value;
    }
        render(){
            return(
                <React.Fragment>
                <input  id="input1" type="range" min="0" max="50"  />
                <p id="rangeValue" ></p>
                </React.Fragment>
            )
        }
}

export default Car