import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hotels() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  const logged = user ? true : false;
  return (
    <div >
      <Navbar log={logged} flights={false} hotels={true}  />
      
    </div>
  );
}
