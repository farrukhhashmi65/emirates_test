import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useStyles } from './styles';

export default function ToggleButtons() {
    const classes = useStyles();
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };
  
  return (
    <ToggleButtonGroup className={classes.toggelspc}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton className={classes.toggelbtn} value="left" aria-label="left aligned">
       <DoneIcon color="secondary"/>{" "} Flight 
      </ToggleButton>
      <ToggleButton className={classes.toggelbtn} value="center" aria-label="centered">
        Flight + hotel
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}
