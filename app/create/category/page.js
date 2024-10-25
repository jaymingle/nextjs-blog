import React, {useState} from 'react';
import {
    Box, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    Button
} from "@mui/material";
import {Edit, Delete}from '@mui/icons-material';

const CreateCategory = () => {

    const [categories, setCategories] = useState([
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Lifestyle' },
        { id: 3, name: 'Business' },
    ]);


    return (
        <Box sx={{marginY: 5, marginX: 30}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                marginY: 4,
            }}>Create New Category</Typography>

            <Box
                component="form"
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '2rem',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Category Name"
                    variant="outlined"
                    fullWidth
                    required
                />
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </Box>

            {/* Categories Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Category Name</strong></TableCell>
                            <TableCell><strong>Edit</strong></TableCell>
                            <TableCell><strong>Delete</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <Edit />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton color="secondary">
                                        <Delete/>
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

export default CreateCategory;