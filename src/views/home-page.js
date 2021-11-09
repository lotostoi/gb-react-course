import {Box} from '@mui/material';


export default function () {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 200px)'
        }}>
            <h1>Home page</h1>
        </Box>
    )
}