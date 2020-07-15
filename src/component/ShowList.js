import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import unknown from '../assets/unknown.png'
import parse from 'html-react-parser';
import './ShowList.css'

const ShowList = ({ showList }) => {

    return (
        <div className='list-container'>{showList.map((show, i) => (
            <div key={i}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component='h2'>
                           {show.show.name}
                        </Typography>
                        <img src={show.show.image ? show.show.image.medium : unknown } className='image' alt='img'></img>
                        <Typography className='summary' component={'span'} color='textSecondary'>
                            { show.show.summary && show.show.summary[0] === '<' ? parse(show.show.summary) : <p>{show.show.summary}</p> }
                        </Typography>
                        <Typography variant='body2' component='p'>
                            Status: {show.show.status}
                        <br />
                        </Typography>
                        <Typography variant='body2' component='p'>
                            Rating: {show.show.rating.average || 'None'}
                        <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
         ))}
        </div>
    )
}

export default ShowList
