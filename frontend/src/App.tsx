import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/landingpage'
import ContactUs from './pages/contact-us'
import News from './pages/news'
import Fauna from './pages/Wildlife/fauna'
import Gallery from './pages/gallery'
import Navbar from './components/navbar'
import Donation from './pages/donation'
import Flora from './pages/Wildlife/flora'
import Tourism from './pages/tourism'
import AntiPoachingActivities from './pages/Activities/AntiPoachingActivities'
import TigerMonitoringWorks from './pages/Activities/TigerMonitoringWorks'
import WildlifeDaysCelebration from './pages/Activities/WildlifeDaysCelebration'
import NamdaphaButterflyMeet from './pages/Activities/butterflymeet'
import OutreachActivities from './pages/Activities/outreach'
import EcoDevelopmentActivities from './pages/Activities/eco-development'
import Expeditions from './pages/Activities/expeditions'
import Guidelines from './pages/Acts and Rules/guidelines'
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
            <Route path='/tourism' element={<Tourism />} />
            <Route path='/anti-poaching-activities' element={<AntiPoachingActivities />} />
            <Route path='/tiger-monitoring-works' element={<TigerMonitoringWorks />} />
            <Route path='/wildlife-days-celebration' element={<WildlifeDaysCelebration />} />
            <Route path='/namdapha-butterfly-meet' element={<NamdaphaButterflyMeet />} />
            <Route path='/outreach-activities' element={<OutreachActivities />} />
            <Route path='/eco-development-activities' element={<EcoDevelopmentActivities />} />
            <Route path='/expeditions' element={<Expeditions />} />
            <Route path='/guidelines' element={<Guidelines />} />
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
