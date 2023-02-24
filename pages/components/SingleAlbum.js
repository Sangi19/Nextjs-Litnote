import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SingleAlbum({}) {

  const router = useRouter();
  const data = router.query;
  console.log(data)

  const [albums, setAlbums] = useState([])

  async function fetchAlbumsFn() {
    const fetchalbumData= await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${data.id}`) 
    const albumData= await fetchalbumData.json()
    setAlbums(albumData)
  }

  useEffect(() => {
    fetchAlbumsFn();
  });

  return (

    <div>
      <h3>Pictures for the selected album</h3>

      <ImageList sx={{ width: 1550, height: 700 }} cols={6} rowHeight={164}>
        {albums.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))} 
      </ImageList>

      <Button>               
        <Link href="/">Back to the Album</Link>
      </Button>     
    </div>
  );
}
