import React, {Fragment, useContext} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import CartState from './cartState';
import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function IconLabelButtons() {
  const classes = useStyles();
  const { setCart, cart} = useContext(CartState)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{display: "-webkit-inline-box", marginTop: "20px"}}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => setCart([])}
      >
        Reset
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}

      <Drawer isDisable={cart.length > 0 ? false : true} />
    </div>

  );
}