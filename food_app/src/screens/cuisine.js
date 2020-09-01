import React from "react";
import mondaySdk from "monday-sdk-js";
import { Line } from 'rc-progress';
import food from '../assets/food.png';
import i from "../assets/i.jpg";
import a from "../assets/a.jpg";
import c from "../assets/c.jpg";
import j from "../assets/j.jpg";
import { Link } from "react-router-dom";
const monday = mondaySdk();

class Cuisine extends React.Component {
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
  _addmyvote(){
    fetch('https://lunchday.azurewebsites.net/api/vote', {
      method: 'POST',
      body:{
        "userid" : 0,
        "pollid":0,
        "cuisine":this.state.cravings
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
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center', height:'120vh', width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        <div style={{backgroundColor:'white', borderRadius:30, width:'55vw', margin:'auto', padding:'2.5%', marginTop:'15vh',marginTop:'15vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>What are you craving today?</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Select an option below</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>{this.state.cravings}</div>
     
      <div style={{display:'inline-block',marginLeft:'15%',}}></div>
      <div onClick={()=>this.setState({cravings:'Indian'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494' ,  backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginTop:'5%',marginRight:'10%',}}>
          <img src={i} width={220} height={120} style={{verticalAlign:'top', borderRadius:15}}></img><br></br>Indian</div>

          <div onClick={()=>this.setState({cravings:'American'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginRight:'10%',}}>
          <img src={a}  width={220} height={120} style={{verticalAlign:'middle', borderRadius:15}}></img><br></br>American </div>

          <div onClick={()=>this.setState({cravings:'Chinese'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494' ,backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginBottom:'10%',marginRight:'10%',marginTop:'5%', marginLeft:'15%'}}>
          <img src={c}  width={220} height={120} style={{verticalAlign:'middle', borderRadius:15}}></img><br></br>Chinese </div>

          <div onClick={()=>this.setState({cravings:'Japanese'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494', backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginBottom:'10%',marginRight:'10%',}}>
          <img src={j}  width={220} height={120} style={{verticalAlign:'middle', borderRadius:15}}></img><br></br> Japanese </div>
          <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', width:'100%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', }}>Are you sure?</div>
          <Link to="/vote"> <div onClick={()=>{this._addmyvote(); console.log('Print');}} style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', width:'100%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', }}>Yeah, I guess</div></Link>
         
      </div>
      
      </div>
  }
}

export default Cuisine;
