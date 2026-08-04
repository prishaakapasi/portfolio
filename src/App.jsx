import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GraphicDesign from './pages/GraphicDesign'
import UXUI from './pages/UXUI'
import Development from './pages/Development'
import CaseStudy4 from './pages/CaseStudy4'
import CaseStudy5 from './pages/CaseStudy5'
import CaseStudy6 from './pages/CaseStudy6'
import CaseStudy7 from './pages/CaseStudy7'
import DevProject1 from './pages/DevProject1'
import DevProject2 from './pages/DevProject2'
import DevProject3 from './pages/DevProject3'
import DevProject4 from './pages/DevProject4'
import DevProject5 from './pages/DevProject5'
import DevProject6 from './pages/DevProject6'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/ux-ui" element={<UXUI />} />
          <Route path="/ux-ui/4" element={<CaseStudy4 />} />
          <Route path="/ux-ui/5" element={<CaseStudy5 />} />
          <Route path="/ux-ui/6" element={<CaseStudy6 />} />
          <Route path="/ux-ui/7" element={<CaseStudy7 />} />
          <Route path="/engineering" element={<Development />} />
          <Route path="/engineering/1" element={<DevProject1 />} />
          <Route path="/engineering/2" element={<DevProject2 />} />
          <Route path="/engineering/3" element={<DevProject3 />} />
          <Route path="/engineering/4" element={<DevProject4 />} />
          <Route path="/engineering/5" element={<DevProject5 />} />
          <Route path="/engineering/6" element={<DevProject6 />} />
          {/* old /development links redirect to /engineering */}
          <Route path="/development/*" element={<Navigate to="/engineering" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App