import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styles as customStyles } from "./styles";
import Copyright from "../../components/Copyright";
import SignUpFooter from "../../components/SignUpFooter";
import * as authService from "../../services/auth";
import * as actionCreators from "../../redux/actions/index";

const styles = customStyles;

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userName: "",
            password: "",
            confirmPassword: "",
        };
    }

    updateValueHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    validInput = () => {
        return this.state.userName.length > 0 &&
            this.state.userEmail.length > 0 && this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword;
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.signUp(this.state.userEmail, this.state.password, this.state.userName);
    };

    render() {

        if (authService.isAuthenticated()) {
            return <Redirect to="/" />;
        }

        const { classes } = this.props;

        let form = (
            <form className={classes.form} noValidate onSubmit={this.submitHandler}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="userEmail"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(event) => this.updateValueHandler(event)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="userName"
                    label="Name"
                    id="userName"
                    onChange={(event) => this.updateValueHandler(event)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) => this.updateValueHandler(event)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    onChange={(event) => this.updateValueHandler(event)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={!this.validInput()}
                >
                    {"Sign up"}
                </Button>
                <SignUpFooter />
            </form>
        );

        if (this.props.isLoading) {
            form = (
                <div>
                    {" "}
                    <br /> <br /> <CircularProgress />{" "}
                </div>
            );
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p style={{ color: "red" }}> {this.props.error} </p>;
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {"Sign up"}
                    </Typography>
                    {form}
                </div>
                {errorMessage}
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.signUp.loading,
        error: state.signUp.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userEmail, password, userName) =>
            dispatch(actionCreators.signUp(userEmail, password, userName)),
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Signup)
);
