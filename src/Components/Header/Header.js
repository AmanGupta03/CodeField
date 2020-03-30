import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import auth from '../../Auth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  buttonMarginSides: {
    margin: "0px 5px"
  }
}));

const bwTheme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: grey[50] }
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={bwTheme}>
        <AppBar position="fixed" className="main-appbar" color="primary">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              CodeField
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => {auth.signIn();}}
            >
               Sign In
           </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}