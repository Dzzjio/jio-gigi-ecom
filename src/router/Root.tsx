import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Root = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <ToastContainer/>
      <Header />
      <div style={{maxWidth: '70vw', margin: '0 auto', flex: '1', minHeight: '80vh'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
