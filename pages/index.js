import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Menu from '../components/menu'


const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0),
    },
  },
  map: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  hero: {
    padding: theme.spacing(8, 2),
    background: 'url(macbook-mock.png) no-repeat 150% 50px',
    backgroundSize: 'contain',
    height: 680,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      height: 430,
      padding: theme.spacing(2, 1),
      background: 'none',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  primaryText: {
    padding: theme.spacing(3, 0),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0),
      textAlign: 'center',
    },
  },
  subText: {
    lineHeight: '40px',
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0),
      lineHeight: '20px',
      fontSize: '12px',
    },
  },
  herotext: {
    zIndex: 1,
    fontSize: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  cluster: {
    width: 200,
  },
  image: {
    maxWidth: '100%',
    textAlign: 'center',
  },
  action: {
    margin: theme.spacing(3, 0),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  list: {
    padding: theme.spacing(0, 2),
  },
  italics: {
    fontStyle: 'italic',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
}))

const Index = () => {
  const classes = useStyles()
  return (
    <>
      <Menu />
      <Grid container className={classes.hero}>
        <Grid item sm={6}>
          <Container>
            <Typography className={classes.herotext} variant="h2" component="h1" gutterBottom>
              <span className={classes.bold}>{process.env.site_name}</span>
              {' '}
              calculates the probability of
              {' '}
              <span className={classes.primaryText}>{process.env.disease}</span>
              {' '}
              based on symptoms and location
            </Typography>
          </Container>
          <Container>
            <Typography className={classes.subText} variant="body1" component="body1" gutterBottom>
              The availability of testing for COVID-19 is limited. Our aim is to collect geographic data of symptoms, analyze clusters, and predict outbreaks. Our ultimate goal is to recognize and prevent community infection.
            </Typography>
            <Typography className={classes.primaryText} variant="h6" component="h6" gutterBottom>
              Wondering if you or someone you know may have COVID-19?
            </Typography>
            <Grid className={classes.action}>
              <Button href="/survey" variant="contained" color="primary">Check your symptoms</Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.map}>
          <Container>
            <Grid container>
              <Grid item sm={5}>
                <img className={classes.image} src="/cluster-map.png" alt="Cluster Map" />
              </Grid>
              <Grid item sm={7}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Get answers through data
                </Typography>
                <Typography variant="body1" component="body1" gutterBottom>
                  The availability of data for symptoms is critical to answer questions like:
                  <ul className={classes.list}>
                    <li>
                      Which community or neighbourhood is
                      {' '}
                      <strong>fever</strong>
                      {' '}
                      prevalent? Which particular region experiences
                      {' '}
                      <strong>cough</strong>
                      {' '}
                      more often?
                    </li>
                    <li>Is there anyone within the cluster who travelled recently to hot zones such as China?</li>
                    <li>How do symptoms progresses or gets trasmitted to other locations over time?</li>
                    <li>
                      Is there an increasing cases of
                      {' '}
                      <strong>runny nose</strong>
                      {' '}
                      in my neighbourhood?
                    </li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container className={classes.section}>
          <Grid container>
            <Container>
              <Grid container>
                <Grid item sm={7}>
                  <Typography variant="h3" component="h3" gutterBottom>
                    The power of crowdsourcing
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    Data is very important in making decisions but isn't always available. Data for active cases (and deaths) is available but we need more data on the population who are experiencing only some of the symptoms.
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    By conducting survey sampling, especially during an outbreak, data will be collected, analyzed and made available.
                  </Typography>
                </Grid>
                <Grid item align="center" sm={5}>
                  <img className={classes.crowdsourcing} src="/crowdsource.png" alt="Crowdsourcing" />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
