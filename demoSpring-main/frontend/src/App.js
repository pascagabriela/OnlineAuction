import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Component} from "react";
import Login from './Login/Login'
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Login/Register";
import Smartphones from "./Products/Electronics/Smartphones";
import VideoGames from "./Products/Electronics/VideoGames";
import Computer from "./Products/Electronics/Computer";
import Cameras from "./Products/Electronics/Cameras";
import UnloggedDashboard from "./Dashboard/UnloggedDashboard";
import SellProduct from "./SellProduct/SellProduct";

class App extends Component {
    // state = {
    //     products: []
    // };

    // async componentDidMount() {
    //     const response = await fetch('/products');
    //     const body = await response.json();
    //     this.setState({products: body});
    // }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true}><UnloggedDashboard/></Route>
                    <Route path='/login' exact={true}><Login/></Route>
                    <Route path='/dashboard'><Dashboard/></Route>
                    <Route path='/register'><Register/></Route>
                    <Route path='/smartphones'><Smartphones/></Route>
                    <Route path='/videogames'><VideoGames/></Route>
                    <Route path='/computer'><Computer/></Route>
                    <Route path='/cameras'><Cameras/></Route>
                    <Route path='/sell'><SellProduct/></Route>
                    {/*<Route path='/products' exact={true}><ProductList/></Route>*/}
                    {/*<Route path='/products/:id'><ProductEdit/></Route>*/}
                </Switch>
            </Router>
        )
    }
}

export default App;