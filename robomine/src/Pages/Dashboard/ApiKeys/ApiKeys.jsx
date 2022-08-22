import React from 'react'
import DashboardHeaderComponent from '../../../components/Dashboard/Layout/DashboardHeaderComponent'
import ApiKeysComponent from '../../../components/Dashboard/Layout/ApiKeysComponent'
import DashboardComponent from '../../../components/Dashboard/Profile/DashboardComponent'
import Footer from '../../Layout/Footer/Footer'

export default function ApiKeys() {
    return (
        <div className='layout_main_section'>
            <DashboardHeaderComponent />
            <DashboardComponent title='API keys' />
            <ApiKeysComponent />
            <Footer />
        </div>
    )
}
