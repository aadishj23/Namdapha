import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/landingpage'
import ContactUs from './pages/contact-us'
import News from './pages/news'
import Fauna from './pages/Wildlife/fauna'
import Gallery from './pages/gallery'
import Navbar from './components/navbar'
import Donation from './pages/donation'
import Flora from './pages/Wildlife/flora'
import Activities from './pages/activities'
import Guidelines from './pages/Acts and Rules/guidelines'
import TouristActivities from './pages/Tourism/touristactivities'
import TouristGuide from './pages/Tourism/touristguides'
import TouristPermits from './pages/Tourism/touristpermits'
import Orders from './pages/Acts and Rules/orders'
import WildlifeProtectionAct from './pages/Acts and Rules/wildlife-protection-act'
import Budget from './pages/budget'
import AboutUs from './pages/aboutus'
import ErrorPage from './pages/errorpage'
import Footer from './components/footer'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <Router>
        <ScrollToTop />
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
            <Route path='/activities' element={<Activities />} />
            <Route path='/guidelines' element={<Guidelines />} />
            <Route path='/tourism-activities' element={<TouristActivities />} />
            <Route path='/tourist-guide' element={<TouristGuide />} />
            <Route path='/toursit-permits' element={<TouristPermits />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/wildlife-protection-act' element={<WildlifeProtectionAct />} />
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
