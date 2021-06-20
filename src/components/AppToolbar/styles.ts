import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#333",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "100px",
    },
    toolbarright: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "100px",
      float: "right",
    },
    bottonhover: {
      "& :hover": {
        backgroundColor: "black",
      },
    },
    logo: {
      backgroundColor: "#d71921",
      width: "90px",
    },
  })
);
