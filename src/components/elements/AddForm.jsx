
import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';


const AddForm = ({ fetchData }) => {

  // const [isFormVisible, setFormVisibility] = useState(true);
  

  const [inputValue, setInputValue] = useState({
    id_c: '',
    entity_type: '',
    display_label: '',
    phase_id: '',
    category_c: '',
    impmcategory_c: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Value:', inputValue);
    toast.success('Updated Successfull')
   
    axios.post('http://localhost:3000/users' , inputValue)
    .then((res) => {
      console.log(res);
      // window.location.reload();
      // fetchData((prevData) => [inputValue, ...prevData]);
      
      fetchData((prevData) => [inputValue, ...prevData]);
      
      // fetchData();
    })
    .catch(err => console.log(err))
    
  };

  return (
    <>
    {/* {isFormVisible && (  */}
    <Container maxWidth="sm" sx={{marginTop:'2rem' , marginLeft:'-1.5rem' , marginBottom:'-2.2rem'}}>
       <ToastContainer
            position='top-right'
        />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="ID"
              name="id_c"
              value={inputValue.id_c}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontSize: '14px',
                  fontFamily: 'unset'
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Entity Type"
              name="entity_type"
              value={inputValue.entity_type}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontSize: '14px',
                  fontFamily: 'unset'
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Display Label"
              name="display_label"
              value={inputValue.display_label}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontSize: '14px',
                  fontFamily: 'unset'
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phase ID"
              name="phase_id"
              value={inputValue.phase_id}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontSize: '14px',
                  fontFamily: 'unset'
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Category"
              name="category_c"
              value={inputValue.category_c}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontFamily: 'unset',
                  fontSize: '14px'
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="IMPM Category"
              name="impmcategory_c"
              value={inputValue.impmcategory_c}
              onChange={handleInputChange}
              required
              variant="filled"
              inputProps={{ style: { height: '10px' , padding: '13px'} }}
              sx={{
                '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                  display: 'none', 
                },
                "& .MuiFormLabel-root": {
                  marginTop: '-7px',
                  fontSize: '14px',
                  fontFamily: 'unset'
                },
              }}
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" type="submit" sx={{marginTop:'2rem' , marginBottom:'3.2rem'}}>
          Submit
        </Button>
      </form>
    </Container>
    {/* ) } */}
    </>
  );
};

export default AddForm;
