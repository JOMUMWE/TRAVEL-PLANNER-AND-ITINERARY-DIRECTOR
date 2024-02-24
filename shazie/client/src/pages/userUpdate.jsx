import { useState, useEffect } from "react";
import axios from "axios";
import photo from '../assets/kelsey-curtis--27u_GzlAFw-unsplash.jpg'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserUpdate() {
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    useEffect(() => {
      if (!user) {
        axios.get("/profile").then(({ data }) => {
          setUser(data);
        });
      }
    }, []);
    const id = user.id
    const [data, setData] = useState({
      name: user.name,
      password: '************',
      phoneNumber: user.phoneNmber,
    });
    const updateUser = async (e)=>{
        e.preventDefault();
        const {name,password, phoneNumber} = data
        try{
          const {data} = await axios.post('/updateUser',{name , password, phoneNumber, id})

          axios.get("/logout");
            if (data.status === "error") {
              toast.error(data.data);
            }
            if(data.error){
            toast.error(data.error)
            }else{
            setData({})
            toast.success('Update Successful!')
            navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <section className="w-9/12 mx-auto grid grid-cols-2 gap-14 text-[#112211] h-4/6 mt-24">
      <div className=" rounded-lg overflow-hidden object-contain">
        <img src={photo} alt="a hotel photo" />
      </div>
      <div>
        <h1 className="font-bold text-4xl text-black mb-2">Update Profile</h1>
        <form onSubmit={updateUser} className="mt-10 mb-10">
          <label>Name</label>
          <input
            type="text"
            className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded"
            defaultValue={user.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Email</label>
              <input
                className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded"
                type="email"
                defaultValue={user.email}
                disabled={true}
              />
            </div>
            <div>
              <label>Phone number</label>
              <input
                className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded"
                type="text"
                defaultValue={user.phoneNmber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
                required
              />
            </div>
          </div>
          <label>Password</label>
          <input
            className="  focus:outline-none focus:border-none focus:ring focus:ring-[#8DD3BB] mb-5 border w-full h-14 p-3 border-[#79747E] rounded"
            type="password"
            defaultValue={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            className="w-full bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2]"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
}
