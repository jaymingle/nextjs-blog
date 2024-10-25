import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";

import aboutPageImage from '@/assets/about_us_page.avif'

const AboutUs = () => {
    return (
        <Box sx={{marginY: 5, marginX: 30}}>
            <Typography variant='h3' sx={{
                textAlign: 'center',
                fontSize: '26px',
                fontWeight: 'bold'
            }}>About This Blog</Typography>

            <Box sx={{marginY: 4}}>
                <Image sx={{marginY: 4}} src={aboutPageImage} alt='About Us Page' width={1200} height={500}/>

                <Box sx={{marginX: 10}}>
                    <Typography variant='body1' sx={{textAlign: 'center', paddingY: 4, lineHeight: 2.5,}}>
                        Morbi vestibulum volutpat enim. Phasellus nec sem in justo pellentesque
                        facilisis. <br/> Phasellus tempus. Vestibulum volutpat pretium libero. Nulla sit amet est. <br/>

                        Fusce fermentum odio nec arcu. Cras ultricies mi eu turpis hendrerit fringilla. <br/> Aenean viverra
                        rhoncus pede. Phasellus consectetuer vestibulum elit. Quisque id odio. <br/>

                        Cras id dui. Suspendisse potenti. Sed magna purus, fermentum eu, tincidunt eu, varius ut,
                        felis. <br/> Fusce commodo aliquam arcu. Nullam sagittis.

                        Pellentesque habitant morbi tristique <br/> senectus et netus et malesuada fames ac turpis
                        egestas. <br/> Vivamus in erat ut urna cursus vestibulum. <br/> Nam ipsum risus, rutrum vitae,
                        vestibulum eu, molestie vel, lacus. Aliquam lobortis. <br/> Donec mollis hendrerit risus.

                        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, <br/> vitae
                        iaculis lacus elit id tortor. Suspendisse potenti. <br/> Fusce vulputate eleifend sapien. Nulla
                        consequat massa quis enim. Vestibulum eu odio.
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
};

export default AboutUs;