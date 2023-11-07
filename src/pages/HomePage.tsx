import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
    <div id="HomeText">
      <h1 className="NeonText">Home</h1>
      <Link to="/login">Login</Link>
      </div>
    </>
  );
}