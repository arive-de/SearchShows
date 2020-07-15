import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './component/Search'
import ShowList from './component/ShowList'
import './App.css';

const App = () => {

  const [show, setShow] = useState('')
  const [showList, setShowList] = useState([])

  useEffect(() => {

    const getShow = async () => {
      const res = await axios.get('http://api.tvmaze.com/search/shows?q=' + show, {
        params: {}
      }).catch(err => {
        console.log(err)
      })

      setShowList(res.data)
    }

    getShow()

  }, [show])

  return (
    <div className='App'>
      <Search setShow={setShow}/>
      <ShowList showList={showList}/>
    </div>
  );
}

export default App;
