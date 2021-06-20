import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      boxSizing: "border-box",
      background: "#f6f6f6",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    bookNowBtn: {
      borderRadius: 4,
      border: 0,
      color: "white",
      marginLeft: "6rem",
      boxShadow: "none",
      marginTop: "14px",
    },
    coverPaper: {
      display: "flex",
      width: "100%",
      minHeight: "400px",
      position: "relative",
    },
    logoPaper: {
      width: "200px",
      height: "25px",
      backgroundColor: "inherit",
      "& > img": {
        width: "100%",
      },
    },
    coverInnerWrapper: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      height: "100%",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(2),
      minHeight: "120px",
      position: "absolute",
      height: "50px",
      fontSize: 0,
      right: "30px",
    },
    marketingContainer: {
      justifyContent: "space-between",
      padding: theme.spacing(2),
      display: "inline-block",
      position: "absolute",
      margin: 0,
      top: "50%",
      left: "8rem",
      transform: "translateY(-50%)",
      marginBottom: '40px'
    },
    marketingContainerSec1: {
      color: "#fff",
      fontFamily: "Helvetica,Arial,Lucida Grande,sans-serif",
      fontSize: "1.8rem",
      fontStyle: "normal",
      fontWeight: 500,
      transform: "rotate(0deg) scale(1) skew(-13deg) translate(0)",
      textShadow: "0.1rem 0.1rem 0.5rem rgb(0 0 0 / 30%)",
      margin: 0,
      letterSpacing: ".2rem",
    },
    marketingContainerSec2: {
      color: "#fff",
      fontFamily: "Emirates-Bold,Helvetica,Arial,Lucida Grande,sans-serif",
      fontSize: "5.3rem",
      fontStyle: "normal",
      fontWeight: 400,
      transform: "rotate(0deg) scale(1) skew(-13deg) translate(0)",
      textShadow: "0.1rem 0.1rem 0.5rem rgb(0 0 0 / 30%)",
      margin: 0,
      letterSpacing: "-3px",
    },
    marketingContainerSec3: {
      color: "#fff",
      fontFamily: "Emirates-Bold,Helvetica,Arial,Lucida Grande,sans-serif",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 400,
      transform: "rotate(0deg) scale(1) skew(-13deg) translate(0)",
      textShadow: "0.1rem 0.1rem 0.5rem rgb(0 0 0 / 30%)",
      margin: 0,
      letterSpacing: ".2rem",
    },
  })
);
