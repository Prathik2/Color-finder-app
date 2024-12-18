import React from "react";
import { Rgb } from "./Components/RgbComp/Rgb";
import { makeStyles } from "@mui/styles";
import { HexComp } from "./Components/HexComp/HexComp";
import Divider from '@mui/material/Divider';


// Define styles using makeStyles
const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    textAlign: "center",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#b0b9d1",
    height: "100vh",
  },
  components: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  colorDiv: {
    width: "400px",
    height: "100px",
    color: 'white',
    boxSizing: "border-box",
    marginTop: "10px",
    paddingTop: "33px",
  },
  footerDiv: {
    position: "absolute",
    display: "block",
    bottom: "10px",
  },
  '@media only screen and (max-width: 600px)': {
    components: {
      display: "flex",
      flexDirection: "column",
    },
    footerDiv: {
      position: "relative",
      marginTop: "20px"
    },
    colorDiv: {
      width: "300px",
      boxSizing: "border-box"
    },
    container: {
      height: "100%",
      backgroundColor: "#b0b9d1",
      boxSizing: "border-box",
    }
  }
});

function App() {
  const classes = useStyles();
  const [redColorValue, setRedColorValue] = React.useState(125);
  const [greenColorValue, setGreenColorValue] = React.useState(125);
  const [blueColorValue, setBlueColorValue] = React.useState(125);

  const handleRedColorData = (data) => {
    setRedColorValue(data);
  }

  const handleGreenColorData = (data) => {
    setGreenColorValue(data);
  }

  const handleBlueColorData = (data) => {
    setBlueColorValue(data);
  }
  const dynamicBackgroundColor = `rgb(${redColorValue || 0}, ${greenColorValue || 0}, ${blueColorValue || 0})`;
  const dynamicTextColor = (redColorValue === 255 && greenColorValue === 255 && blueColorValue === 255) ? 'black' : 'white';

  return (
    <div className={classes.container}>
      <div className={classes.title}>Color Picker</div>
      <div className={classes.colorDiv} style={{ backgroundColor: dynamicBackgroundColor, color: dynamicTextColor }}>{`rgb(${redColorValue},${greenColorValue},${blueColorValue})`}</div>
      <div className={classes.components}>
        <Rgb color={"Red"} minRange={0} maxRange={255} onColorChange={handleRedColorData} />
        <Rgb color={"Green"} minRange={0} maxRange={255} onColorChange={handleGreenColorData} />
        <Rgb color={"Blue"} minRange={0} maxRange={255} onColorChange={handleBlueColorData} />
      </div>
      <Divider variant="middle" style={{width: '95%',}}/>
      <HexComp></HexComp>
      <div className={classes.footerDiv}>Developed with ❤️ by Prathik</div>
    </div>
  );
}

export default App;
