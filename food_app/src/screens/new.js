import React from "react";
import mondaySdk from "monday-sdk-js";
import { Line } from 'rc-progress';
import food from '../assets/food.png';
import plus from '../assets/plus.svg';
import dollar from '../assets/dollar.svg';
import { Link } from "react-router-dom";
const monday = mondaySdk();

class New extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      budget:'',
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center', height:'100vh', width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        <div style={{backgroundColor:'white', borderRadius:30, width:'40%', margin:'auto', padding:'2.5%', marginTop:'20vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>Create a poll</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Find out what everyone else wants to eat</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>What's your budget?</div>
     
      <div style={{display:'inline-block',marginLeft:'7%',}}></div>
      <div onClick={()=>this.setState({budget:'low'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'10%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginTop:'5%',marginRight:'2.5%',}}>
          <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>

          <div onClick={()=>this.setState({budget:'med'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'12%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginRight:'2.5%',}}>
          <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img> <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>

          <div onClick={()=>this.setState({budget:'high'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'15%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginBottom:'10%',marginRight:'2.5%',}}>
          <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img> <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img><img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>


          <Line percent="70" strokeWidth="2.5" strokeColor="#1F1F1F" strokeLinecap="round" style={{width:'70%', marginLeft:'15%', marginBottom:'5%'}}/>
          <Link to="/track"><button style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#FFF', backgroundColor:'#1B1F3C',padding:'2% 3%', width:'20%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', marginLeft:'27.5%'}}>NEXT</button></Link>
          <button style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#1B1F3C', backgroundColor:'#FFF',padding:'2% 3%', width:'20%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', marginLeft:'5%'}}>CANCEL</button>
      </div>
      
      </div>
  }
}

export default New;
