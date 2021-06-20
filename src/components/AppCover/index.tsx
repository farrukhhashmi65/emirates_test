import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import {COVER_IMAGE, APP_LOGOO} from '../../utils/constants'

export default function AppCover(props: any) {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Paper
          component="div"
          elevation={0}
          square={true}
          className={classes.coverPaper}
          style={{
            background: `linear-gradient(0deg, rgb(33 38 41), rgb(27 7 19 / 31%)), url(${COVER_IMAGE})`,
            backgroundSize: "cover",
          }}
        >
          <Container maxWidth="lg" fixed>
            <Box className={classes.coverInnerWrapper}>
              <Box className={classes.logoContainer}>
                <Paper
                  component="div"
                  elevation={0}
                  square={true}
                  className={classes.logoPaper}
                >
                  <img
                    src={APP_LOGOO}
                    alt="Logo Image"
                  />
                </Paper>
              </Box>
              <Box className={classes.marketingContainer}>
                <Typography
                  className={classes.marketingContainerSec1}
                  variant="h3"
                  component="h3"
                >
                  {t('appCover.p1')}
                </Typography>
                <Typography
                  className={classes.marketingContainerSec2}
                  variant="h1"
                  component="h1"
                >
                  {t('appCover.p2')}
                </Typography>
                <Typography
                  className={classes.marketingContainerSec3}
                  variant="h3"
                  component="h3"
                >
                  {t('appCover.p3')}
                </Typography>
                <Button
                  className={classes.bookNowBtn}
                  variant="contained"
                  color="secondary"
                >
                  {t('appCover.highlightedBtn')}
                </Button>
              </Box>
            </Box>
          </Container>
         
          
        </Paper>
     
    </div>
  );
}
