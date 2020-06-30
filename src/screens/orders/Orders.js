import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import OrdersTableRow from "../../components/OrdersTableRow";
import InnoscriptaAppBar from "../../components/innoscriptaAppBar/InnoscriptaAppBar";
import * as actionCreators from "../../redux/actions/index";
import { styles as customStyles } from "./styles";
const styles = customStyles;

class Orders extends React.Component {

    componentDidMount() {
        this.props.getUserOrders();
    }

    render() {

        const { classes } = this.props;

        if (this.props.userOrders === null || this.props.loadingUserOrders) {
            return (
                <div>
                    {" "}
                    <br /> <br /> <CircularProgress />{" "}
                </div>
            );
        }

        return (
            <div>
                <InnoscriptaAppBar />
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Order name</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Order id</TableCell>
                                <TableCell align="right">Total cost</TableCell>
                                <TableCell align="right">Delivery cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.userOrders.map((row) => (
                                <OrdersTableRow key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userOrders: state.order.userOrders,
        loadingUserOrdersError: state.order.loadingUserOrdersError,
        loadingUserOrders: state.order.loadingUserOrders
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserOrders: () => dispatch(actionCreators.getUserOrders())
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Orders)
);