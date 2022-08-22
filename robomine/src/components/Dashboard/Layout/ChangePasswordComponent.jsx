import React from 'react'

export default function ChangePasswordComponent() {
  return (
    <div id='change-password_layout' className='change-password_layout'>
      <div className="change-password_section">
        <h1>New password</h1>
        <form action="" method="get">
            <label htmlFor="">email</label>
            <input type="email" name="email" id="change-password-email" />
            <label htmlFor="">new password</label>
            <input type="password" name="new-password" id="change-password-new" placeholder='Password' />
            <label htmlFor="">confirm password</label>
            <input type="password" name="confirm-password" id="change-password-confirm " placeholder='Password' />
            <input type="submit" value="Change password" className='btn-change-password' />
        </form>
      </div>
    </div>
  )
}
