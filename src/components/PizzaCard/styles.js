import React from "react";
import { withStyles } from "@material-ui/core/styles";
export const styles = theme => ({
    root: {
        maxWidth: "400",
        minWidth: "400",
        marginTop: "3%",
        marginLeft: "10%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: 'red',
    }
});
