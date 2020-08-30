import React from "react";
import mondaySdk from "monday-sdk-js";
import food from '../assets/food.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Link } from "react-router-dom";
const monday = mondaySdk();

class Track extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      budget:'',
      votes:"15",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center', height:'100vh', width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        
        <div style={{backgroundColor:'white', borderRadius:30, width:'40%', margin:'auto', padding:'2.5%', marginTop:'20vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>Track your poll</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Find out what everyone else wants to eat</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      
     
      <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'1.5vh', marginBottom:'1.5vh', color:'#1F1F1F'}}>
      <span style={{fontFamily:'Open Sans'}}>{this.state.votes}</span> votes</div>
  
      <div style={{fontFamily:'Roboto', fontSize:60, textAlign:'center', marginLeft:'40%'}}>
  <CountdownCircleTimer
      style={{fontFamily:'Roboto'}}
    isPlaying
    duration={60}
    colors={[
      ['#07C773', 0.25],
      ['#FCCA08', 0.25],
      ['#FB285D', 0.25],
      ['#1B1F3C', 0.25],
    ]}
   >
      
    {({ remainingTime }) => remainingTime}
   
  </CountdownCircleTimer>
  </div>
  <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>
      Time remaining</div>

         
        <Link to="/end"> <button style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#FFF', backgroundColor:'#1B1F3C',padding:'2% 3%', width:'20%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', marginLeft:'40%'}}>END POLL</button></Link> 
         
      </div>
      
      </div>
  }
}

export default Track;
