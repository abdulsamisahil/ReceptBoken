import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/* Components */
import Footer from './components/Footer'
import Header from './components/Header'

/* Pages */
import Home from './pages/Home'
import MyFavorites from './pages/MyFavorites'
import FoodItemClicked from './pages/FoodItemClicked'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {

  return (
    <>
      <Router>
        {/* Bring Routes and Route that will be later used to route contact and my favorite meals pages next time */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-favorites' element={<MyFavorites />} />
          <Route path='/food-item' element={<FoodItemClicked />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
