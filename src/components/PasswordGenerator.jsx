import { useState } from "react";

import { FiCopy } from "react-icons/fi";

const PasswordGenerator = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handlePassword = () => {
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

    const generators = [];

    if (letters) {
      generators.push(getLetterLowerCase, getLetterUpperCase);
    }
    if (numbers) {
      generators.push(getNumber);
    }
    if (symbols) {
      generators.push(getSymbol);
    }

    if (generators.length === 0) {
      return;
    }

    setShowPassword(true);

    for (let i = 0; i < passwordLength; i++) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
      });
    }

    password = password.slice(0, passwordLength);

    setPassword(password);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password).then(() => {
      console.log("Copiou!");
    });
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
        <h2>Selecione as opções que você deseja:</h2>
        <div className="generate-options">
          <div className="form-control">
            <label htmlFor="length">Quantidade de caracteres:</label>
            <input
              type="range"
              min="4"
              max="15"
              onChange={(e) => setPasswordLength(e.target.value)}
              value={passwordLength}
            />
            <span>{passwordLength}</span>
          </div>
          <div className="form-control">
            <label htmlFor="letters">Letras: </label>
            <input
              type="checkbox"
              name="letters"
              id="letters"
              checked={letters}
              onChange={(e) => setLetters(e.target.checked)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="numbers">Números: </label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="symbols">Símbolos: </label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </div>
        </div>
        {showPassword && (
          <>
            <div className="generated-password">
              <p>Aqui está a sua senha:</p>
              <h4>{password}</h4>
              <button
                onClick={copyPassword}
                className="copy-password"
                title="Copiar">
                <FiCopy />
              </button>
            </div>
          </>
        )}
        <button onClick={handlePassword}>Gerar Senha</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
