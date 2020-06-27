import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from "react-redux";
import { styles as customStyles } from "./styles";
const styles = customStyles;
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
class PizzaCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root} >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
              </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Pizza salami"
                    subheader="10$"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Pizza dscription
            </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Tooltip title="Add to cart">
                        <IconButton aria-label="share">
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Tooltip>
                    <input type="number" placeholder="#" min="0" max="99" style={{ width: 30 }} />
                </CardActions>
            </Card>
        );
    }
}

PizzaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect(null, null)(PizzaCard)
);