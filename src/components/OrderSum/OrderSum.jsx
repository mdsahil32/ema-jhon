import React from 'react';

const OrderSum = (props) => {
    const {cart}= props
    // console.log(cart);

    let totalPrice= 0;
    let totalShipping = 0;
    for(const product of cart){
        console.log(product);
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100
    const GrandTotal = totalPrice + tax + totalShipping;
    return (
        <>
            <h1 className='font-bold text-2xl mx-12'>Order Summary</h1>
            <h4>Selected Items: {cart.length}</h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${GrandTotal.toFixed(2)}</h4>
        </>
    );
};

export default OrderSum;