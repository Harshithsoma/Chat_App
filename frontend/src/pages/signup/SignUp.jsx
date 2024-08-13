import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [signupInputs, setsignupInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckboxChange = (gender) => {
    setsignupInputs({ ...signupInputs, gender });
  };

  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(signupInputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered  h-10"
              value={signupInputs.fullName}
              onChange={(e) =>
                setsignupInputs({ ...signupInputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={signupInputs.username}
              onChange={(e) =>
                setsignupInputs({ ...signupInputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={signupInputs.password}
              onChange={(e) =>
                setsignupInputs({ ...signupInputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={signupInputs.confirmPassword}
              onChange={(e) =>
                setsignupInputs({
                  ...signupInputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={signupInputs.gender}
          />

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
