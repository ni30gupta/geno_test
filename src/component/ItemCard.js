import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ItemCard({id,heading,incharge,email,total_employees}) {
    console.log(heading)
  return (
    <Card key={id} sx={{ width: 300,height:175, margin:5 , borderRadius:3}}>
      <div style={{height:'20%',padding:"0px 10px", background:'#5FB493', display:'flex', justifyContent:'space-between', alignItems:'center', color:'white'}}>
        <h4>{heading}</h4>
        <MoreHorizIcon/>
        </div>     
      <div style={{height:'60%', padding:10, display:'flex', flexDirection:'column',justifyContent:'space-evenly' }}>
        <Typography  sx={{fontWeight: 'bold'}}>Incharge : {incharge}</Typography>
        <Typography  sx={{fontWeight: 'bold'}}>Email-id : {email}</Typography>
        <Typography  sx={{fontWeight: 'bold'}}>Total Employee : {total_employees}</Typography>
        </div>     
    </Card>
  );
}
