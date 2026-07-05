import React from "react";

const AuthModal = ({ isOpen, onClose, mode, setMode }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="text-center mb-6">
    <h2 className="text-3xl font-bold">
        Welcome Back 👋
    </h2>

    <p className="text-gray-500 mt-2">
        Sign in to continue to ResumeIQ
    </p>
</div>

        {mode === "login" ? (
          <>
            <label className="font-medium mb-2 block">
Email Address
</label>

<input
type="email"
placeholder="Enter your email"
/>
         <label className="font-medium mb-2 block">
                  Password
</label>

               <input
              type="password"
placeholder="Enter your password"
/>

            <button
  className="px-5 py-2 rounded-lg border border-slate-300 font-semibold hover:bg-slate-100 transition cursor-pointer"
>
  Login
</button>

            <p className="text-center mt-5">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setMode("signup")}
              >
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button className="w-full bg-green-600 text-white py-3 rounded-lg">
              Sign Up
            </button>

            <p className="text-center mt-5">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;





// import { SignIn } from "@clerk/clerk-react";

// function Login() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-slate-100">
//       <SignIn />
//     </div>
//   );
// }

// export default Login;