import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let burgerIngredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                burgerIngredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'):
                burgerIngredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ('meat'):
                burgerIngredient = <div className="Meat"></div>;
                break;
            case ('cheese'):
                burgerIngredient = <div className="Cheese"></div>;
                break;
            case ('bacon'):
                burgerIngredient = <div className="Bacon"></div>;
                break;
            case ('salad'):
                burgerIngredient = <div className="Salad"></div>;
                break;
            default:
                burgerIngredient = null;
                break;
        }
        return burgerIngredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient;