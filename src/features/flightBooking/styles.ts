import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  menuTitle: {
    marginBottom: theme.spacing(3),
  },
  tabroot: {
    margin: "auto",
    backgroundColor: "#fff",
    width: "100%",
  },
  menuInfoPaper: {
    display: "flex",
    marginTop: "1.3rem",
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  container: {
    margin: "auto",
    width: "80%",
    padding: 0,
    position: "relative",
    top: "-71px"

  },
  myOrderButton: {
    width: "100%",
    height: "3.3rem",
  },
  autocombox: {
    marginRight: "2rem",
  },
  skywards: {
    fontFamily:
      "HelveticaNeue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
    fontSize: ".9rem",
    textDecoration: "underline",
    lineHeight: "1.61rem",
    display: "inline-block",
    color: "#c60c30",
    letterSpacing: 0,
    marginTop: "20px",
  },
  advancesearch: {
    color: "#c60c30",
    display: "inline-block",
    fontSize: ".9rem",
    marginTop: "20px",
    fontFamily:
      "HelveticaNeue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
    lineHeight: "1.61rem",
    letterSpacing: 0,
    textDecoration: "underline",
    float: "right",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  iataCode: {
    display: "flex",
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    background: "#c9ebec",
    padding: "1rem 0",
    borderRadius: ".3rem",
    width: "41px",
    height: "30px",
    textAlign: "center",
  },
  wrapper: {
    padding: '22px 18px 22px 0px'
  },
  tabIcon: {
    verticalAlign: 'middle',
    marginRight : '8px'
  }
}));
