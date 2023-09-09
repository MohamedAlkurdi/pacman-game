import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import beginningIntro from './pacman_beginning.wav'
import intro from "./intro.gif"
import logo from './Pac-Man-Logo.png'

const spanStyle={
color:"white",borderColor:"#01076A",
  fontSize: '20px',
  fontWeight: 'bold',
  textShadow:' -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000'
}
export default function Intro({gameState,updateGameState}) {
  const handleClose = () => {
    updateGameState();
    const intro = new Audio(beginningIntro);
    intro.play();
  };
  return (
    <div>
      <Dialog
        open={!gameState}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title" >
        <DialogTitle style={{backgroundColor:"black",color:"white",display:"flex",justifyContent:"center",fontSize:"30px"}} id="responsive-dialog-title">
        <img style={{width:"200px"}} src={logo} alt="" />
        </DialogTitle>
        <div style={{backgroundColor:"black"}} className='intoGif'>
            <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={intro} alt="" />
        </div>
        <DialogActions style={{display:"flex",justifyContent:"center",backgroundColor:"black"}}>
          <Button variant="outlined" style={{color:"white",borderColor:"#01076A",margin:"30px 0"}} onClick={handleClose} >
            <span style={spanStyle}>start game!</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}