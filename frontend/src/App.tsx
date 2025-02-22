import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/landingpage'
import ContactUs from './pages/contact-us'
import News from './pages/news'
import Fauna from './pages/fauna'
import Gallery from './pages/gallery'
import Navbar from './components/navbar'
import Donation from './pages/donation'
import Flora from './pages/flora'
import Packages from './pages/packages'
import Accommodations from './pages/accomodations'
import Safari from './pages/safari'
import Trekking from './pages/trekking'
import Guidelines from './pages/guidelines'
import Regulations from './pages/regulations'
import Budget from './pages/budget'
import AboutUs from './pages/aboutus'
import ErrorPage from './pages/errorpage'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
        <Navbar />
        <div className='transition-colors duration-300 font-sans'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/news' element={<News />} />
            <Route path='/flora' element={<Flora />} />
            <Route path='/fauna' element={<Fauna />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/accommodations' element={<Accommodations />} />
            <Route path='/safari' element={<Safari />} />
            <Route path='/trekking' element={<Trekking />} />
            <Route path='/guidelines' element={<Guidelines />} />
            <Route path='/regulations' element={<Regulations />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  )
}

export default App
