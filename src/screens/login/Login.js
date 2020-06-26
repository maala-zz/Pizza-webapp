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
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styles as customStyles } from "./styles";
import * as actionCreators from "../../redux/actions/index";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"copyright" + " © "}
            <Link color="inherit" to="https://material-ui.com/">
                Innoscripta
      </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const styles = customStyles;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: "",
        };
    }

    updateUserEmailHandler = (event) => {
        this.setState({ userEmail: event.target.value });
    };

    updatePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    };

    validInput = () => {
        return this.state.userEmail.length > 0 && this.state.password.length > 0;
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.username, this.state.password);
    };

    render() {

        const { classes } = this.props;

        let form = (
            <form className={classes.form} noValidate onSubmit={this.submitHandler}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(event) => this.updateUserEmailHandler(event)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) => this.updatePasswordHandler(event)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={!this.validInput()}
                >
                    {"sign in"}
                </Button>
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
                        {"sign in"}
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

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect(null, null)(Login)
);
