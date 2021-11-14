import {Box, Typography} from '@mui/material';

export default function () {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '80vh',
                flexDirection: 'column',
                maginBot: '0',
            }}
        >
            <Typography
                component='span'
                sx={{
                    color: 'red',
                    fontSize: '20vh'
                }}
            >
                404
            </Typography>
        </Box>
    )
}