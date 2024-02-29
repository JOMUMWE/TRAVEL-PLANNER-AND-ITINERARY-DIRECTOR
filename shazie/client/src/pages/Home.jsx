import Navbar from '../components/Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function Home() {
  
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);  
  const logged = user ? true : false
  
  return (
    <>
      <Navbar log={logged} home={true} />
    </>
  );
}
