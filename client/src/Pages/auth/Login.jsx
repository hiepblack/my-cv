import React from "react";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { BASE_URL } from "../../hook";

const userSchema = object({
  email: string().required("vui long nhap day du email"),
  password: string().required("vui long nhap day du pass"),
});

const Login = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showLoginForm = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const dataLogin = {
      email,
      password,
    };

    await userSchema
      .validate(dataLogin, { abortEarly: false })
      .then(() => {
        fetch(`${BASE_URL}/api/v1/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataLogin),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.role === "customer") {
              navigate("/");
            }
            if (data.role === "admin") {
              navigate("/admin");
            }
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("isAuth",true);
          });
      })
      .catch((error) => {
        error.errors.forEach((error) => alert(error));
      });
  };
  return (
    <section className="login">
      {open ? (
        ""
      ) : (
        <div className="login__intro">
          <p className="login__icon">
            <i class="bx bx-mouse-alt icon"></i>
          </p>
          <h2 className="login__title">Welcome To My Portfolio</h2>
          <span className="login__subtitle">
            Log in with your account to continue
          </span>
          <div className="login__button">
            <button onClick={showLoginForm}>Login</button>
            <Link to="/auth/register">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      )}

      {open ? (
        <div className="login__form">
          <div>
            <i class="bx bx-mouse-alt icon"></i>
          </div>
          <form onSubmit={handleSignIn}>
            <h3>Welcome back</h3>
            <div className="form__input">
              <input
                type="email"
                id="email"
                placeholder="Email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form__input">
              <input
                type="password"
                id="password"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit">Continue</button>
            <div className="sign__back">
              Do you know account ?<Link to="/auth/register">Sign In</Link>
            </div>
            <div class="social">
              <div class="go">
                <i class="bx bxl-google"></i>Continue With Google
              </div>
              <div class="fb">
                <i class="bx bxl-facebook"></i>Continue With Facebook
              </div>
            </div>
          </form>
          <div></div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Login;
