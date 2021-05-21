// useEffect(() => {
//     (async () => {
//         try {
//             const photoList = await photoApi.getAllPhotos();
//             setListPhoto(photoList)
//         } catch (error) {
//             console.log(error)
//         }
//     })()
//   }, []);

import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import SidebarAdmin from "../../components/SideBarAdmin/index";
import Customer from './page/Customer';
import CustomerDetail from './page/CustomerDetail';
import Report from './page/Report/indes';


AdminFeature.propTypes = {
    
};

function AdminFeature(props) {
    const match = useRouteMatch()
    return (
      <div>
          <SidebarAdmin/>
        <Switch>
        <Route path={`${match.url}/customers`} component={Customer} exact></Route>
        <Route path={`${match.url}/customers/:id`} component={CustomerDetail} exact></Route>
        <Route path={`${match.url}/report`} component={Report} exact></Route>
        {/* <Route path={`${match.url}/report/:id`} component={CustomerDetail} exact></Route> */}
        {/* <Route path={`${match.url}/customers/:id/edit`} component={About} exact></Route> */}
        {/* <Route path={`${match.url}/edit/:id`} component={Edit} exact></Route> */}
        {/* <Route path={`${match.url}/edit/:id`} component={Edit} exact></Route> */}
      </Switch>
        </div>
    
    );
}

export default AdminFeature;