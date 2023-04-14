import { Link } from 'react-router-dom'

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

            <div className='myLink'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><circle cx="80" cy="204" r="20" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><circle cx="184" cy="204" r="20" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /></svg>
                <span className='numberOfTour'>{cartTours.length}</span>
            </div>

            <div className="titleNew">
                <h2>YOUR BAG</h2>
                <div className="underline"></div>
            </div>

            <div className='ToursInCart'>
                {cartTours.map((tour) => {
                    // return <Tour key={tour.id} tour={tour} removeTours={removeTours} addTours={addTours} />
                    return <article className='single-tour-Cart' key={tour.id}>
                        <img src={tour.image} alt={tour.name} />
                        <footer>
                            <div className="tour-info-Cart">
                                <h4>{tour.name}</h4>
                                <h4 className='tour-price'>${tour.price}</h4>
                                <button className='remove-Cart'>remove tour</button>
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