import React from 'react'
import PropTypes from "prop-types"

export const Profile = (props) => {
    console.log(props);
    function handleClick(e){
        e.preventDefault();  
        return alert('Welcome '+ props.data.fullName +'!');
    }
  return (
    <div>
        <img src={props.children} style={{borderRadius: '50%', width:"200px",height:"200px", marginLeft:"600px"}} alt="pic" />
        <h1 style={{background:"#eee",color: 'rgb(145,88,26)'  }}>fullName : { props.data.fullName}</h1>
        <h1 style={{background:"#eee", color:"rgb(80,82,94)"}}>bio : { props.data.bio}</h1>
        <h1 style={{background:"#eee"}}>profession: { props.data.profession}</h1>     
        <a href='/'  style ={{background:"#eee",border: '1px solid rgba(0,255,0,0.3)',
          borderRadius: '20% 20% 20% 20%',textDecoration: 'none', fontSize:"60px",marginLeft:"600px",color:"rgb(145,88,26)"}}onClick={handleClick}>
          click 
        </a>
    </div>
  )
}
Profile.defaultProps={
    data :{
      fullName : 'fullName' ,
      bio : 'bibliography',
      profession :' profession'
    }
  }
  
  Profile.propTypes={
    data : PropTypes.shape({
      fullName : PropTypes.string ,
      bio : PropTypes.string,
      profession : PropTypes.string
    })
  }
 export default Profile