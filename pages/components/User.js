import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';



export default function User({user}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
            <Link href="/user/Todo">
               <Button size="small">Todo</Button>
            </Link>
      </CardActions>
    </Card>
  );
}