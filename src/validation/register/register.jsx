import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const role = useRef("");

  function handleregister(e) {
    e.preventDefault(); 

    const user = {
      Name : name.current.value ,
      Email: email.current.value,
      Password: password.current.value,
      Role: role.current.value,
    };

     console.log(user)
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center font-bold text-4xl">Leave Management</h1>
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleregister} className="space-y-6">

             <div>
              <label
               htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
               Full Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  ref={name}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
           
            <div>
              <label
               htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={email}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={password}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

           
            <div>
              <label htmlFor="regRole" className="block text-sm font-medium text-gray-900">
                Role
              </label>
              <select
                id="regRole"
                ref={role}
                required
                className="block w-full mt-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="">-- Select Role --</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registration
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
