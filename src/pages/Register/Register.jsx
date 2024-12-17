import Lottie from "lottie-react";
import Title from "../components/Title";
import {
  BiEnvelope,
  BiImageAdd,
  BiKey,
  BiRename,
  BiUser,
} from "react-icons/bi";
import happy from "../assets/happy.json";
import Social from "../components/Social";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const goTo = useNavigate();
  const { createUser, signIn, user, setUser, updateUser } =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const pass = form.pass.value;

    console.log(name, email, pass);

    createUser(email, pass)
      .then((res) => {
        updateUser({ displayName: name }).then(() => {
          axios
            .post(
              "https://chef-note-server.vercel.app/jwt",
              { email },
              { withCredentials: true }
            )
            .then((res) => {
              setUser({ ...res.user, displayName: name, photoURL: image });
              goTo(`${location.state ? location.state : "/"}`);
              console.log(res.data);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-[url(/bg.png)] bg-contain">
      <div className=" bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5  ">
          <div className="title mt-5">
            <Title>Join with Us</Title>
          </div>

          <div className="flex  justify-between items-center gap-5 pt-8">
            <div className="login-for flex-1">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiUser className="text-3xl text-slate-500"></BiUser>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="">
                    <BiImageAdd className="text-3xl text-slate-500"></BiImageAdd>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="text"
                    name="image"
                    placeholder="Enter Image Url"
                  />
                </div>
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="">
                    <BiKey className="text-3xl text-slate-500"></BiKey>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="password"
                    name="pass"
                    placeholder="Enter Password"
                  />
                </div>

                {/* <div className="flex justify-start items-center">
                  <div className="">
                    <BiKey className="text-3xl text-slate-500"></BiKey>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="password"
                    name="pass-confirm"
                    placeholder="Confirm Password"
                  />
                </div> */}

                <input
                  type="submit"
                  value="Login Now"
                  className="btn cursor-pointer"
                />
              </form>
            </div>
            <Social></Social>
            <div className="lottie flex-1 flex mx-20 ">
              <Lottie animationData={happy}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;