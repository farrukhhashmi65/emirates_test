import React, { useEffect } from "react";
import { fetchAirportList } from "../../core/actionCreators/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import AppBackdrop from "../../components/AppBackdrop";
import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import FlightIcon from "@material-ui/icons/Flight";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppCover from "../../components/AppCover";
import ToggleButtons from "../../components/ToggleButton";
import TabPanel from '../../components/TabPanel'
import Disclaimer from '../../components/Disclaimer'
import { useTranslation } from 'react-i18next';


export default function FlightBooking() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: any) => {
    return {
      id: `scrollable-force-tab-${index}`,
      "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
  }

  const dispatch = useDispatch();

  const [options, setOptions] = React.useState<any>([]);

  useEffect(() => {
    dispatch(fetchAirportList());
  }, []);

  const { loading, response: airportList } = useSelector(
    (state: any) => state.root.airportList
  );

  useEffect(() => {
    if (!loading && airportList) {
      setOptions(airportList);
    }
  }, [loading, airportList]);

  if (loading) {
    return <AppBackdrop open={true} />;
  }
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    limit: 10,
  });

  return (
    <React.Fragment>
      <AppCover />
      <Container className={classes.container} fixed>
        <Paper elevation={3}>
          <AppBar position="static" className={classes.tabroot} color="default">
            <Grid item xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="secondary"
                textColor="primary"
                aria-label="scrollable force tabs example"

              >
                <Tab
                  className={classes.wrapper}
                  label={<div><FlightIcon className={classes.tabIcon} /> {t('flightBookingTabs.searchFlights')} </div>}
                  {...a11yProps(0)}
                />
                <Tab
                  className={classes.wrapper}
                  label={<div><LoyaltyIcon className={classes.tabIcon} />{t('flightBookingTabs.checkIn')} </div>}
                  {...a11yProps(1)}
                />
                <Tab
                  className={classes.wrapper}
                  label={<div><FlightTakeoffIcon className={classes.tabIcon} />{t('flightBookingTabs.flightInfo')}</div>}
                  {...a11yProps(2)}
                />
                <Tab
                  className={classes.wrapper}
                  label={<div><WatchLaterIcon className={classes.tabIcon} />{t('flightBookingTabs.flightStatus')}</div>}
                  {...a11yProps(3)}
                />
              </Tabs>
            </Grid>
          </AppBar>
          <TabPanel value={value} index={0}>

            <Disclaimer text={t('disclaimer.txt')} btnText={t('disclaimer.btnText')} />
            <ToggleButtons />

            <Grid container>
              <Grid item xs={6}>
                <Link href="#" className={classes.skywards}>
                  {t('loginLink')}
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" className={classes.advancesearch}>
                  {t('searchLink')}
                </Link>
              </Grid>
            </Grid>

            <Paper square className={classes.menuInfoPaper} elevation={0}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Autocomplete
                    id="departure-airport"
                    options={options}
                    loading={loading}
                    onChange={(e: any) => console.log(e)}
                    filterOptions={filterOptions}
                    getOptionLabel={(option: any) =>
                      `${option.city} (${option.iata_code})`
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Departure Airport"
                        variant="outlined"
                      />
                    )}
                    renderOption={(option: any) => {
                      return (
                        <Grid container alignItems="center">
                          <Grid item>
                            <LocationOnIcon className={classes.icon} />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="body2" color="textSecondary">
                              {`${option.city}, ${option.country}`}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Box className={classes.iataCode}>
                              {option.iata_code}
                            </Box>
                          </Grid>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Autocomplete
                    id="arrival-airport"
                    options={options}
                    loading={loading}
                    onChange={(e: any) => console.log(e)}
                    filterOptions={filterOptions}
                    getOptionLabel={(option: any) =>
                      `${option.city} (${option.iata_code})`
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Arrival Airport"
                        variant="outlined"
                      />
                    )}
                    renderOption={(option: any) => {
                      return (
                        <Grid container alignItems="center">
                          <Grid item>
                            <LocationOnIcon className={classes.icon} />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="body2" color="textSecondary">
                              {`${option.city}, ${option.country}`}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Box className={classes.iataCode}>
                              {option.iata_code}
                            </Box>
                          </Grid>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.myOrderButton}
                    variant="contained"
                    color="secondary"
                  >
                    {t('continueBtn')}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {t('flightBookingTabs.checkIn')}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {t('flightBookingTabs.flightInfo')}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {t('flightBookingTabs.flightStatus')}
          </TabPanel>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
