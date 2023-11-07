import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 className="NeonText">Home</h1>
      <Link to="/login">Login</Link>
    </>
  );
}