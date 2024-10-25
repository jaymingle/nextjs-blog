import React from 'react';
import {Box, Typography} from "@mui/material";

const Categories = () => {

    const categories = [
        { name: 'Technology', articles: 15 },
        { name: 'Lifestyle', articles: 10 },
        { name: 'Business', articles: 8 },
        { name: 'Health', articles: 12 },
        { name: 'Travel', articles: 5 },
    ];


    return (
        <Box>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 'bold',
                marginY: 5
            }}>Categories</Typography>



        </Box>
    );
};

export default Categories;