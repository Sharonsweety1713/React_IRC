// // import { Link } from 'react-router-dom';
// // import React, { useState } from 'react';

// const Profile = () => {
  
//   return (
//     <div className="container-custom-new sign-up-mode">
//       <div className="forms-container-custom-new">
//         <div className="signin-signup-custom-new">
//           <form className="pro-form sign-in-form-new">
//             <h2 className="title-new">Create Your Profile</h2>
//             <div className="pro-inp">
//               <i className="fas fa-user"></i>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 />
//             </div>
//             <div className="pro-inp">
//               <i className="fas fa-envelope"></i>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
                
//               />
//             </div>
//             <div className="pro-inp">
//               <i className="fas fa-lock"></i>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
                
//               />
//             </div>

           
//               <button className="btn-new" id="sign-up-btn">
//                 I'm In!
//               </button>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// const Profile = () => {
//     return (
//       <>
//       {/* <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png" className="biswoman"></img> */}
//       <img
//               src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
//               className="womimage"
//               alt="2nd Pic"
//             />
//       <div className="container-custom-new sign-up-mode">
//         <div className="forms-container-custom-new">
//           <div className="signin-signup-custom-new">
//             <form className="pro-form sign-in-form-new">
//               <h2 className="title-new">Create Your Freelancer Profile</h2>
//               <div className="pro-inp">
//                 <i className="fas fa-user"></i>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   name="fullName"
//                 />
//               </div>
//               <div className="pro-inp">
//                 <i className="fas fa-envelope"></i>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                 />
                
//               </div>
//               <div className="pro-inp">
//                 <i className="fas fa-list"></i>
//                 <input
//                   type="text"
//                   placeholder="Specialization"
//                   name="skills"
//                 />
//               </div>
//               <div className="pro-inp">
//                 <i className="fas fa-clock"></i>
//                 <input
//                   type="number"
//                   placeholder="Experience (years)"
//                   name="experience"
//                   min="0"
//                 />
//               </div>
              
//               <div className="pro-inp">
//                 <i className="fas fa-file-alt"></i>
//                 <textarea
//                   placeholder="Biography"
//                   name="bio"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button className="btn-new" id="sign-up-btn">
//                 Create Profile
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       </>
//     );
//   };
  
//   export default Profile;
  
const Profile = () => {
  return (
    <>
      <div className="container-custom-new sign-up-mode">
        <div className="forms-container-custom-new">
          <div className="signin-signup-custom-new">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4139/4139967.png"
              className="womimage"
              alt="2nd Pic"
            />
            <form className="pro-form sign-in-form-new">
              <h2 className="title-new">Create Your Freelancer Profile</h2>
              <div className="pro-inp">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                />
              </div>
              <div className="pro-inp">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="pro-inp">
                <i className="fas fa-list"></i>
                <input
                  type="text"
                  placeholder="Specialization"
                  name="skills"
                />
              </div>
              <div className="pro-inp">
                <i className="fas fa-clock"></i>
                <input
                  type="number"
                  placeholder="Experience (years)"
                  name="experience"
                  min="0"
                />
              </div>
              <div className="pro-inp">
                <i className="fas fa-file-alt"></i>
                <textarea
                  placeholder="Biography"
                  name="bio"
                  rows="4"
                ></textarea>
              </div>
              <button className="btn-new" id="sign-up-btn">
                Create Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
