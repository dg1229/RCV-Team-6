import Empty from '../../assets/empty.png';
import Complete from '../../assets/complete.png';
import Current from '../../assets/current.png'; //we should make these svgs - Chase

const ProgressIndicator = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: '5px',
    width: '40%',
    left: '30%',
    top: '20px',
    position: 'absolute',
    backgroundColor: "#e0e0de",
    borderRadius: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#2764F6',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const statusStyles = {
    width: '33%',
    textAlign: 'left',
    fontFamily: '"IBM Plex Mono", monospace',
    display: 'inline-block',
    fontSize: '15px',
    marginTop: '5px' 
    

  }

  const spanStyle ={ //temporary soltution to alignment - Chase
    verticalAlign: '25%',
    marginLeft: '8px'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
      <div>
        <span style={statusStyles}>

          <img src={completed < 50 ? Current : Complete} alt='status'/>
          <span style={spanStyle}>Create Ballot</span>
        </span>
        <span style={statusStyles}>
          <img src={completed < 50 ? Empty : completed === 50 ? Current : Complete} alt='status'/>
          <span style={spanStyle}>Review</span>
        </span>
        <span style={statusStyles}>
          <img src={completed <= 50 ? Empty : Current} alt='status'/>
          <span style={spanStyle}>Confirmed</span>
        </span>
      </div>
    </div>
  );
};

export default ProgressIndicator;