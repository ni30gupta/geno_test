import React from 'react'
import logo from '../logo.png';

const Sidebar = () => {
    return (
        <div style={{ height: '100%' }}>
            <div style={{ textAlign: 'center' }}>
                <img width={200} src={logo} alt="" />
            </div>
            <div style={{marginTop:50, display:'flex', justifyContent:'space-between', flexDirection:'column', alignItems:'center', height:'80%'}}>
                <div>
                    <h3>My Apps</h3> 
                    <h3>Resources</h3>              
                    </div>
                <div>
                    <h3>My Organisation</h3>
                    <h3>Settings</h3>
                    <h3>Logout</h3>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar