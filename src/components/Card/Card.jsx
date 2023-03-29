import React, { useEffect, useState } from 'react';
import OrderSum from '../OrderSum/OrderSum';
import SingleCard from '../SingleCard/SingleCard';
const Card = () => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const handleAddToCart = (singleData)=>{
        // console.log(singleData);
        const newCart = [...cart, singleData]
        setCart(newCart);
    }
    return (
        <div className='flex'>
            <div className='grid grid-cols-3 gap-4 mx-4 my-4'>
                {
                    data.map((singleData)=> <SingleCard
                    key={singleData.id}
                    singleData={singleData}
                    handleAddToCart={handleAddToCart}
                     >
                     </SingleCard> )
                }
                     
            </div>
            <div className='h-96 my-4 bg-orange-200 p-6  rounded-md mr-2 sticky top-0 ...'>
                <OrderSum cart={cart}></OrderSum>
            </div>
        </div>
    );
};

export default Card;