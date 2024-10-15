'use client'
import React, {useState} from 'react';
import {MenuItem, Select} from "@mui/material";
import Link from "next/link";

const Create = () => {

    const [create, setCreate] = useState('create')

    const handleCreate = e => {
        setCreate(e.target.value)
    }

    return (
        <Select sx={{marginX: 1}} onChange={handleCreate} value={create}>
            <MenuItem value='create'>Create</MenuItem>
            <MenuItem value='create_categories'> <Link href='create-categories'>Create Categories</Link> </MenuItem>
            <MenuItem value='create_articles'> <Link href='create-articles'>Create Articles</Link> </MenuItem>
        </Select>
    );
};

export default Create;