import photo1 from "../assets/chevron_back.svg";
import photo2 from "../assets/eye.png";
import photo3 from "../assets/Rectangle 20.svg";
import { Link } from "react-router-dom";

export default function VerifyPage() {
  return (
    <div className=" grid grid-cols-2 w-3/4 mx-auto mt-8 gap-8">
      <div className="left-container py-24">
        <img src={photo1} alt="back" id="back" />
        <Link to="/login">Back to Login</Link>
        <h2 className=" text-5xl font-bold mb-4 mt-4">Verify Code</h2>
        <span className="sentences">
          An authentication code has been sent to your email.
        </span>
        <br />
        <br />
        <div>
          <form action="#" method="post">
            <fieldset>
              <legend className=" pr-3 pl-1">Enter Code</legend>
              <div className="flex flex-row w-full align-middle">
                <input
                  id="codeHold"
                  type="text"
                  placeholder="7789BM6X"
                  className="w-full h-full p-3"
                />
                <img src={photo2} className="w-6 h-6" alt="hide or show" />
              </div>
            </fieldset>
            <div>
              <span className="sentences">
                Didn't receive a code?
                <a id="resend" href="#">
                  Resend
                </a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8DD3BB] h-14 mt-8 rounded font-bold hover:bg-[#82CBB2]"
            >
              Verify{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="right-container">
        <img src={photo3} alt="hotel view" />
      </div>
    </div>
  );
}
