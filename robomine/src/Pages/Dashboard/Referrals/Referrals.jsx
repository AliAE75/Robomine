import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import ReferralsComponent from '../../../components/Dashboard/Layout/ReferralsComponent'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'


export default function Referrals() {
    return (
        <div className='layout_main_section'>
            <DashboardHeaderComponent />
            <DashboardComponent title='Referrals' />
            <ReferralsComponent />
            <Footer />
        </div>
    )
}
