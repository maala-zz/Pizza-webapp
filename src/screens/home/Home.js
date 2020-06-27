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
import * as authService from "../../services/auth";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import InnoscriptaAppBar from "../../components/innoscriptaAppBar/InnoscriptaAppBar";
import * as actionCreators from "../../redux/actions/index";

const styles = customStyles;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: "",
        };
    }

    componentDidMount() {
        this.props.getAllPizza();
    }

    render() {
        const { classes } = this.props;

        console.log("pizza array", this.props.pizzaArray);
        if (this.props.isLoading || this.props.pizzaArray === null) {
            return (<div>
                {" "}
                <br /> <br /> <CircularProgress />{" "}
            </div>);
        }
        else
            return (
                <div>
                    <InnoscriptaAppBar />

                    {this.props.pizzaArray.map((pizza, index) => (

                        <div style={{ float: "left", width: "25%", height: "400" }}>
                            <PizzaCard imageUrl={pizza.image_url} name={pizza.name}
                                description={pizza.description} price={pizza.price} />
                        </div>
                    ))}


                </div>
            );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.pizza.loading,
        pizzaArray: state.pizza.pizzaArray,
        error: state.pizza.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPizza: () =>
            dispatch(actionCreators.getAllPizza()),
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Home)
);
