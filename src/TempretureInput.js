import React from 'react'

const scales = {
    C : "Celcoius",
    F : "Fahrenheit"
}
class TempretureInput extends React.Component {
    constructor(){
        super()
    }

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value)
    }

    render(){
        return(
        <div>
            <label>{scales[this.props.type]}</label>
            <input 
            type="text"
            value={this.props.tempreture} 
            onChange={this.handleChange} />
            <br/>
             
        </div>
        );
    }
}

export default TempretureInput