// import React, { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./login.css";
// import { AuthContext } from "../Privarouter/AuthProvider";
// import { AiOutlineGoogle } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const [successFullyLogin, setsuccessFullyLogin] = useState("");
//   const [loginError, setloginError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const location = useLocation();
//   console.log(location);

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log(email, password);

//     setloginError("");
//     setsuccessFullyLogin("");

//     let condition =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

//     if (!condition.test(password)) {
//       toast("Password is invalid");
//     }

//     const emailCondition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//     if (!emailCondition.test(email)) {
//       toast("Email is invalid");
//     }

//     signInUser(email, password)
//       .then((result) => {
//         console.log(result.user);
//         e.target.reset();
//         toast("User successfully log-in");
//         navigate(location?.state ? location.state : "/");
//       })
//       .catch((error) => {
//         console.error(error);
//         toast(error.message);
//       });
//   };

//   const handleGoogle = () => {
//     signInWithGoogle()
//       .then((result) => {
//         console.log(result.user);
//         navigate(location?.state ? location.state : "/");
//       })
//       .catch((errror) => {
//         console.error(errror);
//       });
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen more font-bold ">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleLogin} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                   name="email"
//                 />
//               </div>
//               <div className="form-control relative">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                   name="password"
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute top-12 left-48 text-lg"
//                 >
//                   {showPassword ? (
//                     <AiOutlineEye></AiOutlineEye>
//                   ) : (
//                     <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
//                   )}
//                 </span>
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-active ">
//                   Login
//                 </button>
//               </div>
//             </form>
//             <div className="flex justify-center items-center">
//               Sign in with{" "}
//               <span onClick={handleGoogle} className="text-2xl cursor-pointer">
//                 <AiOutlineGoogle></AiOutlineGoogle>
//               </span>
//             </div>
//             <div className="text-center font-bold p-2 ">
//               <p>
//                 New To Website Please <br />
//                 <Link
//                   className="underline uppercase text-green-600"
//                   to={"/register"}
//                 >
//                   Register
//                 </Link>
//               </p>
//             </div>
//             {successFullyLogin && <p>{successFullyLogin}</p>}
//             {loginError && <p>{loginError}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
