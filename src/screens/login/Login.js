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
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styles as customStyles } from "./styles";
import Copyright from "../../components/Copyright";
import SignInFooter from "../../components/SignInFooter";
import * as authService from "../../services/auth";
import * as actionCreators from "../../redux/actions/index";

const styles = customStyles;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: "",
        };
    }

    updateValueHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    validInput = () => {
        return this.state.userEmail.length > 0 && this.state.password.length > 0;
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.signIn(this.state.userEmail, this.state.password);
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
                    name="userEmail"
                    autoComplete="email"
                    autoFocus
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={!this.validInput()}
                >
                    {"Sign in"}
                </Button>
                <SignInFooter />
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

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {"Sign in"}
                    </Typography>
                    {form}
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.signIn.loading,
        error: state.signIn.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (userEmail, password) =>
            dispatch(actionCreators.signIn(userEmail, password)),
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
