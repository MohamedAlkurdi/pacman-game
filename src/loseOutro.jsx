import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoseOutro({loseState,updateLoseState}) {
    const handleClose = () => {
    updateLoseState(false);
    window.location.reload();
    };
    return (
    <div>
    <Dialog 
    open={loseState}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title" >
    <DialogTitle style={{backgroundColor:"#333",color:"white",fontSize:"30px",padding:"20px"}} id="responsive-dialog-title">
    Game over.
    </DialogTitle>
    <DialogActions style={{display:"flex",justifyContent:"center",backgroundColor:"#333",padding:"20px"}}>
    <Button variant='outlined' style={{color:"white"}} onClick={handleClose} >
    Restart
    </Button>
    </DialogActions>
    </Dialog>
    </div>
);
}