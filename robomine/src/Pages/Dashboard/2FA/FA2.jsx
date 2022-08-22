import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import FA2Component from '../../../components/Dashboard/Layout/FA2Component'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'

export default function FA2() {
  return (
    <div className='layout_main_section'>
      <DashboardHeaderComponent />
      <DashboardComponent title='2FA' />
      <FA2Component />
      <Footer />
    </div>
  )
}