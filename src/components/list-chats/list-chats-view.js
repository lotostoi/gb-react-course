
import {
    ListSubheader,
    List,
} from '@mui/material';

import CustomLink from './custom-link';

export default function ({_addChat, chats, inputChatName}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '250px',
                backgroundColor: '#42a5f5',
                borderRadius: '5px',
                height: '85vh',
            }}
        >
            <List
                sx={{
                    width: '100%',
                    borderRadius: '5px',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText',
                            borderRadius: '5px',
                        }}
                    >
                        Rooms:
                    </ListSubheader>
                }
            >
                {
                    chats.map(item => <CustomLink item={item} key={item.id} />)
                }
            </List>
            <input type="text" placeholder="add chat" className="form-control mx-3 w-75 mt-auto" ref={inputChatName} />
            <button onClick={_addChat} className="btn btn-warning w-75 m-3"> add</button>
        </div>
    )
}