import {useContext} from 'react'
import Navbar from '../components/Navbar'
import {UserContext} from '../../context/userContext'

export default function Home() {
  const {user} = useContext(UserContext)
  console.log(user)
  const logged = user ? true : false
  return (
    <>
    <Navbar log={logged}/>
    <div>home</div>
    </>
  )
}
