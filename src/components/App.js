import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "../routeComponents/DashBoard";
import PetCreate from "../routeComponents/Pet/PetCreate";
import Home from "../routeComponents/Home";
import PetList from "../routeComponents/Pet/PetList";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PetEdit from "../routeComponents/Pet/PetEdit";
import PetDelete from "../routeComponents/Pet/PetDelete";
import PetDetails from "../routeComponents/Pet/PetDetails";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route path="/create-pet" component={PetCreate}></Route>
          <Route path="/my-pets" component={PetList}></Route>
          <Route path="/pet/edit/:id" component={PetEdit} />
          <Route path="/pet/delete/:id" component={PetDelete} />
          <Route path="/pet/:id" component={PetDetails} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
