import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { BsBoxArrowUp } from 'react-icons/bs'
import { BsKeyboard } from 'react-icons/bs'
import { BsLaptop } from 'react-icons/bs'
import { IoBarcodeSharp } from 'react-icons/io5'
import { RiLock2Line } from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function DashboardComponent(props) {
    return (
        <div className='layout_section'>
            <div className="dashboard_header" id="dashboard_header">
                <h1 className="dashboard_title" id="dashboard_title">{props.title}</h1>
                <div className="dashboard_address">
                    <p className="dashboard_main">Home</p>
                    <span> <AiOutlineRight /> </span>
                    <p id="dashboard_address">{props.title}</p>
                </div>
            </div>

            <div className="dashboard_sidebar" id="dashboard_sidebar">
                <div className="sidebar-items">
                <Link to={"/profile"}><i><IoPersonOutline /></i> Profile</Link>
                    <Link to={"/referrals"}><i><BsBoxArrowUp /></i> Referrals</Link>
                    <Link to={"/api-keys"}><i><BsKeyboard /></i> API keys</Link>
                    <div className="hr-3"></div>
                    <Link to={"/sessions"}><i><BsLaptop /></i> Sessions & login history</Link>
                    <Link to={"/2fa"}><i><IoBarcodeSharp /></i> 2FA</Link>
                    <Link to={"/change-password"}><i><RiLock2Line /></i> Change password</Link>
                </div>
            </div>
        </div>
    )
}
