import Box from '@mui/material/Box';
import User from './User';


export default function UserList({usersList}) {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        bgcolor: 'background.default',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
        },
      }}
    >
        <div>
            {usersList.map(user=> 
                <User key={user.id}user={user} />
            )}
        </div>

    </Box>
  );
}