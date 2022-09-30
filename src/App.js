import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import ItemCard from './component/ItemCard';
import { Button, Modal, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Filter from './component/Filter';
import CloseIcon from '@mui/icons-material/Close';

const fakeData = [
  {
    id: 1,
    heading: "Cake Division",
    incharge: "Mohit sharam",
    email: "mohit.sh@gmail.com",
    total_employees: 10
  },
  {
    id: 2,
    heading: "Pizza Division",
    incharge: "Udit Narayan",
    email: "udit.sh@gmail.com",
    total_employees: 20
  },
  {
    id: 3,
    heading: "Cake Division",
    incharge: "Payal sharam",
    email: "payal.sh88@gmail.com",
    total_employees: 27
  }
]

export default function App() {
  const [open, setOpen] = React.useState(false)
  const [data, setData] = useState(fakeData)
  const [newItem, setNewItem] = useState({
    id: null,
    heading: null,
    incharge: null,
    email: null,
    total_employees: null,
  })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
  };
  const cross = {
    position: 'absolute',
    top: -45,
    right: '0px',
    width: '30px',
    height: '30px',
    background: 'white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
  const inputStyle = {
    padding: "10",
    border: "none",
    padding: "13px",
    outline: "none",
    background: "#E4ECF7",
    borderRadius: "10px",
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (e) => {
    setNewItem({...newItem,[e.target.name]:e.target.value})
  }
  const addItem = () => {
    setData([...data, newItem])
    setNewItem({})
    handleClose()
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div style={{ height: '10%' }}><Navbar /></div>
          <Grid xs={12} style={{ height: '90%', background: '#E4ECF7', display: 'flex', }}>
            <Grid xs={9} style={{ padding: 20 }}>
              <div>
                <h3>{"<--- Century > Divisions"}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                  data.map(item => <ItemCard {...item} />)
                }
              </div>
            </Grid>
            <Grid xs={3} style={{ marginTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 30px' }}>
              <Button onClick={() => setOpen(true)} startIcon={<AddIcon />} variant="contained" style={{ width: '80%', borderRadius: 6, background: '#E96735' }}>Add New </Button>
              <Filter />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Section
          </Typography>
          <div style={{ opacity: 0.3, position: 'relative', left: -30, width: "105%" }}>
            <hr />
          </div>
          <div>
            <p>Devision Name</p>
            <input name="heading" type='text' onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>Incharge</p>
              <input name="incharge" type='text' onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <p>Email</p>
              <input name="email" type='text' onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <p>Employee</p>
              <input name="total_employees" type='text' onChange={handleChange} style={inputStyle} />
            </div>
          </div>
          <div style={{ opacity: 0.3, position: 'relative', left: -30, width: "109%", marginTop: 30, boxShadow: "rgba(0, 0, 0, 0.24) 3px -18px 41px -6px" }}>
            <hr />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: "10px 0px" }}>
            <Button>Cancel</Button>
            <Button onClick={addItem} variant='contained' style={{ background: "#E96735", }}>Add</Button>
          </div>
          <div style={cross} onClick={handleClose}>
            <CloseIcon />
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
