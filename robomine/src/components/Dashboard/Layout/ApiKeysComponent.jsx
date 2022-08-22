import React from 'react'

export default function ApiKeysComponent() {
    return (
        <div id='apiKeys_layout' className='apiKeys_layout'>
            <div className="apiKeys_section">
                <p>Enable API access on your account to generate keys.</p>
                <h1>API Access is <span>Disabled</span></h1>
                <p className='user-email-address'><i>mail-icon</i> <span className='user-email'>schinner@ui8.net</span></p>
                <h2>Enable API keys</h2>
                <p className='p-3'>Enter your password and 2FA code to Enable the API keys.</p>
                <form action="" method="get">
                    <div className="pass">
                        <label htmlFor="">PASSWORD</label>
                        <input type="password" name="password" id="api-access-password" className="api-access-password" placeholder='Password' />
                    </div>
                    <div className="fa2">
                        <label htmlFor="">2FA CODE</label>
                        <input type="text" name="text" id="api-access-code" className="api-access-code" />
                    </div>
                    <input className='btn-enable-api' type="submit" value="Enable API keys" />
                </form>
            </div>
        </div>
    )
}
