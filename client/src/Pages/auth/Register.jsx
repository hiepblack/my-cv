import React, { useState } from "react";
import "./register.css";
import { Link,useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { BASE_URL } from "../../hook";

const userSchema = object({
  username: string().required("vui long nhap username"),
  email: string().required("vui long nhap day du email"),
  password: string().required("vui long nhap day du pass").min(6).max(10),
});

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const handleRegister =async (e)=>{
    e.preventDefault();
    const dataRegister={
      username,
      email,
      password,
    }
    await userSchema.validate(dataRegister,{abortEarly:false}).then(()=>{
      fetch(`${BASE_URL}/api/v1/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataRegister),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
              alert(data.message)
              navigate("/auth/login");
          });
    }).catch(err=>{
        err.errors.forEach((error) => alert(error));
    })
  }
  return (
    <section className="login">
      <div className="login__form">
        <div>
          <i class="bx bx-mouse-alt icon"></i>
        </div>
        <form onSubmit={handleRegister}>
          <h3>Welcome Friend</h3>
          <div className="form__input">
            <input
              type="text"
              id="username"
              placeholder="Username..."
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="form__input">
            <input
              type="email"
              id="username"
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
            Do you know account ?<Link to="/auth/login">Login In</Link>
          </div>
        </form>
        <div></div>
      </div>
    </section>
  );
};

export default Register;
