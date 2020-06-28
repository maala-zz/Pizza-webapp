import React from 'react';
import { Alert } from 'reactstrap';

const InnoscriptaAlert = (props) => {
    return (
        <div>
            <Alert color="red" styel={{ backgroundColor: "green" }}>
                <h4 className="alert-heading">Warning!</h4>
                <p>
                    You should be signed in and your cart isn't empty to be able to submit an order
        </p>
            </Alert>
        </div>
    );
};

export default InnoscriptaAlert;
