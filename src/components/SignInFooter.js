import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


function SignInFooter() {
    return (
        <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
                <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    );
}

export default SignInFooter;