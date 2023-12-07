import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
    <div id="HomeText">
    <img id="logoHome" src="/imgs/logo_preta_roxa.png" alt="Logo" />
      <h1 className="NeonText">Home</h1>
      <Link to="/login">Login</Link>
      </div>
    </>
  );
}