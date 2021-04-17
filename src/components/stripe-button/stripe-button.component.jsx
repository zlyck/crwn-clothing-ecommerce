import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ih6C5FcVYVYz9CeO0CnDDE4lGrhCi2xUzviGjL20bTdjQ0WYJw02LCYrZzhzX7cfxtnzi7eqXKc7X6g75R1JqIm00OtypiYHz';

    const onToken = token =>{
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://sendeyo.com/en/f3eb2117da'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;