import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function AlbumPhoto({albumList}) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {albumList.map((item) => (
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
  );
}