'use client'
import React, {useState} from 'react';
import {MenuItem, Select} from "@mui/material";

const ChangeLanguage = () => {

    const [language,setLanguage] = useState('original')
    const handleLanguageChange = e => {
        setLanguage(e.target.value)
        console.log(language)
    }

    return (
        <Select sx={{marginX: 2, paddingY: 0.1}} onChange={handleLanguageChange} value={language}>
            <MenuItem value='original'>Language 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇪🇸🇨🇳🇫🇷</MenuItem>
            <MenuItem value='english'>English 🏴󠁧󠁢󠁥󠁮󠁧󠁿</MenuItem>
            <MenuItem value='french'>French 🇫🇷</MenuItem>
            <MenuItem value='spanish'>Spanish 🇪🇸</MenuItem>
            <MenuItem value='chinese'>Chinese 🇨🇳</MenuItem>
        </Select>
    );
};

export default ChangeLanguage;