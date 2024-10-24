import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import Link from "next/link";

const ArticleCard = ({ title, content, date, category, image }) => {
    return (
        <Card sx={{ display: 'flex', marginBottom: '1.5rem', maxWidth: '850px', height: '200px', paddingY: 1, paddingX: 1 }}>
            <Grid container>
                {/* Image Column - 30% width */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: '190px', // Adjust the height for a smaller image
                            objectFit: 'cover',
                        }}
                        src={image}
                        alt={title}
                    />
                </Grid>

                {/* Content Column - 70% width */}
                <Grid item xs={12} sm={8}>
                    <Link href={`/articles/1`}>

                        <CardContent sx={{ padding: '1rem' }}> {/* Reduce padding */}
                            <Typography variant="h6" component="div" gutterBottom> {/* Smaller font for title */}
                                {title}
                            </Typography>
                            <Typography sx={{marginY: 3}} variant="body2" color="text.secondary" paragraph>
                                {content.length > 100 ? content.slice(0, 100) + '...' : content} {/* Limit content length */}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}> {/* Reduce margin */}
                                <Typography variant="body2" color="text.secondary">
                                    {date}
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    {category}
                                </Typography>
                            </Box>
                        </CardContent>

                    </Link>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ArticleCard;
