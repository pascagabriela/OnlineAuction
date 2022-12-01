import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Component} from "react";
import Login from './Login/Login'
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Login/Register";

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
                    <Route path='/' exact={true}><Login/></Route>
                    <Route path='/dashboard'><Dashboard/></Route>
                    <Route path='/register'><Register/></Route>
                    {/*<Route path='/products' exact={true}><ProductList/></Route>*/}
                    {/*<Route path='/products/:id'><ProductEdit/></Route>*/}
                </Switch>
            </Router>
        )
    }
}

export default App;