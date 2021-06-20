import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppToolbar from "./components/AppToolbar";
import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import FlightBooking from "./features/flightBooking";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#fff",
    },
  })
);

function App() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.root}>
        <AppToolbar />
        <FlightBooking />
      </Box>
    </React.Fragment>
  );
}

export default App;
