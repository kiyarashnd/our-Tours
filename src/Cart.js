import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"

const Cart = ({ cartTours, setCartTorus }) => {
    let sum = 0;

    let undereline = false;
    let total = 0;
    // const persian = Intl.NumberFormat("fa")
    // console.log(persian.format(2312));
    if (cartTours.length > 0)
        undereline = true;


    function removeCartTours(id) {
        // const id = event.target.parentNode.parentNode.parentNode.id;
        const newTours = cartTours.filter((tour) => tour.id !== id);
        setCartTorus(newTours);
    }

    cartTours.map((tour) => {
        let price = Number(tour.price.replaceAll(',', ""))
        total += price;
    })
    sum = total;

    return (
        <section className='items'>

            {/* <Link to="/Cart" className='myLink'>
                <FaShoppingCart className='mySvg' />
                <span className='numberOfTour'>{cartTours.length}</span>
            </Link> */}

            <div className="titleNew">
                <h2>YOUR BAG</h2>
                <div className="underline"></div>
            </div>

            <div className='ToursInCart'>
                {cartTours.map((tour) => (
                    <article className='single-tour-Cart' key={tour.id} id={tour.id}>
                        <img src={tour.image} alt={tour.name} />
                        <footer>
                            <div className="tour-info-Cart">
                                <h4>{tour.name}</h4>
                                <h4 className='tour-price'>${tour.price}</h4>
                                <button className='remove-Cart' onClick={() => removeCartTours(tour.id)}>remove tour</button>
                            </div>
                        </footer>
                    </article>
                )
                )}
            </div>

            {undereline ? <div className="underline2"></div> : null}

            {/* for change format to dollar format with , */}
            <p className='totalPrice'>total price is {Intl.NumberFormat().format(sum)} $</p>
            <p className='totalPrice'>قیمت نهایی : {new Intl.NumberFormat("ar-EG").format(sum * 50000)} تومان</p>
        </section>
    );
}

export default Cart;