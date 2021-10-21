import React from 'react';

function Popup() { 

    const centerVideo = {
      marginLeft: "10%",
      marginRight: "10%",
      marginBottom: "5%",
      width: "80%"
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
      position: "absolute",
      left: "25%",
      right: "25%",
      top: "25%" ,
      bottom: "25%",
      margin: "auto" ,
      borderRadius: "20px"
    }

    return (  
    <div style={popup}>  
      <div style={popup_open}>
        <h1>Player will close after video</h1>
        <video autoPlay style={centerVideo}>
          <source src="/Videos/Information_Campaign.webm" type="video/webm"></source>
        </video>
      </div>  
    </div>  
    );  
  }  
export default Popup;