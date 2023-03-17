import { Card, CardContent } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Post() {
  
  const router = useRouter();
  const data = router.query;

  const [posts, setPosts] = useState([])

  async function fetchPostFn(){
    const fetchPost= await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
    const postdata= await fetchPost.json()
    setPosts(postdata)
    // console.log(posts)
  }
  useEffect(() => {
    fetchPostFn()
   })
  

  return (
    <div>

      <h2>User Posts</h2>
          <Card>
            <CardContent >
              {posts.map((item) => (
                  <Card sx={{ maxWidth: 405,mb:1 }}>
                    <Link   
                        href={{
                        pathname: "/components/SingleAlbum",
                        query: {id:item.id,
                            title:item.title }// the data
                      }}  >
                        <CardContent>{item.title}</CardContent>
                      </Link>

                  </Card>
              ))}
              {/* <Button>               
                <Link href="/">Back to the usersList</Link>
              </Button> */}
            </CardContent>
          </Card>
    </div>
  )
}
