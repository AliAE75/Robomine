import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ProfileComponent() {

  const openOptions = (event) => {

    const optionsOut = document.querySelector('.options-out');

    if (event.target.classList.contains('options-in') || event.target.parentElement.classList.contains('options-in')) {
      if (optionsOut.classList.contains("open")) {
        optionsOut.classList.remove("open");
      }
      else {
        optionsOut.classList.add("open");
      }
    }
    else {
      if (!event.target.classList.contains('options-in')) {
        optionsOut.classList.remove("open");
      }
    }
  }


  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 50,
    height: 23,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(27px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#3772ff' : '#3772ff',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#3772ff',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 19,
      height: 19,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? 'rgb(50, 54,65)' : '#3772ff',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <div id='profile_layout' className='profile_layout'>
      <div className="profile_section">
        <div className="up_div">
          <div className="left_div">
            <h3 className="profile_title">Breanne Schinner</h3>
            <span className='profile-user-email' id='profile-user-email'>schinner@ui8.net</span>
            <span className="user-level" id="user-level-verified">level 2 verified</span>
          </div>
          <div className="right_div">
            <div class="cash_options">
              <span class="options-in" onClick={openOptions}><i>US</i><p>&nbsp;&nbsp;USA&nbsp;&nbsp;</p><i><BsChevronDown className='bs-chevron-down' /></i></span>
              <ul class="options-out">
                <li><i>US</i>&nbsp;&nbsp;USA</li>
                <li><i>US</i>&nbsp;&nbsp;USA</li>
                <li><i>US</i>&nbsp;&nbsp;USA</li>
                <li><i>US</i>&nbsp;&nbsp;USA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_div">
          <h3 className="profile_title">Features</h3>
          <span className="level-verified" id="level-1">level 1</span>
          <div className="level-1-features">
            <p>Deposit assets
              <span>
                <FormControlLabel className='checkBox'
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
              </span>
            </p>
            <p>Withdraw assets <span><p>Enabled $1,000,000/day</p></span></p>
            <p>Card purchases
              <span>
                <FormControlLabel className='checkBox'
                  control={<IOSSwitch sx={{ m: 1 }} />} />
              </span></p>
            <p>Bank deposit
              <span>
                <FormControlLabel className='checkBox'
                  control={<IOSSwitch sx={{ m: 1 }} />} />
              </span>
            </p>
          </div>
          <span className="level-verified" id="level-2">level 2</span>
          <div className="level-2-features">
            <p>Flat and Spot wallet
              <span>
                <FormControlLabel className='checkBox'
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
              </span>
            </p>
            <p>Margin wallet <span><p>Enabled 100x Leverage</p></span></p>
          </div>
        </div>
        <span className="btn-dashboard">Save settings</span>
      </div>
    </div>
  )
}
