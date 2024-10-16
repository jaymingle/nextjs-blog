import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const ArticleCard = ({ title, content, date, category, image }) => {
    return (
        <Card sx={{ display: 'flex', marginBottom: '2rem' }}>
            <Grid container>
                {/* Image Column - 30% width */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        src={image}
                        alt={title}
                    />
                </Grid>

                {/* Content Column - 70% width */}
                <Grid item xs={12} sm={8}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            {content}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
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
