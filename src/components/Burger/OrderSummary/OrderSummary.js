import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igkey => {
			return <li key={igkey}>
				<span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
				</li>
		})
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Continue to checkout?</p>
			<Button clicked={props.purchaseCanceled} btnType="Danger">CANCEL</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
		</Aux>
	)
};

export default orderSummary;