import React from 'react';
import {Box, TextField, Typography, Button} from "@mui/material";


const ContactUs = () => {
    return (
        <Box sx={{marginY: 5, marginX: 60}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 'bold'
            }}>Send Us A Message</Typography>

            <Box>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        marginTop: '2rem',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {/* Name Field */}
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    {/* Email Field */}
                    <TextField
                        label="Your Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                    />

                    {/* Subject Field */}
                    <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                    />

                    {/* Message Field */}
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />

                    {/* Submit Button */}
                    <Button variant="contained" color="primary" size="large">
                        Send Message
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default ContactUs;