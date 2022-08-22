import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import ChangePasswordComponent from '../../../components/Dashboard/Layout/ChangePasswordComponent'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'

export default function ChangePassword() {
    return (
        <div className='layout_main_section'>
            <DashboardHeaderComponent />
            <DashboardComponent title='Change password' />
            <ChangePasswordComponent />
            <Footer />
        </div>
    )
}
