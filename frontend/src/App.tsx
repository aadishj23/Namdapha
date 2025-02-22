import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/landingpage'
import ContactUs from './pages/contact-us'
import News from './pages/news'
import Fauna from './pages/fauna'
import Gallery from './pages/gallery'
import Navbar from './components/navbar'
import Donation from './pages/donation'
import Flora from './pages/flora'

const App = () => {
  return (
    <Router>
        <Navbar />
        <div className='transition-colors duration-300 font-sans'>
            <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/news' element={<News />} />
            <Route path='/fauna' element={<Fauna />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/flora' element={<Flora />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
