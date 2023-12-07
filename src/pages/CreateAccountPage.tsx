import { useState } from "react";
import { Link } from "react-router-dom";
import { CreateAccount } from "../components/CreateAccount";
import "/workspaces/MixologyGram/src/components/css/login.css";

export function CreateAccountPage() {
  return (
    <div className="login">
    <div className="box-login">
      <h1 className="NeonText">Criar Conta</h1>
      <CreateAccount />
      <Link to="/">Voltar para Home</Link>
   </div>
   </div>
  );
}