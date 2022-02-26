import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import users from '../helpers/local-storage.json';
import Post from './Post';

const PostList = () => {
    const [type, setType] = useState('')

    const typeSelection = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <Box sx={ {ml:69 }} >
                <Box sx={{ fontSize: 16, margin: 1 }}>
                    Sort by:
                </Box>
                <Box sx={{ maxWidth: 240, margin: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={type}
                            label="Type"
                            onChange={typeSelection}
                        >
                        <MenuItem value={"Food"}>Food</MenuItem>
                        <MenuItem value={"Views"}>Views</MenuItem>
                        <MenuItem value={"People"}>People</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            
            <Box  sx={{ width: 0.5, mx: 70}}>
                {users.map(usr => {
                    return <Post user={usr}/>
                })}

            </Box>
        </>
    );
}

export default PostList;