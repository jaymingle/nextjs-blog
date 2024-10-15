import React, {useState} from 'react';
import {MenuItem, Select} from "@mui/material";
import Link from "next/link";

const Create = () => {
    return (
        <Select>
            <MenuItem>Create</MenuItem>
            <MenuItem> <Link href='create-categories'>Create Categories</Link> </MenuItem>
            <MenuItem> <Link href='create-articles'>Create Articles</Link> </MenuItem>
        </Select>
    );
};

export default Create;