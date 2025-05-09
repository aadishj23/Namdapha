import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { loggedin } from './store/atoms/loggedin'  // Import the loggedin atom
import LandingPage from '@/pages/landingpage'
import ContactUs from './pages/contact-us'
import News from './pages/news'
import Fauna from './pages/Wildlife/fauna'
import Gallery from './pages/gallery'
import Navbar from './components/navbar'
import Donation from './pages/donation'
import Flora from './pages/Wildlife/flora'
import Activities from './pages/activities'
import Dashboard from './pages/dashboard'
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
import Forgotpassword from './pages/forgotpassword'
import AdminLogin from './pages/adminlogin'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const hideNavbarFooter = location.pathname.startsWith('/admin')

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <div className='transition-colors duration-300 font-sans'>
        {children}
      </div>
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

// Protected Route Component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const Loggedin = useRecoilValue(loggedin)

  return Loggedin ? children : <Navigate to="/admin" replace />
}

const App = () => {
  return (
    <Router>
      <RecoilRoot>
        <ScrollToTop />
        <Layout>
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
            <Route path='/tourist-permits' element={<TouristPermits />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/wildlife-protection-act' element={<WildlifeProtectionAct />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/admin/forgot-password' element={<Forgotpassword />} />
            
            {/* Protected Route for Dashboard */}
            <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </Router>
  )
}

export default App