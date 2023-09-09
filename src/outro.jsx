import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export default function Outro({winState,updateWinState}) {
  const handleClose = () => {
    updateWinState(false);
    window.location.reload()
  };
  return (
    <div>
      <Dialog 
        open={winState}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title" >
        <DialogTitle style={{backgroundColor:"#333",color:"white",fontSize:"30px",padding:"20px"}} id="responsive-dialog-title">
           Congrats, you won!
        </DialogTitle>
        <DialogActions style={{display:"flex",justifyContent:"center",backgroundColor:"#333",padding:"20px"}}>
          <Button  style={{color:"white"}} onClick={handleClose} >
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}