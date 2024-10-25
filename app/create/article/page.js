import React from 'react';
import {Box, Typography} from "@mui/material";

const CreateArticle = () => {
    return (
        <Box sx={{marginY: 5, marginX: 30}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                marginY: 4,
            }}>Create Category</Typography>

        </Box>
    );
};

export default CreateArticle;