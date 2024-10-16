import Image from "next/image";
import styles from "./page.module.css";
import {Box, Typography}from "@mui/material";

import blogImage from "@/assets/blog_image2.avif"
import sendMessage from '@/assets/blog_image_1.avif'
import createPost from '@/assets/create_post.avif'
import createCategory from '@/assets/create_category.avif'

import Link from "next/link";

export default function Home() {
  return (
      <Box sx={{marginY: 5, marginX: 20}}>
          <Box sx={{display: 'flex', gap: 5}}>
              <Box>
                  <Link href='/articles'>
                      <Image src={blogImage} alt='View Articles' width={500} height={650}  />
                  </Link>

                  <Typography variant='h4' sx={{
                      marginY: 2,
                      '&:hover': {
                          color: 'blue'
                      }
                  }}>
                      <Link href='/articles'>View Articles</Link>
                  </Typography>
              </Box>

              <Box sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
                    <Box>
                        <Link href='/'>
                            <Image src={sendMessage} alt='Send email image'  width={900} height={350} />
                        </Link>

                        <Typography variant='h5'> <Link href='/'> Send Message</Link>< /Typography>
                    </Box>

                  <Box sx={{display: 'flex', gap: 5}}>
                      <Box>
                          <Link href=''>
                              <Image src={createPost} alt='Create Post Image' width={422} height={250}/>
                          </Link>

                          <Typography variant='h6'> <Link href='/'>Create Post</Link> </Typography>
                      </Box>

                      <Box>
                          <Link href=''>
                              <Image src={createCategory} alt='Create Category Image' width={425} height={250}/>
                          </Link>

                          <Typography variant='h6'> <Link href='/'>Create Category</Link> </Typography>
                      </Box>

                  </Box>
              </Box>

          </Box>
      </Box>
  );
}
