
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketCard from './components/TicketCard'
import TaskStatus from './components/TaskStatus'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>


      <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Side - Ticket Cards */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TicketCard ></TicketCard>
            </div>

            {/* Right Side - Task Status */}
            <div className="md:col-span-1">
              <TaskStatus ></TaskStatus>
            </div>

          </div>
      </div>
      
      
      <Footer></Footer>
    </>
  )
}

export default App
