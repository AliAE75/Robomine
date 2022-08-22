import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { IoFlashOutline } from 'react-icons/io5'
import { FiBell } from 'react-icons/fi'
import { WiDaySunny } from 'react-icons/wi'
import { CgProfile } from 'react-icons/cg'
import '../../../js/dashboardHeader'

export default function DashboardHeaderComponent() {

    const BoxOut = document.querySelector('.box-out');

    const openBoxOut = (event) => {
        if (event.target.classList.contains('box-in') || event.target.parentElement.classList.contains('box-in')) {
            if (BoxOut.classList.contains("open")) {
                BoxOut.classList.remove("open");
            }
            else {
                BoxOut.classList.add("open");
            }
        }
    }

    return (
        <div className='dashboard-header'>
            <div class="header-language-and-currency">
                <span class="box-in" onClick={openBoxOut}><span>EN</span>/<span>USD</span><i><BsChevronDown className='bs-chevron-down' /></i></span>
                <div className="box-out">
                    <ul class="language-out">
                        <li>Language</li>
                        <li className='selected'><i>US</i>English</li>
                        <li><i>VN</i>Vietnamese</li>
                        <li><i>RU</i>Russia</li>
                    </ul>
                </div>
            </div>
            <div className="energy"><IoFlashOutline className='energy-icon' /></div>
            <div className="bell"><FiBell className='bell-icon' /></div>
            <div className="wallet">Wallet</div>
            <div className="dark-mode"><WiDaySunny className='mode-icon' /></div>
            <div className="avatar"><CgProfile className='avatar-icon' /></div>
        </div>
    )
}
