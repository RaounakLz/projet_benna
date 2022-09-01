import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clientRegister } from "../JS/clientSlice/clientSlice";

const Register = () => {
  const client = useSelector((state) => state.client.client);
  const navigate = useNavigate();
  const [Register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    // <section>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-sm-6 text-black">
    //         <div className="px-5 ms-xl-4">
    //           <i
    //             className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
    //             style={{ color: "#709085" }}
    //           />
    //         </div>
    //         <div className="warda">
    //           <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
    //             <form
    //               onSubmit={(e) => e.preventDefault()}
    //               style={{ width: "30rem" }}
    //             >
    //               <h3
    //                 className="fw-normal mb-3 pb-3"
    //                 style={{ letterSpacing: 1 }}
    //               >
    //                 CREATE AN ACCOUNT
    //               </h3>

    //               <div className="form-outline mb-4">
    //                 <label className="form-label" htmlFor="form3Example3cg">
    //                   Your name
    //                 </label>
    //                 <input
    //                   type="name"
    //                   id="form3Example3cg"
    //                   className="form-control form-control-lg"
    //                   onChange={(e) =>
    //                     setRegister({ ...Register, name: e.target.value })
    //                   }
    //                 />

    //               </div>

    //               <div className="form-outline mb-4">
    //                 <label className="form-label" htmlFor="form3Example3cg">
    //                   LastName
    //                 </label>
    //                 <input
    //                   type="text"
    //                   id="form3Example3cg"
    //                   className="form-control form-control-lg"
    //                   onChange={(e) =>
    //                     setRegister({ ...Register, lastName: e.target.value })
    //                   }
    //                 />

    //               </div>

    //               <div className="form-outline mb-4">
    //                 <input
    //                   type="email"
    //                   id="form3Example3cg"
    //                   className="form-control form-control-lg"
    //                   onChange={(e) =>
    //                     setRegister({ ...Register, email: e.target.value })
    //                   }
    //                 />
    //                 <label className="form-label" htmlFor="form3Example3cg">
    //                   Your Email
    //                 </label>
    //               </div>

    //               <div className="form-outline mb-4">
    //                 <input
    //                   type="password"
    //                   id="form3Example4cg"
    //                   className="form-control form-control-lg"
    //                   onChange={(e) =>
    //                     setRegister({ ...Register, password: e.target.value })
    //                   }
    //                 />
    //                 <label className="form-label" htmlFor="form3Example4cg">
    //                   Password
    //                 </label>
    //               </div>
    //               <div className="pt-1 mb-4">
    //                 <button
    //                   className="btn btn-info btn-lg btn-block"
    //                   type="button"
    //                   style={{
    //                     background:
    //                       "linear-gradient(to right, #cda9ac, #b8666d)",
    //                   }}
    //                   onClick={() => {
    //                     dispatch(clientRegister(Register));
    //                     setTimeout(() => {
    //                       navigate("/profil");
    //                     }, 1000);
    //                     // setTimeout(() => {
    //                     //   window.location.reload();
    //                     // }, 1000);
    //                   }}
    //                 >
    //                   Register
    //                 </button>
    //               </div>
    //               <p>
    //                 Have already an account?{" "}
    //                 <a href="" className="link-info">
    //                   <Link to="/login">Login here</Link>
    //                 </a>
    //               </p>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-6 px-0 d-none d-sm-block"></div>
    //   </div>
    // </section>
    <div className='register-login'>
      <div className='div1'>
        <h2>Welcome Back</h2>
        <p>welcome back please enter your details</p>
        <div className='input'>
          <label>Name</label>
          <input placeholder='Name' type="text" onChange={(e) => setRegister({ ...Register, name: e.target.value })} required></input>
        </div>
        <div className='input'>
          <label>Last Name</label>
          <input placeholder='LastName' type="text" onChange={(e) => setRegister({ ...Register, lastName: e.target.value })} required></input>
        </div>
        <div className='input'>
          <label>Email</label>
          <input placeholder='Email' type="email" onChange={(e) => setRegister({ ...Register, email: e.target.value })} required></input>
        </div>
        <div className='input' >
          <label>Password</label>
          <input placeholder='Password' type="password" onChange={(e) => setRegister({ ...Register, password: e.target.value })}></input>

        </div>

        <div className='input' >
          <button onClick={() => {
            dispatch(clientRegister(Register));
            setTimeout(() => {
              navigate("/profil");
            }, 1000);
            // setTimeout(() => {
            //   window.location.reload();
            // }, 1000);
          }}>Register</button>

        </div>

      </div>

      <div className='div2'>
        <img src='BackLogin.jpg'></img>
      </div>
    </div>
  );
};

export default Register;
