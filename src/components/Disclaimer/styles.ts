import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    disclaimerContainer: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      background: "#f0f4ff",
      border: "1px solid #406dc0",
      boxShadow: "0 2px 4px 2px rgb(0 0 0 / 10%)",
    },
    alertInner: {
      padding: "15px",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      width: "100%",
    },
    icon: {
      color: "#406dc0",
      marginRight: "15px",
    },
    infoItem: {
      fontFamily:
        "HelveticaNeue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
      fontSize: "18px",
      lineHeight: "22px",
      fontWeight: 700,
      margin: "0 50px 0 0",
      color: "#406dc0",
    },
    disclaimerBtn: {
      marginLeft: "auto",
      width: "auto",
      display: "flex",
      alignItems: "center",
      fontWeight: 400,
      height: "auto",
      textAlign: "center",
      lineHeight: "1.8rem",
      backgroundColor: "#fff",
    },
  })
);
