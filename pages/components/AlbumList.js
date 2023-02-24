import * as React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent } from '@mui/material';

export default function AlbumList({albumList}) {

  
  return (
    <div>
        <Link   
            href={{
            pathname: "/components/SingleAlbum",
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
                <Button>               
                  <Link href="/">Back to the usersList</Link>
                </Button>
              </CardContent>
            </Card>
        </Link>
    </div>
  );
}