import axios from 'axios'
import { useEffect, useState } from 'react'

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

  const text = JSON.stringify(userDetails)
  console.log(userDetails)

  return (
    <div className="App">
      <h1>Random User</h1>
      <p>{text}</p>
      <button onClick={fetchUser}>fetch</button>
    </div>
  )
}

export default App
