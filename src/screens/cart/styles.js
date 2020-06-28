import React from "react";
import { withStyles } from "@material-ui/core/styles";
export const styles = theme => ({
    table: {
        minWidth: 650,
    },
    button: {
        display: "flex",
        flexDirection: "row",
        align: "flexEnd",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
        width: "10%",
        textTransform: 'none'
    },
    orderSection: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(3),
        textTransform: 'none'
    }
});
