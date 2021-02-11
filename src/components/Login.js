import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {email:'',password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" onChange={this.handleChange}autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleChange(e){
        console.log("changing",e.target.name,"---",e.target.value);
        console.log("antes",this.state.password);
        this.setState({[e.target.name]: e.target.value,});
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("Entro")
        console.log(this.state.email,"---",this.state.password);
        if(this.state.email.length && this.state.password.length){
            console.log("Login valido");
            localStorage.setItem('user', this.state.email);
            localStorage.setItem('pass', this.state.password);
        }
        console.log("Login invalido");
        this.props.validateLogin();
    }
}