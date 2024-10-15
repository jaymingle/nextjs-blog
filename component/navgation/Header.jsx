import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import ChangeLanguage from "@/component/navgation/ChangeLanguage";
import {MenuItem, Select} from "@mui/material";
import Create from "@/component/navgation/Create";

const Header = () => {

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                {/* Logo on the left */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" passHref>
                        <h3 style={{ textDecoration: 'none', color: 'inherit' }}>MyBlog</h3>
                        {/*<a style={{ textDecoration: 'none', color: 'inherit' }}>MyBlog</a>*/}
                    </Link>
                </Typography>

                {/* Links on the right */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link href="/articles" passHref>
                        <Button color="inherit">Articles</Button>
                    </Link>
                    <Link href="/categories" passHref>
                        <Button color="inherit">Categories</Button>
                    </Link>
                    <Link href="/about-us" passHref>
                        <Button color="inherit">About Us</Button>
                    </Link>
                    <Link href="/contact-us" passHref>
                        <Button color="inherit">Contact Us</Button>
                    </Link>
                    <Link href="/create-article" passHref>
                        <Button color="inherit">Create Article</Button>
                    </Link>
                    {/*<Button color="inherit">Change Language</Button>*/}
                </Box>
                <Create/>
                <ChangeLanguage/>

            </Toolbar>
        </AppBar>
    );
};

export default Header;
