import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import SideBarUser from '../../components/SidebarUser';
import About from './pages/About';
import GardenUser from './pages/Garden';
import GardenDetail from './pages/GardenDetail';
import Home from './pages/Home';


UserFeature.propTypes = {
    
};

function UserFeature(props) {
    const match = useRouteMatch()
    return (
      <div>
          <SideBarUser/>
        <Switch>
        <Route path={`${match.url}/home`} component={Home} exact></Route>
        <Route path={`${match.url}/info`} component={About} exact></Route>
        <Route path={`${match.url}/info/edit/:id`} component={About} exact></Route>
        <Route path={`${match.url}/garden`} component={GardenUser} exact></Route>
        <Route path={`${match.url}/garden/:id`} component={GardenDetail} exact></Route>
        {/* <Route path={`${match.url}/edit/:id`} component={Edit} exact></Route> */}
      </Switch>
        </div>
    
    );
}

export default UserFeature;