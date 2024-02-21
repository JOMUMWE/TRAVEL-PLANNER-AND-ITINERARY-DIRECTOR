import './styles.css'
import photo1 from "../assets/chevron_back.svg";
import photo2 from '../assets/Vector.svg'
import photo3 from "../assets/flat-color-icons_google.svg"
import photo4 from "../assets/ant-design_apple-filled.svg"
import photo5 from "../assets/Rectangle 20.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const navigate = useNavigate()
    const [email, setEmail ] = useState('')
    const sendVery = async (e) =>{
        e.preventDefault()
        navigate('/verify')
    }
  return (
    <div className="grid grid-cols-2 w-3/4 mx-auto mt-8 gap-8">
      <div className="left-container py-24">
        <img src={photo1} alt="back" id="back" />
        <Link to="/login">Back to Login</Link>
        <br />
        <br />
        <h2 className=" text-5xl font-bold mb-4 ">Forgot your password?</h2>
        <span className="sentences">
          Don't worry, happens to all of us. Enter your email below to recover
          your password
        </span>
        <br />
        <br />
        <div>
          <form action="#" method="post" onSubmit={sendVery}>
            <fieldset>
              <legend className='pr-3 pl-1' >Email</legend>
              <input
                id="emailHold"
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[56px] p-3"
              />
            </fieldset>
            <button
              type="submit"
              className="w-full bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2]"
            >
              Submit
            </button>
          </form>
        </div>
        <span className="forgotPass-option my-8">or login with</span>
        <div className="image-flex">
          <div>
            <img className="altLogImg" src={photo2} alt="facebook" />
          </div>
          <div>
            <img className="altLogImg" src={photo3} alt="google" />
          </div>
          <div>
            <img className="altLogImg" src={photo4} alt="apple" />
          </div>
        </div>
      </div>
      <div className="right-container p-5">
        <img src={photo5} alt="hotel view" />
      </div>
    </div>
  );
}