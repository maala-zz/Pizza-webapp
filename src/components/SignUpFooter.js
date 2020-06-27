import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


function SignUpFooter() {
    return (
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
                <Link to="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                </Link>
            </Grid>
        </Grid>
    );
}

export default SignUpFooter;