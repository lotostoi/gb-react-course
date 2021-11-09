import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';

import { SHOW_NAME, HIDE_NAME } from '../store/person-area/actions'

export default function () {

    const { showName } = useSelector((state) => state)

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        if (target.checked) {
            dispatch({ type: SHOW_NAME })
        } else {
            dispatch({ type: HIDE_NAME })
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100vh - 200px)'
        }}>

            <Checkbox
                checked={showName}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />

            <h1>
                {showName ? "Person area" : "Hide"}
            </h1>

        </Box>
    )
}