
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TaskStatus from './components/TaskStatus'
import CustomerTickets from './components/CustomerTickets'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'


function App() {
  const [tickets, setTickets] = useState([])
  const [tasks, setTasks] = useState([])
  const [resolved, setResolved] = useState([])

  useEffect(() => {
    fetch('/Data/tickets.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Error fetching tickets:', error));
  }, [])

  const inProgressTasks = tasks.length
  const resolvedTickets = resolved.length

  function handleSelect(ticket) {
    if (tasks.find(t => t.id === ticket.id) || resolved.find(r => r.id === ticket.id)) {
      toast.info('Ticket already in task list or resolved')
      return
    }
    setTasks(prev => [...prev, ticket])
    toast.success(`Added "${ticket.title}" to Task Status`)
  }

  function handleComplete(ticket) {
    setTasks(prev => prev.filter(t => t.id !== ticket.id))
    setResolved(prev => [...prev, ticket])
    setTickets(prev => prev.filter(t => t.id !== ticket.id))
    toast.success(`Marked "${ticket.title}" as resolved`)
  }

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgressTasks} resolvedCount={resolvedTickets} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold justify-items-start text-gray-800 mb-8  border-gray-300 pb-2">
          Customer Tickets
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Tickets */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map(ticket => (
              <CustomerTickets key={ticket.id} ticket={ticket} onSelect={handleSelect} />
            ))}
          </div>

          {/* Right Side: Task Status */}
          <div className="md:col-span-1">
            <TaskStatus tasks={tasks} onComplete={handleComplete} resolved={resolved} />
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App