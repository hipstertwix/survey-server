import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mrt, 2021', '4b0a4d60f89c054b ', 'd1f9e14a25216c13', 'Ja', '23 Mrt, 2021'),
  createData(1, '16 Mrt, 2021', '82aa8b0b3ed131fd', '82aa8b0b3ed131fd', 'Ja', '23 Mrt, 2021'),
  createData(2, '16 Mrt, 2021', 'd1f9e14a25216c13', 'd1f9e14a25216c13', 'Ja', '23 Mrt, 2021'),
  createData(3, '15 Mrt, 2021', '67757aa2c213ac28', '3de934c8350ab9ee', 'Nee', ''),
  createData(4, '15 Mrt, 2021', '3de934c8350ab9ee', '82aa8b0b3ed131fd', 'Ja', '23 Mrt, 2021'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recente Responses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>Respondent ID</TableCell>
            <TableCell>Onderzoek ID</TableCell>
            <TableCell>Op Tijd</TableCell>
            <TableCell align="right">Volgende Vragenlijst</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="secondary" href="#" onClick={preventDefault}>
          Laad meer
        </Link>
      </div>
    </React.Fragment>
  );
}