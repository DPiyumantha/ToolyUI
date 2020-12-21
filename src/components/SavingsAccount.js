import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, FormHelperText, Input } from "@material-ui/core";
import { Colors } from "../colors";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(10000, 159, 6.0, 24, 4.0),
  createData(10000, 159, 6.0, 24, 4.0),
  createData(10000, 159, 6.0, 24, 4.0),
  createData(10000, 159, 6.0, 24, 4.0),
  createData(10000, 159, 6.0, 24, 4.0),
];

function SavingsAccount() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const [formData, setFormData] = useState({
    mntAmnt: "",
    mntIntRate: "",
    mntPeriod: "",
    wht: "",
  });

  const classes = useStyles();
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <h1 style={{ textAlign: "center" }}>Calculate Total Monthly Savings</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "50%",
          }}
        >
          <FormControl>
            <InputLabel htmlFor="mntAmnt">Monthly Saving Amount</InputLabel>
            <Input
              id="mntAmnt"
              value={formData.mntAmnt}
              onChange={(v) =>
                setFormData({ ...formData, mntAmnt: Number(v.target.value) })
              }
            />
            {/* <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText> */}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="mntIntRate">Annual Interest Rate </InputLabel>
            <Input
              id="mntIntRate"
              value={formData.mntIntRate}
              onChange={(v) =>
                setFormData({ ...formData, mntIntRate: Number(v.target.value) })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="mntPeriod">Number of Months </InputLabel>
            <Input
              id="mntPeriod"
              value={formData.mntPeriod}
              onChange={(v) =>
                setFormData({ ...formData, mntPeriod: Number(v.target.value) })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="wht">Withholding Tax </InputLabel>
            <Input
              id="wht"
              value={formData.wht}
              onChange={(v) =>
                setFormData({ ...formData, wht: Number(v.target.value) })
              }
            />
          </FormControl>

          <Button
            style={{
              color: "white",
              width: 100,
              marginTop: 25,
              marginBottom: 25,
              background: Colors.MAIN,
            }}
            onClick={() => console.log(formData)}
          >
            Calculate
          </Button>
        </div>
      </div>
      <Divider />
      <div style={{ marginTop: 25 }}>
        Past Calculations
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ background: Colors.MAIN, color: "white" }}>
                <TableCell style={{ color: "white" }}>Total Amount</TableCell>
                <TableCell style={{ color: "white" }}>Monthly Saving</TableCell>
                <TableCell style={{ color: "white" }}>No. of Months</TableCell>
                <TableCell style={{ color: "white" }}>Interest Rate</TableCell>
                <TableCell style={{ color: "white" }}>WHT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SavingsAccount;
