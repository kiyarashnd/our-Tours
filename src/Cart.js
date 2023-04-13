import { Link } from 'react-router-dom'

const Cart = ({ cartTours }) => {
    // const [undereline, setUnderline] = useState(false);
    let undereline = false;
    let sum = 0;
    // const persian = Intl.NumberFormat("fa")
    // console.log(persian.format(2312));
    if (cartTours.length > 0)
        undereline = true;
    return (
        <section className='items'>
            {cartTours.map((tour) => {
                let price = Number(tour.price.replaceAll(',', ""))
                sum += price;
                return (
                    <p key={tour.id} className='liClass'>
                        ✔ {tour.name} is <span>{tour.price}$</span>
                    </p>
                )
            })}
            {undereline ? <div className="underline2"></div> : null}

            {/* for change format to dollar format with , */}
            <p className='totalPrice'>total price is {Intl.NumberFormat().format(sum)} $</p>
            <p className='totalPrice'>قیمت نهایی : {new Intl.NumberFormat("ar-EG").format(sum * 50000)} تومان</p>

            <Link to="/" className="backHome">Back to home</Link>
        </section>
    );
}

export default Cart;