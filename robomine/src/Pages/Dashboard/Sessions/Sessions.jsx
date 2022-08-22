import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import SessionsComponent from '../../../components/Dashboard/Layout/SessionsComponent'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'

export default function Sessions() {
    return (
        <div className='layout_main_section'>
            <DashboardHeaderComponent />
            <DashboardComponent title='Sessions & login history' />
            <SessionsComponent />
            <Footer />
        </div>
    )
}
