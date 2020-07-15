import React, { useEffect } from 'react'

const ShowList = ({ showList }) => {

    useEffect(() => {

    })

    return (
        // <div></div>
        <div>{showList.map((show, i) => (
            <div key={i}>
                {show.show.name}
            </div>
         ))}
        </div>
    )
}

export default ShowList
