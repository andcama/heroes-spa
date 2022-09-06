import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthConttext } from "../context/AuthConttext";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { Login } = useContext(AuthConttext);
  const onLogin = () => {

     const lastPath = localStorage.getItem('lastPath') || '/';
    Login("Andres Camacho");

    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
