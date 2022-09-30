import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Autocomplete, Button, TextField } from '@mui/material';

const Filter = () => {
    return (
        <Card sx={{ width: 260, height: 300, margin: 5, borderRadius: 3, padding: 2 }}>
            <div style={{ height: '20%', padding: "0px 5px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <h4>Filter</h4>
            </div>
            <hr style={{ opacity: 0.3, width: '95%' }} />
            <div style={{ height: '80%' }}>
                <Typography style={{marginBottom: 15}}>
                    By Locations
                </Typography>
                <Autocomplete                
                    id="free-solo-demo"
                    freeSolo
                    options={[].map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="Search By Location...    " />}
                />
                <div style={{ textAlign: 'center' }}>
                    <Button variant='contained' style={{ background: "#F2A733", width: '60%', position: 'relative', top: 60 }}>Apply</Button>

                </div>
            </div>
        </Card>
    )
}

export default Filter