
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Bmi from "./components/Bmi";
import ELibrary from "./components/ELibrary";
import Home from "./components/Home";
import Basic from "./components/FormikDemo";
import SavingsAccount from "./components/SavingsAccount";
import ToDo from "./components/ToDo";
import FD from "./components/FD";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles();
  return (
    <Router>
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
              <Typography variant="h4" className={classes.title}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Tooly
                </Link>
              </Typography>
              {isLoggedIn ? (
                <Button color="inherit" onClick={() => setIsLoggedIn(false)}>
                  Log Out
                </Button>
              ) : (
                <Button color="inherit" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        {isLoggedIn ? (
          <Switch>
            <Route path="/bmi">
              <Bmi />
            </Route>
            <Route path="/library">
              <ELibrary />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/demo">
              <Basic />
            </Route>
            <Route path="/monthlysavings">
              <SavingsAccount />
            </Route>
            <Route path="/todo">
              <ToDo />
            </Route>
            <Route path="/fd">
              <FD />
            </Route>
          </Switch>
        ) : (
          <Route exact path="/">
            <div
              style={{
                width: "50%",
                height: "25%",
                textAlign: "centre",
                margin: "auto",
                paddingTop: 50,
              }}
            >
              <big>
                <h1 style={{ fontSize: 72 }}>Tooly</h1>
              </big>
              <h1>Tools for Common People...</h1>
              <br />
              <h5 style={{ color: "red" }}>Login to Continue</h5>
            </div>
          </Route>
        )}
      </div>
    </Router>
  );
}

export default App;
