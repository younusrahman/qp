import React from 'react'
import AdminPanel from 'component/Admin/AdminPanel'
import { Link , Outlet} from 'react-router-dom'

export default function AdminPage() {
  return (
    <div>
        <AdminPanel/>
        <Outlet/>
        AdminPage</div>
  )
}
