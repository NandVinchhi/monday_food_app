import React from "react";
import mondaySdk from "monday-sdk-js";

import food from '../assets/food.png';
import plus from '../assets/plus.svg';
import { Link } from "react-router-dom";
const monday = mondaySdk();

class Poll extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center', height:'100vh', width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        <div style={{backgroundColor:'white', borderRadius:30, width:'40%', margin:'auto', padding:'2.5%', marginTop:'20vh'}}>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2.5vh', textAlign:'center', marginTop:'2.5vh', color:'#949494'}}>Check out Ebtesam's poll</div>
     <Link style={{color:'#1F1F1F', textDecoration:'none'}} to="/new"> <div style={{borderRadius:15, boxShadow:' 1px 1px 3px 2px #949494',width:'30%', padding:'5% 10%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginTop:'10%',marginBottom:'10%'}}>
          <img src={plus} height="50vh" style={{verticalAlign:'middle'}}></img><span style={{fontFamily:'Roboto', fontSize:'3vh', marginLeft:'1vw', verticalAlign:'middle'}}>Vote</span></div></Link>
      </div>
      
      </div>
  }
}

export default Poll;
