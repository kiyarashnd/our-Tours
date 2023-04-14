import { Link } from 'react-router-dom'
import { useState } from 'react';

const Cart = ({ cartTours, removeTours, addTours }) => {
    let undereline = false;
    let sum = 0;
    // const persian = Intl.NumberFormat("fa")
    // console.log(persian.format(2312));
    if (cartTours.length > 0)
        undereline = true;

    cartTours.map((tour) => {
        let price = Number(tour.price.replaceAll(',', ""))
        sum += price;
    })

    return (
        <section className='items'>
            <div className="titleNew">
                <h2>Cart</h2>
                <div className="underline"></div>
            </div>

            <div className='ToursInCart'>
                {cartTours.map((tour) => {
                    // return <Tour key={tour.id} tour={tour} removeTours={removeTours} addTours={addTours} />
                    return <article className='single-tour' key={tour.id}>
                        <img src={tour.image} alt={tour.name} />
                        <footer>
                            <div className="tour-info">
                                <h4>{tour.name}</h4>
                                <h4 className='tour-price'>${tour.price}</h4>
                            </div>
                        </footer>
                    </article>;
                })}
            </div>

            {undereline ? <div className="underline2"></div> : null}

            {/* for change format to dollar format with , */}
            <p className='totalPrice'>total price is {Intl.NumberFormat().format(sum)} $</p>
            <p className='totalPrice'>قیمت نهایی : {new Intl.NumberFormat("ar-EG").format(sum * 50000)} تومان</p>

            <Link to="/" className="backHome">Back to home</Link>
        </section>
    );
}

export default Cart;