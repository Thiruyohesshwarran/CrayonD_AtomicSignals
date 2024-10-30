import { Button ,Box} from '@mui/material';
import React from 'react';
import "./SignUpOptions.css";

function SignUpOptions({icon ,text}) {
  return (
    <div>
      <Button className='signupoption' sx={{textTransform:"none",
                                            bgcolor:"#F8F8F8",
                                            width:"100%",
                                            color:"#353448",
                                            fontSize:"13px",
                                            display:"flex",
                                            alignItems:"center",
                                            borderRadius: "4px",
                                            marginBottom:"15px",
                                            fontWeight:"bold"}}>
                        <Box sx={{position:"absolute",left:"10px"}}>{icon}</Box>Sign Up with {text}
        </Button>
    </div>
  )
}

export default SignUpOptions
