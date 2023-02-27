import { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [op, setOp] = useState('suma');
  let total = 0;

  const handleNumberA = (ev) => {
    const inputValue = ev.target.value;
    setNumberA(inputValue);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleOp = (ev) => {
    setOp(ev.target.value);
  };

  const handleReset = () => {
    setOp('suma');
    setNumberA(0);
    setNumberB(0);
    total = 0;
  };

  const calc = () => {
    if (op === 'suma') {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (op === 'resta') {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (op === 'multiplicación') {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (op === 'división') {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  return (
    <div className="body">
      <h1 className="title">Calculadora:</h1>
      <form className="calc">
        <label className="label" htmlFor="op">
          Operación:
          <select
            className="box"
            name="op"
            id="op"
            value={op}
            onChange={handleOp}
          >
            <option value="suma">suma</option>
            <option value="resta">resta</option>
            <option value="multiplicación">multiplicación</option>
            <option value="división">división</option>
          </select>
        </label>
        <label className="label">
          Escribe un número:
          <input
            className="box"
            type="number"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label className="label">
          Escribe otro número:
          <input
            className="box"
            type="number"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>
      </form>
      <p className="result">
        La {op} de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {calc()}</strong>.
      </p>
      <button className="reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default App;
