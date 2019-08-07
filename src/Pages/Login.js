import React from "react";
import api from "../services/api";
import logo from "../assets/logo.svg";
import "./Login.css";

export default function Login({ history }) {
  const [username, setUsername] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", { username });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="logo tindev" />
        <input
          type="text"
          placeholder="digite seu usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
