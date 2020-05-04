import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Counter from "./Counter";
import Messages from "./Messages";
import NewPrompt from "./Modal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import axios from "axios";
import Recent from "./Recent5";

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

export default function ClippedDrawer() {
  const [recentData, setRecentData] = useState({});
  const [tokenCount, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const getCount = () => {
    axios.get("/countTokens").then(({ data }) => {
      setCount(data.count);
      //   setLoading({ loading: false });
    });
  };
  const getRecent = () => {
    axios.get("/topdata").then(({ data }) => {
      setRecentData(data);
    });
  };

  useEffect(() => {
    getRecent();
    getCount();
  }, []);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {["Home", "Messages"].map((text, index) => (
                <Link to={`/${text.toLowerCase()}`}>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <br />
            <br />
            <div className="counterContainer">
              <Counter counter={tokenCount} getCount={getCount} />
            </div>
            <br />
            <br />
            <Divider />
            <div
              className="compose_button_container"
              onClick={() => setOpen(true)}
            >
              <button className="compose_button">
                <span className="compose_icon">+</span>{" "}
                <span className="compose_text">Compose</span>
              </button>
            </div>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route
              exact
              path="/home"
              children={<Recent topData={recentData} />}
            />
            <Route exact path="/messages" children={<Messages />} />
          </Switch>
          <NewPrompt type="new" open={open} setOpen={setOpen} />
        </main>
      </div>
    </Router>
  );
}
