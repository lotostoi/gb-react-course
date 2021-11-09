import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {
    Box,
    Button,
    Typography,
    Modal,
    TextField
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ModalSinIn() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant="contained"
                sx={{
                    color: 'primary.contrastText'
                }}
                onClick={handleOpen}
            >sin in</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon onClick={handleClose}
                               sx={{marginLeft: 'auto', display: 'flex', cursor: 'pointer'}}>
                    </CloseIcon>
                    <Typography id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                    >
                        Sin in
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignContent: 'center',
                        }}>

                        <TextField id="email-sin-in"
                                   label="Yor email"
                                   variant="outlined"
                                   type="email"
                                   sx={{
                                       margin: '0 0 10px 0'
                                   }}
                        />
                        <TextField id="pasword-sin-in"
                                   label="password"
                                   variant="outlined"
                                   type="password"
                                   sx={{
                                       margin: '0 0 10px 0'
                                   }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                width: '100px',
                                color: 'primary.contrastText',
                                backgroundColor: 'primary.light',
                                margin: '0 auto',
                            }}>
                            Sin In
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
