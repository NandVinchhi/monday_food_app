import React from "react";
import PropTypes from "prop-types";
import i from '../assets/res.png';
function Restaurant(props) {
  return (
    <div style={{marginLeft:'10%',textAlign:'left', display:'inline-block'}}>
     <div onClick={()=>{}} style={{ display:'inline-block',borderRadius:15, boxShadow:' 1px 1px 3px 2px #949494' ,  backgroundColor:'white',  textAlign:'center', alignSelf:'center', width:'35vw',margin:'auto',marginTop:'5%',marginBottom:'5vh'}}>
     <img src={i} width={200} height={120} style={{verticalAlign:'top', borderRadius:15, position:'relative',float:'left'}}></img>
         <div style={{ height:100,  borderRadius:15,backgroundColor:'white',  textAlign:'left', marginLeft:'30%', paddingLeft:'10%', paddingTop:'2.5%'}}>
        <span style={{fontFamily:'Roboto',fontSize:'2vh'}}>{props.name}</span> <span style={{fontFamily:'Roboto',fontSize:'1.5vh', float:'right', marginRight:'5%', color:'green'}}>{props.ratings}</span>
        <br/><span style={{fontFamily:'Roboto',fontSize:'1.5vh', color:'#1f1f1f'}}>Authentic Cantonese</span>
        <br/><span style={{fontFamily:'Roboto',fontSize:'1.25vh', color:'red', marginTop:'5%'}}>Non-vegan</span>
        <br/><span style={{fontFamily:'Roboto',fontSize:'1vh', color:'grey', marginTop:'10%'}}>13th Street</span>
        </div>
          </div>
          </div>
  );
}
export default Restaurant;

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  ratings: PropTypes.string.isRequired
};
