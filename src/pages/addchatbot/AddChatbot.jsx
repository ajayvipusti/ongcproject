import React, { useEffect } from 'react'
import { useState , useRef} from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AiFillCaretDown , AiFillCaretUp } from 'react-icons/ai';
import Questionupload from '../../components/elements/Questionupload';


const AddChatbot = () => {

    const content1 = "[Category , Subcategory , Question , Answer]";
    const title = "[Question Data]"
    const [file,setFile] = useState(null)
    const formRef = useRef()

    const [uploadVisible , setUploadVisible] = useState(true);
    const [formVisible, setFormVisible] = useState(false);
    
    // const [data, setData] = useState([]);
    const navigate = useNavigate();
   
    const [formData, setFormData] = useState({
        category: '' ,
        subcategory: '' ,
        question: '',
        answer: '' ,
      });

    
    const handleFormVisible = () =>{
        setFormVisible(!formVisible);
        setUploadVisible(false);
    }

    const handleUploadVisible = () =>{
        setUploadVisible(!uploadVisible);
        setFormVisible(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Value:', formData);
        toast.success('Updated Successfull')

        axios.post('http://localhost:4000/chatbot' , formData)
        .then((res) => {
          console.log(res);
          // setData((prevData) => [res.data, ...prevData]);
          navigate('/admin/chatbot');
        })
        .catch(err => console.log(err))

        // onSubmit(formData);
       
        

        // setFormData({
        //   category: '',
        //   subcategory: '',
        //   question: '',
        //   answer: '',
        // });
      };

      const handleFileChange = (event) => {
        console.log(event.target)
        setFile(event.target.files[0]);
      };

      const handleUpload  = async()=>{
        console.log('images',file)
        if(file !== null ||undefined||"")
        {
            // console.log('file',file)
            try {
                const formData= new FormData()
                formData.append('import_file',file)
                const request = await axios.post(`${import.meta.env.VITE_APP_API_URL}csat/import`,formData,{
                    headers:{
                        'Authorization':'Bearer '+ token,
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'js'
                    }
                })
                const response = await request.data
                if(response?.code ===200){
                    toast.success('Upload Succesfull..!')
                    setFile(null);
                    formRef.current.reset();
                    // const fileInput = document.getElementById('file-input');
                    // if (fileInput) {
                    //   fileInput.value = '';
                    // }
                }
                if(response?.error){
                    const errors = Object.values(response?.error)
                    console.error('Errors', errors)
                    errors.map((x) => (
                      toast.error(`${x}`)
                    ))
                  }
                
            } catch (error) {
                console.error('error', error)
                    if (error?.response?.data?.error) {
                    const errors = Object.values(error?.response?.data?.error)
                    console.error('Errors', errors)
                    errors.map((x) => (
                      toast.error(`${x}`)
                    ))
                    }
                    if (error?.response?.data?.message) {
                    if (error?.response?.data?.error) {
                      const errors = Object.values(error?.response?.data?.error)
                      console.error('Errors', errors)
                      errors.map((x) => (
                        toast.error(`${x}`)
                      ))
                    }
                    if (error?.response?.data?.data) {
                      toast.error(`${error?.response?.data?.data}`)
                    }
                    }
                    // if (error?.response?.data?.data)
            }
        
        }
    }


  return (
    <div className='bg-white w-full flex flex-col p-6 py-4 rounded-sm shadow-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl max-w-7xl'>
           <ToastContainer
            position='top-right'
        />
         <div className='flex items-center'>
           <span className='text-lg font-medium uppercase pl-2'>Add questions</span>
        </div>
            <div>
                <div className="bg-blue-950 h-8 mt-6 text-white flex justify-between"  onClick={handleUploadVisible}>
                  <p className='p-1 px-4'>Bulk Upload</p>
                  <div className='mt-1 mr-2'>
                    {uploadVisible ? (
                      <AiFillCaretDown size={22} />

                    ) : (
                      <AiFillCaretUp size={22} />
                    )}
                  </div>

               </div>
               {uploadVisible && (
                <div className="bg-gray-100 p-4 mt-2 "> 
                
                 <Questionupload title={title} content={content1} formRef={formRef} handleFileChange={handleFileChange} handleUpload={handleUpload} setFile={setFile} file={file}/>
                
                </div>
               )}
               
            </div>
       
          <div>
              <div className="bg-blue-950 h-8 mt-3 text-white flex justify-between"  onClick={handleFormVisible}>
                <p className='p-1 px-4'>Single Upload</p>
                <div className='mt-1 mr-2'>
                    {formVisible ? (
                      <AiFillCaretDown size={22}/>

                    ) : (
                      <AiFillCaretUp size={22}/>
                    )}
                  </div>
              </div>
              

              {formVisible && (
                    <div className="bg-gray-100 p-4 mt-2 ">
                    <Container maxWidth="sm">
                            <Typography variant="h4" gutterBottom>
                                Add Question
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                size='small'
                                sx={{
                                       "& .MuiFormLabel-root": {
                                          color: 'black'
                                        },
                                    }}
                                />
                                <TextField
                                label="Subcategory"
                                name="subcategory"
                                value={formData.subcategory}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                size='small'
                                sx={{
                                       "& .MuiFormLabel-root": {
                                          color: 'black'
                                        },
                                    }}
                                />
                                <TextField
                                label="Question"
                                name="question"
                                type="text"
                                value={formData.question}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                size='small'
                                sx={{
                                       "& .MuiFormLabel-root": {
                                          color: 'black'
                                        },
                                    }}
                                />
                                <TextField
                                label="Answer"
                                name="answer"
                                multiline
                                rows={4}
                                value={formData.answer}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                size='small'
                                sx={{
                                       "& .MuiFormLabel-root": {
                                          color: 'black'
                                        },
                                    }}
                                />
                                <Button type="submit" variant="contained" color="primary">
                                Submit
                                </Button>
                            </form>
                            </Container>

                       
                    </div>
                )}

          </div>
    </div>
  )
}

export default AddChatbot