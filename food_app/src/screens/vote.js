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

class Vote extends React.Component {
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
        <div style={{backgroundColor:'white', borderRadius:30, width:'40%', margin:'auto', padding:'2.5%', marginTop:'15vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>Thanks for voting.</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Your order shall be placed once the poll closes</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>You voted for</div>
     
      <div style={{display:'inline-block',marginLeft:'25%',}}></div>
      <div onClick={()=>this.setState({budget:'low'})} style={{borderRadius:15, display:'inline-block', boxShadow:' 1px 1px 3px 2px #949494' ,  backgroundColor:'white',  textAlign:'center', alignSelf:'center', margin:'auto',marginTop:'5%',marginRight:'10%',marginBottom:'5vh'}}>
          <img src={c} width={320} height={220} style={{verticalAlign:'top', borderRadius:15}}></img><br></br>Chinese</div>


          <Link to="/cuisine"><div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', width:'100%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', }}>Wait, I changed my mind.</div></Link>
         
      </div>
      
      </div>
  }
}

export default Vote;
