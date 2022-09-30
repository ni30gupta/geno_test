import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
            <div>
                <h2>{"My Apps > Client > Sites"}</h2>
            </div>
            <div style={{display:'flex', width:150,justifyContent: 'space-around',marginRight:30 }}>
               <div style={{padding:12, borderRadius:'50%', background:'#E4ECF7'}}>
               <PersonOutlineOutlinedIcon />
               </div>
               <div style={{padding:12  , borderRadius:'50%', background:'#E4ECF7'}}>
                <NotificationsNoneOutlinedIcon />
               </div>
            </div>
        </div>
    )
}

export default Navbar