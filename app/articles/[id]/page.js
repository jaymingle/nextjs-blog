// pages/post.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from "next/image";

const PostPage = () => {
    // Dummy data
    const post = {
        title: 'Understanding React and Next.js',
        image: 'https://via.placeholder.com/800x400', // Replace with actual image URL
        date: 'October 14, 2024',
        category: 'Technology',
        content: `React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components 
              and manage the state of their applications efficiently. Next.js, on the other hand, is a React framework that enables 
              server-side rendering, static site generation, and much more. Together, they form a powerful combination for building 
              high-performance web applications. This post will dive into the key differences between React and Next.js and how to 
              leverage their unique features to create optimized web apps.  Donec pede justo, fringilla vel, aliquet nec, 
              vulputate eget, arcu. Fusce fermentum. Cras id dui. Nunc interdum lacus sit amet orci.
                Praesent venenatis metus at tortor pulvinar varius. Fusce fermentum. Phasellus viverra nulla ut metus varius laoreet. Sed a libero.
Fusce pharetra convallis urna. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Ut tincidunt tincidunt erat. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.
 Fusce neque. Sed fringilla mauris sit amet nibh. Pellentesque auctor neque nec urna.
Fusce vel dui. Vivamus laoreet. Phasellus dolor. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.`,
    };

    return (
        <Container sx={{ marginTop: '2rem', paddingY: 5 }}>
            {/* Title */}
            <Typography variant="h3" component="h1" gutterBottom>
                {post.title}
            </Typography>

            {/* Image */}
            {/*<Image src={post.image} fill/> */}

            <Box
                component="img"
                sx={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    marginBottom: '1.5rem',
                }}
                src={post.image}
                alt={post.title}
            />

            {/* Date and Category */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <Typography variant="body1" color="text.secondary">
                    {post.date}
                </Typography>
                <Typography variant="body1" color="primary">
                    {post.category}
                </Typography>
            </Box>

            {/* Post Content */}
            <Typography variant="body1" paragraph>
                {post.content}
            </Typography>
        </Container>
    );
};

export default PostPage;
