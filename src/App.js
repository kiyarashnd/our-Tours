import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loading from './Loading'
import Tours from './Tours'
import Cart from './Cart'

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
      <Switch>
        <Route exact path="/">
          <main>
            <Tours tours={tours} removeTours={removeTours} addTours={addTours} />
            <Link to="/Cart" className='myLink'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><circle cx="80" cy="204" r="20" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><circle cx="184" cy="204" r="20" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /></svg>
              <span className='numberOfTour'>{cartTours.length}</span>
            </Link>
          </main>
        </Route>

        <Route path="/Cart">
          <Cart cartTours={cartTours} removeTours={removeTours} addTours={addTours}></Cart>
        </Route>
      </Switch>
    </Router>

  )
}

export default App
