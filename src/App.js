import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loading from './Loading'
import Tours from './Tours'
import Cart from './Cart'
import { FaShoppingCart } from "react-icons/fa"

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([]);

  const [cartTours, setCartTorus] = useState([]);

  //this function run in initial ender
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTours = (id) => {
    //here newTours in tours that that dont have id
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //newTour is tour that user clicked on :
  const addTours = (newTour) => {
    //cartTours here is previous tour that added
    //res is first item that it's id is equal to newTour.id
    const res = cartTours.find((item) =>
      item.id === newTour.id
    )
    //fot this that user can't add 2 same tour :
    //age toye liste ghablimoon yani cartTours nist hala bia push kn age hast k dg ezafe nakon
    if (res === undefined) {
      setCartTorus([...cartTours, newTour]);
    }
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //for when we have no tours
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className='btn'>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <Router>
      {/* <header>
        <h1>This is test header</h1>
      </header> */}
      <Switch>
        <Route exact path="/">
          <main>
            <Tours tours={tours} removeTours={removeTours} addTours={addTours} />
            <Link to="/Cart" className='myLink'>
              <FaShoppingCart className='mySvg' />
              <span className='numberOfTour'>{cartTours.length}</span>
            </Link>
          </main>
        </Route>

        <Route path="/Cart">
          <Cart cartTours={cartTours} setCartTorus={setCartTorus}></Cart>
        </Route>
      </Switch>
    </Router>

  )
}

export default App
