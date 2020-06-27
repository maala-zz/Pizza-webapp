import React from "react";
import { withStyles } from "@material-ui/core/styles";
export const styles = theme => ({
    root: {
        maxWidth: "300",
        minWidth: "300",
        marginTop: "3%",
        marginLeft: "2%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: 'red',
    }
});
