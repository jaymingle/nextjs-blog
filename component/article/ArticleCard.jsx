import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const ArticleCard = ({ title, content, date, category, image }) => {
    return (
        <Card sx={{ display: 'flex', marginBottom: '1.5rem', maxWidth: '600px' }}>
            <Grid container>
                {/* Image Column - 30% width */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: '150px', // Adjust the height for a smaller image
                            objectFit: 'cover',
                        }}
                        src={image}
                        alt={title}
                    />
                </Grid>

                {/* Content Column - 70% width */}
                <Grid item xs={12} sm={8}>
                    <CardContent sx={{ padding: '1rem' }}> {/* Reduce padding */}
                        <Typography variant="h6" component="div" gutterBottom> {/* Smaller font for title */}
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            {content.length > 100 ? content.slice(0, 100) + '...' : content} {/* Limit content length */}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}> {/* Reduce margin */}
                            <Typography variant="body2" color="text.secondary">
                                {date}
                            </Typography>
                            <Typography variant="body2" color="primary">
                                {category}
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ArticleCard;
