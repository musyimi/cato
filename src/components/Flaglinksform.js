import React from "react";

const Flaglinksform = () => {
  return (
    <div>
      <div className="">
        <form
          method="post"
          autoComplete="off"
          className="flex flex-col lg1:mx-96 lg1:my-20"
        >
          <div className="">
            <span className="flex flex-col  ">
              <label for="email">Email</label>
              <input
                className="rounded-xl"
                type="email"
                name="email"
                placeholder="Your Email"
              ></input>
            </span>
            <span className="flex flex-col lg1:mt-2 ">
              <label for="name">Password</label>
              <input
                className="rounded-xl"
                type="text"
                name="name"
                placeholder="Password"
              ></input>
            </span>
            <div class="rounded-full inline-block py-2 px-4 mt-2 bg-gray-500 text-gray-50">
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flaglinksform;
