import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const Root = () => {
  return (
    <div>
      <Header />
      <div style={{maxWidth: '70vw', margin: '0 auto'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
