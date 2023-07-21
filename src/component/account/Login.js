import React, { useState } from 'react';
//import Box from '@mui/material/Box';
import Logo from '../../image/logo.png'
import { TextField,Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Box1= styled(Box)`

width:400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Box2= styled(Box)`

padding:25px 35px;
display: flex;
flex:1;
flex-direction:column;
& >div, & >button {
    margin-top: 20px;
}
`;

const SingInbutton= styled(Button)`
`

const SingUpbutton= styled(Button)`
`

const Image=styled('img')({
    width: 100,
    margin: 'auto',
    display:'flex',
    padding:'50px 0 0'

})
const Login = () => {

    const [account, toggleAccount]=useState('login')
    const toggleSingUpIn=()=>{
        account==='singup' ? toggleAccount('login') : toggleAccount('singup');
        
    }
    return (
       <Box1>
        <Box>
        <Image src={Logo} alt=''/>
        {  
        account==='login'?
             <Box2>
             <TextField id="standard-basic" label="Enter Email" variant="standard" />
           <TextField id="standard-basic" label="Enter Password" variant="standard" />
           <Button variant="contained" style={{backgroundColor:'#3CB371'}}>Log in</Button>
           <Typography style={{textAlign:'center'}}>OR</Typography>
           <SingInbutton onClick={()=>toggleSingUpIn()} style={{color:'#3CB371'}}>Create an account</SingInbutton>
             </Box2>
             :
             <Box2>
             <TextField id="standard-basic" label="Enter name" variant="standard" />
             <TextField id="standard-basic" label="Enter Email" variant="standard" />
           <TextField id="standard-basic" label="Enter Password" variant="standard" />
           <Button variant="contained" style={{backgroundColor:'#3CB371'}}>Sign Up</Button>
           <Typography style={{textAlign:'center'}}>OR</Typography>
           <SingUpbutton onClick={()=>toggleSingUpIn()} style={{color:'#3CB371'}}>Already have an account</SingUpbutton>
           
             </Box2>
        }
         
        </Box>
       </Box1>
    );
};

export default Login;