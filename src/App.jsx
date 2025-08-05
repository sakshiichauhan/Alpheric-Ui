// Importing Pages
import HomePage from './Pages/HomePage'
import Navbar from './Layouts/Navbar'
import Design from './Pages/Design'
import Questionaire from './Pages/Questionaire'
import Hire from "./Pages/Hire"
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Vision from './Pages/VisionIntoReality/Vision'
import Next from './Pages/VisionIntoReality/Next'
import CustomerPage from "./Pages/CustomerPage"
import Pilotpage from './Pages/Pilot/PilotPage'
import SolutionPage from './Pages/Solutions/SolutionPage'
import BriefPage from './Pages/Brief/BriefPage'
import Fab from "./Components/Fab"
import Customer from './Pages/Customer'

function App() {
  return (
    <>
      <Navbar />
      <Fab />
      <div>
        <HomePage />
        <Design />
        <Questionaire />
        {/* <Customer/> */}
        {/* <CustomerPage /> */}
        <SolutionPage />
        <Vision />
        <Pilotpage />
        <Next />
        <BriefPage />
        <Hire />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
