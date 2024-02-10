import image1 from "../assets/image1.png";

export default function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 m-6 sm:m-10 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="lg:p-12 p-10 bg-white rounded-md relative flex flex-row gap-12">
        <img src={image1} alt="People" className="hidden lg:block lg:h-96" />

        <div className="flex flex-col gap-1">
          <button className="absolute top-6 right-6" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-3xl font-semibold text-color6">
            Great to see you again!
          </h2>
          <p className="text-color2 text-md mt-2">
            Hey there! Let's get you signed in. Just pop in your username and
            password!
          </p>

          <form className="mt-6">
            <div className="flex flex-col gap-1 lg:w-1/2">
              <label htmlFor="username" className="text-sm">
                Username:
              </label>
              <input
                className="border-2 border-color3 rounded-md"
                type="text"
                id="username"
                required
              />

              <label htmlFor="password" className="text-sm mt-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                required
                className="border-2 border-color3 rounded-md"
              />
            </div>

            <div className="flex flex-row justify-between lg:w-1/2 text-sm items-center content-center mt-2">
              <div className="flex gap-1">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p>Forget Password?</p>
            </div>

            <button className="text-center hover:font-semibold items-center flex text-sm h-10 text-color1 justify-center bg-color6 hover:bg-color2 w-1/2 rounded-md mt-5 transition duration-500">
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <p className="text-sm text-color2">
              New here?
              <span className="text-sm text-color2 font-semibold">
                {" "}
                Exciting to have you join! Register now and let's get started!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
