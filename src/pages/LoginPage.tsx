import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-300">
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-1/3 h-[360px] bg-white rounded-xl shadow-md p-8  ">
          <h2 className="text-center text-blue-500 text-3xl font-bold">
            Login Page
          </h2>
          <form onSubmit={handleLogin}>
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
              Login
            </button>
            <p className="text-gray-800 my-2">
              Tidak punya akun?{" "}
              <Link to="/register">
                {" "}
                <span className="text-blue-500"> Daftar Sekarang</span>
              </Link>
            </p>
            <Link to="/">
              {" "}
              <p className=" underline text-blue-500">Kembali ke Homepage</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
