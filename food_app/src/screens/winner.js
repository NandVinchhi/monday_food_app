import React from "react";
import mondaySdk from "monday-sdk-js";
import { Line } from 'rc-progress';
import food from '../assets/food.png';
import i from "../assets/i.jpg";
import a from "../assets/a.jpg";
import c from "../assets/c.jpg";
import j from "../assets/j.jpg";
import { Link } from "react-router-dom";
import RestaurantList from "../components/restaurantList";
const monday = mondaySdk();
const restaurants = [
    { id: 1, name: "China Gate", ratings:"4.5/5" },
    { id: 2, name: "Chun's Bistro", ratings:"4/5" },
    { id: 3, name: "Chopsticks", ratings:"3.8/5" },
  ];
class Winner extends React.Component {
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
    fetch('https://lunchday.azurewebsites.net/api/viewWinner', {
      method: 'POST',
      body:{
        "id" : 0,
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
    return <div style={{alignContent:'center', alignSelf:'center', verticalAlign:'center',  width:'100vw', backgroundColor:'#1F1F1F', position:'absolute', top:0, left:0}}>
        <div style={{backgroundColor:'white', borderRadius:30, width:'40%', margin:'auto', padding:'2.5%', marginTop:'15vh'}}>
        <div style={{fontFamily:'Roboto', fontSize:'3vh', textAlign:'center', marginTop:'2.5vh', color:'#1F1F1F'}}>Results</div>
        <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'1vh', color:'#949494'}}>Most voted cuisine: Chinese</div>
            <div style={{alignSelf:'center', textAlign:'center', marginTop:'2.5vh'}}><img src={food} style={{width:'7.5vw'}}></img></div>
      <br></br>
      <div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', marginTop:'3vh', color:'#949494'}}>Chinese restaurants nearby:</div>
     
      <RestaurantList restaurants={restaurants} />


          <Link to="/new"><div style={{fontFamily:'Roboto', fontSize:'2vh', textAlign:'center', width:'100%', borderRadius:20, verticalAlign:'middle', textAlignLast:'center', }}>Start another poll.</div></Link>
         
      </div>
      
      </div>
  }
}

export default Winner;
