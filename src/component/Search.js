import React from 'react'
import TextField from '@material-ui/core/TextField';
import './Search.css'

const Search = ({ setShow, loading }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setShow(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <div className='search'>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search show" variant="outlined" onKeyDown={handleKeyDown} />
            </form>
        </div>
    )
}

export default Search;