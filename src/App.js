import React from "react";
import { Route, Switch } from "react-router-dom";
import BackGround from "./components/BackGround";
import AdminFeature from "./features/Admin";
import AuthFeature from "./features/Auth";
import Test from "./features/test";
import UserFeature from "./features/User";
import "./styles.scss";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={BackGround} exact></Route>
        <Route path="/auth" component={AuthFeature}></Route>
        <Route path="/user" component={UserFeature}></Route>
        <Route path="/admin" component={AdminFeature}></Route>
        <Route path="/test" component={Test}></Route>
      </Switch>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
