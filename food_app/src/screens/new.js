import React from "react";
import mondaySdk from "monday-sdk-js";
import { Line } from 'rc-progress';
import food from '../assets/food.png';
import plus from '../assets/plus.svg';
import dollar from '../assets/dollar.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ReactSlider from 'react-slider';
const monday = mondaySdk();

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 30px;
    line-height: 30px;
    width: 30px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    verticalAlign:middle;
    fontFamily: Roboto;
    fontSize: 3vh;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#f00' : props.index === 1 ? '#ddd' : '#000'};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

class New extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      budget:'',
      nbudget:2,
      duration:1,
      valueNow:1,
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }
  _createapoll(){
    fetch('https://lunchday.azurewebsites.net/api/createPoll', {
      method: 'POST',
      body:{
        "budget" : 2,
        "duration" : this.state.valueNow*60,
        "cuisines" : ["chinese","american","japanese","indian"]
        }
      }
   )
   .then((response) => response.json())
   .then((responseJson) => {
      console.log(responseJson);
   })
   .catch((error) => {
      console.error(error);
   });
  }


  render() {
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center', height:'100vh', width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        <div style={{backgroundColor:'white', borderRadius:30, width:'50%', margin:'auto', padding:'2.5%', marginTop:'20vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>Create a poll</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Find out what everyone else wants to eat</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>What's your budget?<br></br>{this.state.budget}</div>
     
      <div style={{display:'inline-block',marginLeft:'7%',}}></div>
      <div onClick={()=>{this.setState({budget:'Cheap eats'});this.setState({nbudget:1});console.log('Set');}} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'10%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginTop:'5%',marginRight:'2.5%',}}>
          <img  src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>

          <div onClick={()=>{this.setState({budget:'Mid-range'});this.setState({nbudget:2});console.log('Set');}} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'12%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginRight:'2.5%',}}>
          <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img> <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>

          <div onClick={()=>{this.setState({budget:'Fine dining'});this.setState({nbudget:3});console.log('Set');}} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494',width:'15%', padding:'3% 7%', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginBottom:'10%',marginRight:'2.5%',}}>
          <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img> <img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img><img src={dollar} height="35vh" style={{verticalAlign:'middle'}}></img></div>
          <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginBottom:'3vh', color:'#949494'}}>Time limit for the poll</div>
          <StyledSlider
              defaultValue={0}
              renderTrack={Track}
              renderThumb={Thumb}
              max={20}
          />
          
          
          <Link to="/track"><button style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#FFF', backgroundColor:'#1B1F3C',padding:'2% 3%', width:'20%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', marginLeft:'27.5%'}}>NEXT</button></Link>
          <button onClick={this._createapoll} style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#1B1F3C', backgroundColor:'#FFF',padding:'2% 3%', width:'20%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', marginLeft:'5%'}}>CANCEL</button>
      </div>
      
      </div>
  }
}

export default New;

