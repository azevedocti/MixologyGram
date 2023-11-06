import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 className="Neon Lights">Home</h1>
      <Link to="/login">Login</Link>
    </>
  );
}