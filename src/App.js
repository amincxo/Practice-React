import React from 'react';
import TempretureInput from './TempretureInput'
import * as myfun from './TryConvert'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      scale: 'C',
      temp: ''
    };
  }

  HandleChangeCelcius = (temp) => {
    this.setState({
      scale: 'C',
      temp: temp
    })
  }

  HandleChangeFahrenheit = (temp) => {
    this.setState ({
      scale: 'F',
      temp : temp
    })
  }

  render(){
    const celcius = this.state.scale == 'F' ? myfun.TryConvert(this.state.temp , myfun.toCelsius) : this.state.temp
    const fahrenheit = this.state.scale == 'C' ? myfun.TryConvert(this.state.temp , myfun.toFahrenheit) : this.state.temp
    return(
      <React.Fragment>
     <TempretureInput tempreture={celcius} type="C" onTemperatureChange = {this.HandleChangeCelcius} />
     <TempretureInput tempreture={fahrenheit} type="F" onTemperatureChange = {this.HandleChangeFahrenheit} />
     </React.Fragment> 
    );
  }
}

export default App