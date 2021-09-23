// import { response } from "express";

import React, { useState } from "react";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
 


const Intial =()=>
{ const [url,setUrl]=useState(null) // for url
    function setUpQuery(val) { //function creates the full url for api call
          const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';//First part of the url
          const parameters = {
            url: encodeURIComponent(val.target.value)
          };
          let query = `${api}?`;
          for (let key in parameters) {
            query += `${key}=${parameters[key]}`;
          }
          setUrl(query);
        }
        
    const [data,setdata]= useState([]);//set data from api
    const apiGet=()=>{
     fetch(url)
     .then((response)=>response.json()
     .then((json)=>setdata(json)));

    }
    
    
  
    return(
        <>
       
       <Box sx={{ minWidth: 275 }}>
       <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Link of the Website
      </Typography>
      {/* <input type="url" onChange={setUpQuery}/>  */}
      <TextField id="outlined-basic" type="url" onChange={setUpQuery} label="Link" variant="outlined" />
      <Stack spacing={2} direction="row">
    <Button variant="contained" onClick={apiGet} sx={{ my: '10px'}} >Submit</Button>
    </Stack ></CardContent>
      </React.Fragment>
    </Box>
     
  
    <React.Fragment>
    <CardContent>
    <Typography variant="h5" component="div"justifyContent="center">
      Highlights
      </Typography>
      
      <Typography variant="body2">
        Search Result For: {data.id}
        <br/>
        {/* Category:{data.loadingExperience.category} */}
      </Typography>


    </CardContent>
    </React.Fragment>
    <Typography variant="h5" component="div"justifyContent="center">
     Complete Info about he website is as follow:
      </Typography>
    {/* <p>{data.id}</p> */}
    <pre>{JSON.stringify(data,null,2)}</pre>
    </>
    );
}
export default Intial;
