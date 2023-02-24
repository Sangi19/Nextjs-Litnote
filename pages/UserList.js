import Box from '@mui/material/Box';
import User from './components/User';


export default function UserList({usersList}) {

  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
          {usersList.map(user=> 
            <User key={user.id} user={user} />
          )}
      </Box>
    </div>
  );
}