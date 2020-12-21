import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin:0,
    // padding:0,
    
    

  },
  container:{
      maxWidth:'90%',
      margin:'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background:"#3f51b5",
    margin:10,
    // height:400,
    // maxWidth:'450'
    
    
  },
  
  media: {
    height: 140,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{paddingTop:0, marginBottom:20,}}>
        
    
      <Grid className={classes.container} container spacing={2} style={{padding:0}}>
        <Grid item xs={12} sm={6} style={{padding:0,  margin:'auto'}}>
            <h1 style={{textAlign:'center'}}>Health</h1>
          <Paper className={classes.paper} elevation={20}>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent:"space-evenly",
                flexDirection: "row",
                flexFlow:'wrap'
              }}
            >
              <Card title="BMI Calculator" path="/bmi" />
              
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{padding:0,  margin:'auto'}}>
        <h1 style={{textAlign:'center'}}>Finance</h1>
          <Paper className={classes.paper} elevation={20}>
          <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent:"space-evenly",
                flexDirection: "row",
                flexFlow:'wrap'
              }}
            >
              <Card title="Monthly Savings Calculator" path="/monthlysavings" />
              <Card title="Fixed Deposit Return Calculator" path="/fd"/>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.container} container spacing={2} style={{padding:0}}>
        <Grid item xs={12} sm={6} style={{padding:0,  margin:'auto'}}>
        <h1 style={{textAlign:'center'}}>Life Style</h1>
          <Paper className={classes.paper} elevation={20}>
          <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent:"space-evenly",
                flexDirection: "row",
                flexFlow:'wrap'
              }}
            >
              <Card title="To Do List" path="/todo" />
              <Card title="E Books Library" path="/library"/>
            </div>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6} style={{padding:0,  margin:'auto'}}>
        <h1 style={{textAlign:'center'}}>Life Style</h1>
          <Paper className={classes.paper} elevation={20}>
          <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent:"space-evenly",
                flexDirection: "row",
                flexFlow:'wrap'
              }}
            >
              <Card title="BMI Calculator" path="/bmi" />
              <Card title="BMI Calculator" />
            </div>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
