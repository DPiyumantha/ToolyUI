
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

function BMI() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const [formData, setFormData] = useState({
    heightValcm: "",
    massValkg: "",
  });

  const classes = useStyles();
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <h1 style={{ textAlign: "center" }}>Calculate BMI</h1>
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
            <InputLabel htmlFor="heightValcm">Height in cm</InputLabel>
            <Input
              id="heightValcm"
              value={formData.heightValcm}
              onChange={(v) =>
                setFormData({ ...formData, heightValcm: Number(v.target.value) })
              }
            />
            {/* <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText> */}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="massValkg">Mass in kg </InputLabel>
            <Input
              id="massValkg"
              value={formData.massValkg}
              onChange={(v) =>
                setFormData({ ...formData, massValkg: Number(v.target.value) })
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
                <TableCell style={{ color: "white" }}>BMI</TableCell>
                <TableCell style={{ color: "white" }}>Height in cm</TableCell>
                <TableCell style={{ color: "white" }}>Mass in kg</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default BMI;
