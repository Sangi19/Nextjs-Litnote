import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';
import { Card, CardContent } from '@mui/material';

export default function AlbumList({albumList}) {
  return (
    <div>
        <Link   
            href={{
            pathname: "/user/Todo",
            query: {id:albumList.id }// the data
          }}  >
            
            <Card 
            // sx={{ 
            //   display: 'flex',
            //   flexWrap: 'wrap'
            //   }}
             >
              <CardContent >
                {albumList.map((item) => (
                    <Card sx={{ maxWidth: 305,mb:1 }}>                
                      <CardContent>{item.title}</CardContent>
                    </Card>
                ))}
              </CardContent>
            </Card>
        </Link>
    </div>
  );
}