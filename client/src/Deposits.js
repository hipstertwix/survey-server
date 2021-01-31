import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Totaal Ingevuld</Title>
      <Typography component="h1" variant="h1">
        326
      </Typography>
      <Typography color="highlight" className={classes.depositContext}>
        Sinds 3 januari
      </Typography>
      <div>
        <Link color="secondary" href="#" onClick={preventDefault}>
          Bekijk alle resultaten
        </Link>
      </div>
    </React.Fragment>
  );
}