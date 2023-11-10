import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from '../components/Login';
import "../components/css/login.css";

export function LoginPage() {

  return (
    <div className="box-login">
      <h1 className="NeonText">Login</h1>
      <Login />
      <Link to="/">Voltar para Home</Link>
   </div>
  );
}