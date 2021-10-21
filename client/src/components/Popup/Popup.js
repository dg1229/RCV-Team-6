import React from 'react';  
import '../../App.css';  
function Popup() { 
    const centerVideo = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      width: "75%",
      height: "auto"
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
      backgroundColor: "rgba(0,0,0, 0.5)"
    }  
    const popup_open = {  
      position: "absolute",
      left: "25%",
      right: "25%",
      top: "25%" ,
      bottom: "25%",
      margin: "auto" ,
      borderRadius: "20px",  
      background: "white" 
    }

    return (  
    <div style={popup}>  
      <div style={popup_open}>
        <h1>Click 'help' again to close player</h1>
        <video autoPlay muted="muted" style={centerVideo}>
          <source src="/Videos/Help.mp4" type="video/mp4"></source>
        </video>
      </div>  
    </div>  
    );  
  }  
export default Popup;