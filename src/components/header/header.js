import React, {useState} from 'react';
import {Box, Button, Modal, Link, Typography} from '@mui/material';
import style from '../../assets/scss/header.scss'
import ModalSinIn from '../modals/sin-in'
import uniqid from 'uniqid'
import routes from '../../router'
import {NavLink, BrowserRouter as Router} from "react-router-dom";

const AppHeader = () => {
    return (
        <>
            <Box component="div"
                 sx={{
                     p: 2,
                     display: 'flex',
                     justifyContent: 'space-between',
                     backgroundColor: 'primary.light',
                     borderRadius: '5px',
                 }}>
                <Box component='div'
                     sx={{
                         display: 'flex',
                         alignItems: 'center'
                     }}
                >
                    {routes.map(({id, title, link, exact}) => {
                        if (title === 'error') return
                        return (
                            <Link component={NavLink}
                                  key={id}
                                  to={link}
                                  underline="hover"
                                  exact={exact}
                                  activeClassName ='active'
                                  sx={{
                                      color: 'primary.contrastText',
                                      margin: '0 10px 0 0',
                                      '&.active': {
                                          textDecoration: 'underline'
                                      }
                                  }}
                            >
                                {title}
                            </Link>
                        )
                    })}
                < /Box>
                <ModalSinIn></ModalSinIn>
            </Box>
        </>
    )
}

export default AppHeader;