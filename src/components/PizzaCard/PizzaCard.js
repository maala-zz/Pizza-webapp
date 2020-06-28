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
import * as actionCreators from "../../redux/actions/index";
import { styles as customStyles } from "./styles";
const styles = customStyles;

class PizzaCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        };
    }

    onChangeQuantity = (event, price, name) => {
        let quantity = event.currentTarget.value;
        this.setState({ quantity: quantity });
        let pizza = { price: price, quantity: quantity, id: event.currentTarget.id, name: name };
        //this.props.updatePizzaOnCartIfExists(pizza);
    };

    addPizzaToCart = (event, price, id, name) => {
        let quantity = this.state.quantity;
        let pizza = { price: price, quantity: quantity, id: id, name: name };
        this.props.addPizzaToCart(pizza);
    };

    isPizzaInCart(pizzaId) {
        let item = this.props.pizzaInCartArray.filter(item => item.id === pizzaId)[0];
        if (item != null) return true;
        return false;
    }

    render() {
        const { classes } = this.props;

        const { pizzaId } = this.props;
        const { imageUrl } = this.props;
        const { name } = this.props;
        const { description } = this.props;
        const { price } = this.props;

        let pizzaInCart = this.props.pizzaInCartArray.filter(item => item.id === pizzaId)[0];

        const defaultQuantity = pizzaInCart == null ? null : pizzaInCart.quantity;

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
                        {
                            this.isPizzaInCart(pizzaId) === true ? <FavoriteIcon /> : <FavoriteBorderIcon />
                        }
                    </IconButton>
                    <Tooltip title="Add to cart">
                        <IconButton aria-label="share">
                            <ShoppingBasketIcon onClick={(event) => this.addPizzaToCart(event, price, pizzaId, name)} />
                        </IconButton>
                    </Tooltip>
                    <input id={pizzaId} type="number"
                        defaultValue={defaultQuantity}
                        placeholder="#" min="0"
                        max="99" style={{ width: 30 }}
                        onChange={(event) => this.onChangeQuantity(event, price, name)}
                    />
                </CardActions>
            </Card>
        );
    }
}

PizzaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.signUp.loading,
        pizzaInCartArray: state.cart.pizzaInCartArray
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPizzaToCart: (pizza) => dispatch(actionCreators.addPizzaToCart(pizza)),
        updatePizzaOnCartIfExists: (pizza) => dispatch(actionCreators.updatePizzaOnCartIfExists(pizza)),
    };
};


export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(PizzaCard)
);