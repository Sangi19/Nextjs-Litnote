import { Button } from '@mui/material';
import Link from 'next/link';

export default function Todo() {
  return (
    <div>
        <h4>user Todo</h4>
        <h2>
            <Button>
                
            <Link href="/">Back to the UserList</Link>
            </Button>
        </h2>
    </div>
  )
}
