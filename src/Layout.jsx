import React from 'react'
import SideBar from './components/side_bar/SideBar'
import AdminPage from './pages/admin_page/AdminPage'
const LayoutPages = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <AdminPage />
    </div>
  )
}

export default LayoutPages
