import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

function Search({ setShow }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setShow(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyDown={handleKeyDown} />
            </form>
        </div>
    )
}

export default Search;