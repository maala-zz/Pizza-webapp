import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import InnoscriptaAppBar from "../../components/innoscriptaAppBar/InnoscriptaAppBar";
import InnoscriptaAlert from "../../components/innoscriptaAlert/InnoscriptaAlert";
import * as actionCreators from "../../redux/actions/index";
import * as authService from "../../services/auth";
import { styles as customStyles } from "./styles";
const styles = customStyles;

class Cart extends React.Component {

    handleQuantityChange(event, pizzaId) {
        this.props.updatePizzaOnCartQuantityIfExists({ id: pizzaId, quantity: event.target.value });
    }

    handleOrderAddressChange = (event) => {
        this.props.updateOrderAddress(event.target.value);
    }

    handleOrderSerialIdChange = (event) => {
        this.props.updateOrderSerialId(event.target.value);
    }

    handleOrderNameChange = (event) => {
        this.props.updateOrderName(event.target.value);
    }

    handleOrderDeliveryCostChange = (event) => {
        this.props.updateOrderDeliveryCost(event.target.value);
    }

    submitOrder = (event) => {
        let order = {
            address: this.props.orderAddress,
            deliveryCost: this.props.orderDeliveryCost,
            name: this.props.orderName,
            orderSerialId: this.props.orderSerialId,
            totalOrderCost: this.props.totalOrderCost,
            pizzasInCart: this.props.pizzaInCartArray
        };
        this.props.submitOrder(order);
    }

    render() {

        const { classes } = this.props;

        return (

            <div>

                <InnoscriptaAppBar />
                {
                    this.props.pizzaInCartArray.length === 0 || !this.props.isAuthenticated ?
                        < InnoscriptaAlert /> : null
                }

                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Pizza</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.pizzaInCartArray.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center"><TextField
                                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                                        min="0"
                                        defaultValue={row.quantity} style={{ width: "20%" }}
                                        onChange={(event) => this.handleQuantityChange(event, row.id)} /></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            ))}
                            <TableRow key={"totalCost"}>
                                <TableCell component="th" scope="row">
                                    Total cost
                                </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">{Math.round(this.props.totalOrderCost * 10) / 10 + "$ (delivery cost execluded)"}</TableCell>
                                <TableCell align="center">{Math.round(this.props.totalOrderCost * 0.89 * 10) / 10 + "€ (delivery cost execluded)"}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={classes.orderSection}>
                    <TextField placeholder="Order address" style={{ width: "20%", paddingTop: "2%" }} onChange={(event) => this.handleOrderAddressChange(event)} />
                    <TextField placeholder="Order ID" style={{ width: "20%", paddingTop: "2%" }} onChange={(event) => this.handleOrderSerialIdChange(event)} />
                    <TextField placeholder="Order name" style={{ width: "20%", paddingTop: "2%" }} onChange={(event) => this.handleOrderNameChange(event)} />
                    <TextField placeholder="Delivery cost" style={{ width: "20%", paddingTop: "2%" }} onChange={(event) => this.handleOrderDeliveryCostChange(event)} />

                </div>

                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    uppercase={false}
                    disabled={this.props.pizzaInCartArray.length === 0 || !this.props.isAuthenticated}
                    onClick={this.submitOrder}
                >
                    {"Submit order"}
                </Button>
            </div >
        );
    }


};


Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        pizzaInCartArray: state.cart.pizzaInCartArray,
        totalOrderCost: state.cart.totalOrderCost,
        orderSerialId: state.cart.orderSerialId,
        orderName: state.cart.name,
        orderAddress: state.cart.address,
        orderDeliveryCost: state.cart.deliveryCost,

        submittingOrderError: state.order.submittingOrderError,
        isSubmittingOrder: state.order.isSubmittingOrder,
        submittingOrderSuccess: state.order.submittingOrderSuccess,

        isAuthenticated: state.signIn.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePizzaOnCartQuantityIfExists: (pizza) => dispatch(actionCreators.updatePizzaOnCartQuantityIfExists(pizza)),
        updateOrderSerialId: (orderSerialId) => dispatch(actionCreators.updateOrderSerialId(orderSerialId)),
        updateOrderName: (orderName) => dispatch(actionCreators.updateOrderName(orderName)),
        updateOrderAddress: (orderAddress) => dispatch(actionCreators.updateOrderAddress(orderAddress)),
        updateOrderDeliveryCost: (deliveryCost) => dispatch(actionCreators.updateOrderDeliveryCost(deliveryCost)),
        submitOrder: (order) => dispatch(actionCreators.submitOrder(order)),
    };
};


export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Cart)
);