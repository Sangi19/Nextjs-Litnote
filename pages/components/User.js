import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';



export default function User({user}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
            <Link   
                href={{
                pathname: "/user/Todo",
                query: {id:user.id }// the data
              }}  >
               <Button size="small">Todo</Button>
            </Link>
            <Link href="/user/Post">
               <Button size="small">Post</Button>
            </Link>            
            <Link href={{ 
              pathname:"/user/Albums",
              query: {id:user.id }// the data
           }}>
               <Button size="small">Album</Button>
            </Link>
      </CardActions>
    </Card>
  );
}