import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Counter from "./Components/Counter";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles(
  (theme) => (
    console.log(theme),
    {
      root: {
        display: "flex",
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: "auto",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }
  )
);

const App = () => {
  const classes = useStyles();
  const [tokenCount, setCount] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = () => {
    axios.get("/countTokens").then(({ data }) => {
      setCount(data.count);
      //   setLoading({ loading: false });
    });
  };
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
