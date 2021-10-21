import React from 'react';

function Popup(props) { 

  console.log(props)

    const centerVideo = {
      marginLeft: "10%",
      marginRight: "10%",
      marginBottom: "5%",
      width: "70%"
    }

    const popup = {  
      position: "fixed",
      width: "100%" , 
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0", 
      margin: "auto",
      backgroundColor: "rgba(0,0,0, 0.5)",
      textAlign: "center"
    }  
    const popup_open = {  
      backgroundColor:'white',
      position: "absolute",
      width:'619px',
      height:'471px',
      left: "25%",
      right: "25%",
      top: "25%" ,
      bottom: "25%",
      margin: "auto" ,
      borderRadius: "0px"
    }

    return (  
    <div style={popup}>  
      <div style={popup_open}>

      <div style={{float:'right',margin:'20px'}} onClick={props.closeVideo}><img src='/xIcon.svg' alt='close'/></div>
      <br/>
      <br/>
      <br/>


        <h2 style={{textAlign:'center'}}>NEED HELP?</h2> 

        <video autoPlay style={centerVideo}>
          <source src="/Videos/HowTo.mp4" type="video/mp4"></source>
        </video>
      </div>  
    </div>  
    );  
  }  
export default Popup;