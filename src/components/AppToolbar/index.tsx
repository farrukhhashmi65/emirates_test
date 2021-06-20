import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Container, Link, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { useTranslation } from 'react-i18next';
import {TOOLBAR_LOGOO} from '../../utils/constants'


export default function AppToolbar() {
  const { t } = useTranslation();
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Container maxWidth="lg" fixed>
        <AppBar color="primary" position="static" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
              <Link href="#">
                <img src={TOOLBAR_LOGOO}></img>
              </Link>
            </div>
            <Box>
              <Button className={classes.bottonhover} color="inherit">
               {t('toolbar.book')}
              </Button>
              <Button color="inherit"> {t('toolbar.manage')}</Button>
              <Button color="inherit"> {t('toolbar.experience')}</Button>
              <Button color="inherit"> {t('toolbar.whereWeFly')}</Button>
              <Button color="inherit"> {t('toolbar.loyalty')}</Button>
              <Button color="inherit">{t('toolbar.help')}</Button>
            </Box>
            
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
