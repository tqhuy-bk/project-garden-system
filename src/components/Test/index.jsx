import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import './styles.scss'

const useStyles = makeStyles({
  table: {
    maxWidth: 'calc(100% - 240px)',
    marginLeft: '240px',
    marginTop: '10rem'
  },
});

function createData(name, email, phone) {
  return { name, email, phone };
}

const rows = [
  createData('Frozen yoghurt', 'dupbolun2012@gmail.com', '0905683258'),
  createData('Frozen yoghurt', 'dupbolun2012@gmail.com', '0905683258'),
  createData('Frozen yoghurt', 'dupbolun2012@gmail.com', '0905683258'),
];

export default function Test() {
  const classes = useStyles();

  return (
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className="table-row">
              <TableCell component="th" scope="row"  className="table-left">
                <img src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" className="table-image" />
                <span className="table-name">{row.name}</span>
              </TableCell>
              <TableCell className="" >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
