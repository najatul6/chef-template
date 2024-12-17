import Lottie from "lottie-react";
// import happy from "../../assets/happy.json";
import { BiEnvelope, BiKey } from "react-icons/bi";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import loginAnimation from "../../assets/loginAnimation.json";
// import Swal from "sweetalert2";
import Title from "../../components/Shared/Title/Title";
import Social from "../../components/Shared/Social/Social";
import { AuthContext } from "../../providers/AuthProvider";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((res) => {
        const user = res.user;
        console.log(user);
        alert("successfull");
        // axios
        //   .post(
        //     "https://chef-note-server.vercel.app/jwt",
        //     { email },
        //     { withCredentials: true }
        //   )
        //   .then((data) => console.log(data));

        axios
          .post(
            "https://chef-note-server.vercel.app/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            navigate(`${location.state ? location.state : "/"}`);
            console.log(res.data);
          });

        // fetch("https://chef-note-server.vercel.app/jwt", {
        //   method: "POST",
        //   credentials: "include",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({ email: email }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log(data));

        // navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" bg-[url(/bg.png)] bg-contain ">
      <div className=" bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5  ">
          <div className="title mt-5">
            <Title>Login Now</Title>
          </div>

          <div className="flex  justify-between items-center gap-5 pt-8">
            <div className="login-for flex-1">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="email"
                    name="email"
                    placeholder="enter email"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiKey className="text-3xl text-slate-500"></BiKey>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="password"
                      name="pass"
                      placeholder="enter Password"
                    />
                  </div>
                  <p className="text-end text-[13px] text-slate-500">
                    forgot password?{" "}
                  </p>
                </div>

                <div className=" p-1 flex gap-3 -mt-4">
                  <input type="checkbox" name="remember me" className="" />
                  Remember Me
                </div>

                <input
                  type="submit"
                  value="Login Now"
                  className="btn cursor-pointer"
                />
              </form>
            </div>
            <Social/>
            <div className="lottie  flex-1 mx-20">
              <Lottie animationData={loginAnimation} loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
