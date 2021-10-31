import React, {useState} from 'react';
import {Box, Button, Modal} from '@mui/material';
import style from '../../assets/scss/header.scss'
import ModalSinIn from '../modals/sin-in'

const AppHeader = () => {
    return (
        <>
            <Box component="div"
                 sx={{
                     p: 2,
                     display: 'flex',
                     justifyContent: 'flex-end',
                     backgroundColor: 'primary.light',
                     borderRadius: '5px',
                 }}>
                <ModalSinIn></ModalSinIn>
            </Box>
        </>
    )
}

export default AppHeader;