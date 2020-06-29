import React from 'react';
import Alert from '@material-ui/lab/Alert';

const InnoscriptaAlert = (props) => {
    return (
        <Alert severity="warning" >
            You should be signed in and your cart isn't empty to be able to submit an order!
        </Alert>
    );
};

export default InnoscriptaAlert;
