import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const Routes = props => {
  return (
    <MuiThemeProvider theme={props.store.theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => <div>HW</div>} />
          <Redirect from="*" to="/home" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

const mapStateToProps = store => ({
  store: {
    theme: store.theme.selected
  }
});

export default connect(mapStateToProps)(Routes);
