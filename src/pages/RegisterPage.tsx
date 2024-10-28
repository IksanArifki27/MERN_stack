import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleRegister = async (e: any) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      setName("");
      setEmail("");
      setPassword("");
      const { msg } = await res.json();
      setAlert(msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className="w-1/3 h-[440px] bg-white shadow-md p-6  rounded-md ">
        {alert && (
          <p className="alert p-1 w-full justify-between bg-green-300 rounded-md flex ">
            {alert}
            <p className="close cursor-pointer">❌</p>
            {/* <button onClick={}></button> */}
          </p>
        )}

        <h2 className="text-center text-blue-500 text-3xl font-bold">
          Register Page
        </h2>
        <form onSubmit={handleRegister}>
          <div className="my-3">
            <label htmlFor="">Username:</label>
            <br />
            <input
              type="text"
              placeholder="Masukan nama "
              className="py-2 px-2 w-full rounded-md shadow-sm border-2 "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">email:</label>
            <br />
            <input
              type="email"
              placeholder="Masukan Email "
              className="py-2 px-2 w-full rounded-md shadow-sm border-2 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Password:</label>
            <br />
            <input
              type="password"
              placeholder="Masukan Password "
              className="py-2 px-2 w-full rounded-md shadow-sm border-2 "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 px-2 rounded-md cursor-pointer font-semibold text-white"
          >
            Register
          </button>
        </form>
        <p className="text-gray-800 mt-2">
          Sudah punya akun?{" "}
          <Link to="/login">
            {" "}
            <span className="text-blue-500">Login Sekarang</span>
          </Link>
        </p>
        <Link to="/">
          {" "}
          <p className=" underline text-blue-500">Kembali ke Homepage</p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
