import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clientLogin } from '../JS/clientSlice/clientSlice'
import "./Login.css"

const Login = () => {
  const client = useSelector((state) => state.client.client);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (


    <div className='register-login'>
      <div className='div1'>
        <h2>Welcome Back</h2>
        <p>welcome back please enter your details</p>
        <div className='input'>
          <label>Email</label>
          <input placeholder='Email' type="email" onChange={(e) => setLogin({ ...login, email: e.target.value })} required></input>
        </div>
        <div className='input' >
          <label>Password</label>
          <input placeholder='Password' type="password" onChange={(e) => setLogin({ ...login, password: e.target.value })}></input>

        </div>

        <div className='input' >
          <button onClick={() => {
            dispatch(clientLogin(login))
            setTimeout(() => {
              navigate("/profil");
            }, 1000);
            // setTimeout(() => {
            //   window.location.reload();
            // }, 1000);
          }}>Sign in</button>

        </div>

        <Link to="/register" style={{ textDecoration: "none" }}><h5 style={{ color: "black", textAlign: "center", width: "400px", width: "350px", display: "flex", justifyContent: "flex-start", textAlign: "left", marginTop: "-10px" }}>Register Now</h5></Link>
      </div>

      <div className='div2'>
        <img src='BackLogin.jpg'></img>
      </div>
    </div>
    // <section className="vh-100"
    //   style={{
    //     backgroundImage:
    //       'url("https://i.pinimg.com/564x/e4/3b/09/e43b094ba289cdfa0f4b2dabe80f7744.jpg")', width: "100%"

    //     // ,backgroundRepeat:'no-repeat'
    //   }}>

    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-sm-6 text-black">
    //         <div className="px-5 ms-xl-4">
    //           <i
    //             className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
    //             style={{ color: "#709085" }}
    //           />

    //         </div>
    //         <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
    //           <form onSubmit={(e) => e.preventDefault()} style={{ width: "23rem" }} >
    //             <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
    //               Log in
    //             </h3>

    //             <div className="form-outline mb-4">
    //               <input
    //                 type="email"
    //                 id="form3Example3cg"
    //                 className="form-control form-control-lg"
    //                 onChange={(e) => setLogin({ ...login, email: e.target.value })}
    //               />
    //               <label className="form-label" htmlFor="form3Example3cg">
    //                 Your Email
    //               </label>
    //             </div>
    //             <div className="form-outline mb-4">
    //               <input
    //                 type="password"
    //                 id="form3Example4cg"
    //                 className="form-control form-control-lg"
    //                 onChange={(e) => setLogin({ ...login, password: e.target.value })}
    //               />
    //               <label className="form-label" htmlFor="form3Example4cg">
    //                 Password
    //               </label>
    //             </div>
    //             <div className="pt-1 mb-4">
    //               <button className="btn btn-info btn-lg btn-block" type="button" style={{ background: "linear-gradient(to right, #cda9ac, #b8666d)" }}
    //                 onClick={() => {
    //                   dispatch(clientLogin(login))
    //                   setTimeout(() => {
    //                     navigate("/profil");
    //                   }, 1000);
    //                   // setTimeout(() => {
    //                   //   window.location.reload();
    //                   // }, 1000);
    //                 }}
    //               >
    //                 LogIn
    //               </button>
    //             </div>
    //             <p className="small mb-5 pb-lg-2">
    //               <a className="text-muted" href="">
    //                 Forgot password?
    //               </a>
    //             </p>
    //             <p>
    //               Don't have an account?{" "}
    //               <a href="" className="link-info">
    //                 <Link to="/Register">
    //                   Register here
    //                 </Link>
    //               </a>
    //             </p>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="col-sm-6 px-0 d-none d-sm-block">

    //       </div>
    //     </div>
    //   </div>
    // </section>


  )
}
export default Login