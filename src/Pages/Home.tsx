import { Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export interface userInfo{
    name: string,
    gender: string,
    lang: string
}

const Home:React.FC = () => {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState<userInfo>({name:"", gender:"Male", lang:"html" })
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]: value});
  }
  const handleSubmit = () => {
       history.push("/exam", userInfo);
       console.log(userInfo)
  }
    return (
        <div style={{marginTop:"200px"}}>
            <Container>
            <Typography variant="h4" sx={{margin: "20px 0"}}>User Details</Typography>
            <div>
                <TextField 
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField
                 sx={{width:"210px"}}
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleInputChange}
                  select
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </TextField>
            </div>
            <div>
                <TextField
                sx={{width:"210px"}}
                  name="lang"
                  value={userInfo.lang}
                  onChange={handleInputChange}
                  select
                >
                    <MenuItem value="html">html</MenuItem>
                    <MenuItem value="react">react</MenuItem>
                </TextField>
            </div>
            <Button 
              variant='contained'
              disabled={userInfo.name.length <1}
              onClick={handleSubmit}
            >Submit</Button>
            </Container>
        </div>
    );
};

export default Home;