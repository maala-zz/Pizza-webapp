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

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
        ],
    };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

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
                                <OrdersTableRow key={row.name} row={row} />
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