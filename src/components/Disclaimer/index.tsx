import React from "react";
import {
    Button,
    Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useTranslation } from 'react-i18next';
import PublicIcon from "@material-ui/icons/Public";


export default function Disclaimer(props: any) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { text, btnText  } = props;
    return (
        <Paper elevation={3} className={classes.disclaimerContainer}>
            <div className={classes.alertInner}>
                <PublicIcon className={classes.icon} />
                <p className={classes.infoItem}>
                    {" "}
                   {text}
                </p>
                <Button className={classes.disclaimerBtn} variant="outlined">
                    {btnText}
                 </Button>
            </div>
        </Paper>
    );
}
