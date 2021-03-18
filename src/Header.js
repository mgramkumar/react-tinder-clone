import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

function Header() {
    return (
        <div>
            <IconButton>
                <PersonRoundedIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
