import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link, Redirect } from "react-router-dom";


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

export default Copyright;