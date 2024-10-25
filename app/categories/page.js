import React from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

const Categories = () => {

    const categories = [
        { name: 'Technology', articles: 15 },
        { name: 'Lifestyle', articles: 10 },
        { name: 'Business', articles: 8 },
        { name: 'Health', articles: 12 },
        { name: 'Travel', articles: 5 },
    ];


    return (
        <Box sx={{marginX: 30, marginY: 10}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 'bold',
                marginY: 5
            }}>Categories</Typography>


            <TableContainer sx={{marginTop: 8, marginBottom: 25}} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Category</strong></TableCell>
                        <TableCell><strong>Articles</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category, index) => (
                        <TableRow key={index}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.articles}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


        </Box>
    );
};

export default Categories;