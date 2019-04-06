import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import ProductList from "./containers/ProductList/ProductList";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
// import MovieAdd from "./containers/MovieAdd/MovieAdd";
// import MovieEdit from "./containers/MovieEdit/MovieEdit";
// import HallList from "./containers/HallList/HallList";
// import HallDetail from "./containers/HallDetail/HallDetail";
// import HallEdit from "./containers/HallEdit/HallEdit";
// import HallAdd from "./containers/HallAdd/HallAdd";
import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./components/AuthRoute/AuthRoute"
import Register from "./containers/Register/Register";
// import UserDetail from "./containers/UserDetail/UserDetail";
// import UserEdit from "./containers/UserEdit/UserEdit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {/*<AuthRoute path="/halls/add" component={HallAdd}/>*/}
                        {/*/!* :id обозначает переменную id *!/*/}
                        {/*<AuthRoute path="/halls/:id/edit" component={HallEdit}/>*/}
                        {/*<Route path="/halls/:id" component={HallDetail}/>*/}
                        {/*<Route path="/halls" component={HallList}/>*/}
                        {/*<AuthRoute path="/movies/add" component={MovieAdd}/>*/}
                        {/*/!* :id обозначает переменную id *!/*/}
                        {/*<AuthRoute path="/movies/:id/edit" component={MovieEdit}/>*/}
                        <Route path="/products/:id" component={ProductDetail}/>
                        {/*<AuthRoute path="/users/:id/edit" component={UserEdit}/>*/}
                        {/*<AuthRoute path="/users/:username" component={UserDetail}/>*/}
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/" component={ProductList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
