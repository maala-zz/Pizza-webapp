import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from "react-redux";
import { styles as customStyles } from "./styles";
const styles = customStyles;

class PizzaCard extends React.Component {
    render() {
        const { classes } = this.props;

        const { pizzaId } = this.props;
        const { imageUrl } = this.props;
        const { name } = this.props;
        const { description } = this.props;
        const { price } = this.props;

        return (
            <Card className={classes.root} >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader={price + "$"}
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description.length > 100 ? description.substring(0, 100) + "..." : description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Tooltip title="Add to cart">
                        <IconButton aria-label="share">
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Tooltip>
                    <input id={pizzaId} type="number" placeholder="#" min="0" max="99" style={{ width: 30 }} />
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