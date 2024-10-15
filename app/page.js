import Image from "next/image";
import styles from "./page.module.css";
import Box from "@mui/material/Box";

import blogImage from "@/assets/blog_image2.avif"
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
      <Box sx={{marginY: 5, marginX: 20}}>
          <Box sx={{display: 'flex'}}>
              <Box>
                  <Link href='/'>
                      <Image src={blogImage} alt='View Articles' width={500} height={700}  />
                  </Link>

                  <Typography variant='h4' sx={{
                      marginY: 2,
                      '&:hover': {
                          color: 'blue'
                      }
                  }}>
                      <Link href='/'>View Articles</Link>
                  </Typography>
              </Box>

              <Box>

              </Box>
          </Box>
      </Box>
  );
}
