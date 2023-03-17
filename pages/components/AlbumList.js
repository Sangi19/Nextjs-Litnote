import * as React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent } from '@mui/material';

export default function AlbumList({albumList}) {

  
  return (
    <div>
            <Card>
              <CardContent >
                {albumList.map((item) => (
                    <Card sx={{ maxWidth: 305,mb:1 }}>
                      <Link   
                          href={{
                          pathname: "/components/SingleAlbum",
                          query: {id:item.id }// the data
                        }}  >
                          <CardContent>{item.title}</CardContent>
                        </Link>

                    </Card>
                ))}
                <Button>               
                  <Link href="/">Back to the usersList</Link>
                </Button>
              </CardContent>
              </Card>
    </div>
  );
}