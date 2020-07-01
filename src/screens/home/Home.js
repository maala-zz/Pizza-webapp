import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import InnoscriptaAppBar from "../../components/innoscriptaAppBar/InnoscriptaAppBar";
import * as actionCreators from "../../redux/actions/index";
import { styles as customStyles } from "./styles";

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

                        <div style={{ float: "left", width: "24%" }}>
                            <PizzaCard imageUrl={pizza.image_url} name={pizza.name}
                                description={pizza.description} price={pizza.price}
                                pizzaId={pizza.id} />
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
