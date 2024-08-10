import { useState } from "react";

const PasswordGenerator = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  const handlePassword = () => {
    setShowPassword(true);

    generatePassword(
      getLetterLowerCase,
      getLetterUpperCase,
      getNumber,
      getSymbol
    );
  };

  const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
  };

  const getSymbol = () => {
    const symbols = "(){}+=*&%$#@!/:;><";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const generatePassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ) => {
    let password = "";

    const generators = [
      getLetterLowerCase,
      getLetterUpperCase,
      getNumber,
      getSymbol,
    ];

    for (let i = 0; i < passwordLength; i = i + 4) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
      });
    }

    setPassword(password);
  };

  return (
    <div className="generate-all">
      <div className="banner">
        <div className="banner-layer">
          <div className="banner-h1">
            <h1>Seja bem-vindo!</h1>
          </div>
        </div>
      </div>
      <div className="generate-form">
        <h1>
          Gerador de senhas do <span>Roro</span>{" "}
        </h1>
        {showPassword && (
          <>
            <div className="generated-password">
              <p>Aqui está a sua senha:</p>
              <h4>{password}</h4>
            </div>
          </>
        )}
        <button onClick={handlePassword}>Gerar Senha</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
