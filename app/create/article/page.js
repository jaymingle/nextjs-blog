'use client'

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

const CreateArticle = () => {

    // Dummy categories for the select dropdown
    const categories = ['Technology', 'Lifestyle', 'Business', 'Health', 'Travel'];

    // Dummy article data
    const [articles, setArticles] = useState([
        { id: 1, title: 'Understanding React', date: '2024-10-12', category: 'Technology' },
        { id: 2, title: 'Healthy Living Tips', date: '2024-10-10', category: 'Lifestyle' },
    ]);

    return (
        <Box sx={{marginY: 5, marginX: 30}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                marginY: 4,
            }}>Create Category</Typography>


            {/* Create Article Form */}
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                }}
                noValidate
                autoComplete="off"
            >
                {/* Title Field */}
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    required
                />

                {/* Category Select */}
                <Select
                    label="Category"
                    fullWidth
                    required
                    defaultValue=""
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        Select Category
                    </MenuItem>
                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>

                {/* Article Content Textarea */}
                <TextField
                    label="Article"
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                    required
                />

                {/* Image Upload */}
                <Box>
                    <Typography variant='h3' sx={{fontSize: '14px', fontWeight: 'bolder'}}>Upload an Image</Typography>
                    {/*<label htmlFor="upload-image">*/}
                    {/*    <Input accept="image/*" id="upload-image" type="file" />*/}
                    {/*    <Button variant="contained" component="span">*/}
                    {/*        Select Image*/}
                    {/*    </Button>*/}
                    {/*</label>*/}
                </Box>

                {/* Submit Button */}
                <Button variant="contained" color="primary" size="large">
                    Create Article
                </Button>
            </Box>

            {/* Articles Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell><strong>Date</strong></TableCell>
                            <TableCell><strong>Category</strong></TableCell>
                            <TableCell><strong>Edit</strong></TableCell>
                            <TableCell><strong>Delete</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell>{article.id}</TableCell>
                                <TableCell>{article.title}</TableCell>
                                <TableCell>{article.date}</TableCell>
                                <TableCell>{article.category}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default CreateArticle;