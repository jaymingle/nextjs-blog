import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import Create from "@/component/navgation/Create";
import ChangeLanguage from "@/component/navgation/ChangeLanguage";

const Footer = () => {

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '2rem 0',
                mt: 'auto',
                borderTop: '1px solid #e0e0e0',
                marginX: 2
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                {/* Column 1: Logo */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" component="div">
                        <Link href='/'>MyBlog</Link>
                    </Typography>
                </Grid>

                {/* Column 2: Article Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{paddingY: 2,}} variant="h6" component="div">
                        Articles
                    </Typography>
                    <Link
                        href="/articles"
                        underline="none"
                        color="inherit"
                        sx={{
                            '&:hover': {
                                color: '#1976d2', // Change this to your desired hover color
                            },
                        }}
                    >
                        Recent Articles
                    </Link>
                    <br />
                    <Link
                        href="/popular-articles"
                        underline="none"
                        color="inherit"
                        sx={{
                            '&:hover': {
                                color: '#1976d2', // Change this to your desired hover color
                            },
                        }}
                    >
                        Popular Articles
                    </Link>
                </Grid>

                {/* Column 3: Categories Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{paddingY: 2,}} variant="h6" component="div">
                        Categories
                    </Typography>
                    <Link
                        href="/category/tech"
                        underline="none"
                        color="inherit"
                        sx={{
                            '&:hover': {
                                color: '#1976d2', // Change this to your desired hover color
                            },
                        }}
                    >
                        Tech
                    </Link>
                    <br />
                    <Link
                        href="/category/lifestyle"
                        underline="none"
                        color="inherit"
                        sx={{
                            '&:hover': {
                                color: '#1976d2', // Change this to your desired hover color
                            },
                        }}
                    >
                        Lifestyle
                    </Link>
                    <br />
                    <Link
                        href="/category/business"
                        underline="none"
                        color="inherit"
                        sx={{
                            '&:hover': {
                                color: '#1976d2', // Change this to your desired hover color
                            },
                        }}
                    >
                        Business
                    </Link>
                </Grid>

                {/* Column 4: Language and Create Article */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{paddingY: 2,}} variant="h6" component="div">
                        Language & Tools
                    </Typography>
                    <Create />
                    <ChangeLanguage />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
