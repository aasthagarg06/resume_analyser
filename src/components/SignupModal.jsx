function SignupModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div
  className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex justify-center items-center"
  onClick={onClose}
>

      <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-4 relative z-10000">

        <h2 className="text-2xl font-bold mb-4">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 mb-3"
        />

        <button
          className="w-full bg-violet-600 text-white p-3 rounded-lg"
        >
          Sign Up
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default SignupModal;




// import { SignUp } from "@clerk/clerk-react";

// function Signup() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-slate-100">
//       <SignUp />
//     </div>
//   );
// }

// export default Signup;


