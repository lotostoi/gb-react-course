
import { Box, Link } from '@mui/material';

import routes from '../../router'
import { NavLink, BrowserRouter as Router } from "react-router-dom";

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
                    {routes.map(({ id, title, link, exact }) => {
                        if (title === 'error' || title === 'Person-area') return
                        return (
                            <Link component={NavLink}
                                key={id}
                                to={link}
                                underline="hover"
                                exact={exact}
                                activeClassName='active'
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
                </Box>
                <NavLink to="/person-area" className="btn btn-warning"> Login</NavLink>
            </Box>
        </>
    )
}

export default AppHeader;