import React, { useRef } from "react";
import "./styles.css";
import TextFieldCustom from "../../atoms/Login/textfieldcustom";
import ButtonCustom from "../../atoms/Login/buttoncustom";
import { handleLoginEmailAndPassword } from "../../../services/firebase";
import Notification from "../../../utils/Notification";
import { useHistory } from "react-router-dom";

function LoginContainer() {
  const emailRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const handleClickLogin = async () => {
    handleLoginEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((resp) => {
        history.push(`/admin/u/${resp}`);
      })
      .catch((e) => Notification("Erro login", e.message, "danger"));
  };
  return (
    <div className="login-container">
      <TextFieldCustom
        inputRef={emailRef}
        placeholder="Digite seu email."
        id="email"
        label="Email:"
      />
      <TextFieldCustom
        inputRef={passRef}
        placeholder="Digite sua senha."
        id="password"
        label="Senha:"
        type="password"
      />
      <ButtonCustom text="Entrar" click={handleClickLogin} />
    </div>
  );
}

export default LoginContainer;
