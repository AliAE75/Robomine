import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import ProfileComponent from '../../../components/Dashboard/Layout/ProfileComponent'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'

export default function Profile() {
  return (
    <div className='layout_main_section'>
      <DashboardHeaderComponent />
      <DashboardComponent title='Profile info' />
      <ProfileComponent/>
      <Footer/>
    </div>
  )
}
