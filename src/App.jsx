import { useEffect, useState } from 'react'

import axios from 'axios'

import Card from './components/Card'

function App() {
  const [userDetails, setUserDetails] = useState([])

  const RandomUser = axios.create({
    baseURL: 'https://randomuser.me/api/',
  })

  const fetchUser = async () => {
    let response = await RandomUser.get()
    setUserDetails(response.data.results[0])
    console.log('fetchUser')
  }

  useEffect(() => {
    console.log('useEffect')
    fetchUser()
  }, [])

  //const text = JSON.stringify(userDetails)
  console.log(userDetails)

  return (
    <div className="App">
      <h1>Random User</h1>
      <button onClick={fetchUser}>fetch</button>
      <Card
        picture={userDetails?.picture?.large}
        firstName={userDetails?.name?.first}
        lastName={userDetails?.name?.last}
        email={userDetails?.email}
        phone={userDetails?.phone}
        country={userDetails?.location?.country}
      />
    </div>
  )
}

export default App
