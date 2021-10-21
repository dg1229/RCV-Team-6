import React from 'react';

function Language(props) { 


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

    const languageButton = {
      backgroundColor: "white",
      display: "inline-block",
      height: "69px",
      width: "221px",
      color: "#2A64F5",
      border: "3px solid #2A64F5",
      fontSize: "16px",
      fontFamily: '"IBM Plex Mono", monospace',
      marginTop: "2.5%",
      justifyContent: 'center',
    }

    const selectedLanguageButton = {
      backgroundColor: "#2A64F5",
      display: "inline-block",
      height: "69px",
      width: "221px",
      color: "white",
      border: "none",
      fontSize: "16px",
      fontFamily: '"IBM Plex Mono", monospace',
      marginTop: "2.5%",
      justifyContent: 'center',
    }

    return (  
    <div style={popup}>  
      <div style={popup_open}>
      <div style={{float:'right',margin:'20px'}} onClick={props.closeLanguage}><img src='/xIcon.svg'/></div>
      <br/>
      <br/>
      <br/>


        <h2 style={{textAlign:'center'}}>SELECT LANGUAGE:</h2> 
        
        <button id='englishButton' value='english' selected = {true} style={selectedLanguageButton} onClick={props.languageChoiceChanged}>ENGLISH</button>
        <br/>
        <button id='spanishButton' value='spanish' selected = {false} style={languageButton} onClick={props.languageChoiceChanged}>ESPAÑOL</button>
      </div>  
    </div>  
    );  
  }  
export default Language;