import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useEffect, useState } from 'react';

const Cart = ({ cartTours }) => {
    const [tours, setTours] = useState(cartTours);
    let [sum, setsum] = useState(0);

    let undereline = false;
    let total = 0;
    // const persian = Intl.NumberFormat("fa")
    // console.log(persian.format(2312));
    if (cartTours.length > 0)
        undereline = true;


    function removeCartTours(event) {
        const id = event.target.parentNode.parentNode.parentNode.id;
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    useEffect(() => {
        tours.map((tour) => {
            let price = Number(tour.price.replaceAll(',', ""))
            total += price;
        })
        setsum(total);
    }, [tours]);

    return (
        <section className='items'>

            <div className='myLink2'>
                <FaShoppingCart className='mySvg' />
                <span className='numberOfTour'>{tours.length}</span>
            </div>

            <div className="titleNew">
                <h2>YOUR BAG</h2>
                <div className="underline"></div>
            </div>

            <div className='ToursInCart'>
                {tours.map((tour) => {
                    // return <Tour key={tour.id} tour={tour} removeTours={removeTours} addTours={addTours} />
                    return (
                        <article className='single-tour-Cart' key={tour.id} id={tour.id}>
                            <img src={tour.image} alt={tour.name} />
                            <footer>
                                <div className="tour-info-Cart">
                                    <h4>{tour.name}</h4>
                                    <h4 className='tour-price'>${tour.price}</h4>
                                    <button className='remove-Cart' onClick={removeCartTours}>remove tour</button>
                                </div>
                            </footer>
                        </article>
                    )
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