import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
export const styles = theme => ({
    root: {
        marginTop: "3%",
        marginLeft: "10%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    }
});
