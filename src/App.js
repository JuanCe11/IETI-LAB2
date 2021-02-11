import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import 'react-datepicker/dist/react-datepicker.css';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }
    render() {
        const LoginView = () => (
            (!this.state.isLoggedIn)?<Login/>:<TodoApp/>
        );
        const TodoAppView = () => (
            (this.state.isLoggedIn)?<TodoApp/>:<Login/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
