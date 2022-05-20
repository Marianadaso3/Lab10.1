/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import Button from './Button';
import confcalc from './Confcalc';
import './StartApp.css';

function StartApp() {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operador, setOperacion] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);
    if (content === 'AC') {
      setValue('0');
      setMemory(null);
      setOperacion(null);
      return;
    }
    if (content === '±') {
      setValue((num * -1).toString());
      return;
    }
    if (content === '%') {
      setValue((num / 100).toString());
      setMemory(null);
      setOperacion(null);
      return;
    }
    if (content === '.') {
      if (value.includes('.')) return;

      setValue(`${value}.`);
      return;
    }
    if (content === '+') {
      if (operador !== null) {
        if (operador === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operador === '−') {
          setMemory(memory - parseFloat(value));
        } else if (operador === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operador === '÷') {
          setMemory(memory / parseFloat(value));
        } else if (operador === 'Mod') {
          setMemory((memory % parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperacion('+');
      return;
    }
    if (content === '−') {
      if (operador !== null) {
        if (operador === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operador === '−') {
          setMemory(memory - parseFloat(value));
        } else if (operador === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operador === '÷') {
          setMemory(memory / parseFloat(value));
        } else if (operador === 'Mod') {
          setMemory((memory % parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperacion('−');
      return;
    }
    if (content === '×') {
      if (operador !== null) {
        if (operador === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operador === '−') {
          setMemory(memory - parseFloat(value));
        } else if (operador === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operador === '÷') {
          setMemory(memory / parseFloat(value));
        } else if (operador === 'Mod') {
          setMemory((memory % parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperacion('×');
      return;
    }
    if (content === '÷') {
      if (operador !== null) {
        if (operador === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operador === '−') {
          setMemory(memory - parseFloat(value));
        } else if (operador === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operador === '÷') {
          setMemory(memory / parseFloat(value));
        } else if (operador === 'Mod') {
          setMemory((memory % parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperacion('÷');
      return;
    }

    if (content === 'Mod') {
      if (operador !== null) {
        if (operador === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operador === '−') {
          setMemory(memory - parseFloat(value));
        } else if (operador === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operador === '÷') {
          setMemory(memory / parseFloat(value));
        } else if (operador === 'Mod') {
          setMemory((memory % parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperacion('Mod');
      return;
    }

    if (content === '=') {
      if (!operador) return;

      if (operador === '+') {
        setValue((memory + parseFloat(value)).toString());
      } else if (operador === '−') {
        setValue((memory - parseFloat(value)).toString());
      } else if (operador === '×') {
        setValue((memory * parseFloat(value)).toString());
      } else if (operador === '÷') {
        setValue((memory / parseFloat(value)).toString());
      } else if (operador === 'Mod') {
        setValue(((memory % parseFloat(value))).toString());
      }
      setMemory(null);
      setOperacion(null);
      return;
    }

    if (value[value.length - 1] === '.') {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className="App">
      <div className="top">
        <div className="time">
          {time
            .getHours()
            .toString()
            .padStart(2, '0')}
          :
          {time
            .getMinutes()
            .toString()
            .padStart(2, '0')}
        </div>
        {/* <div className="menu">
        </div> */}
      </div>
      <div className="display">{confcalc(value)}</div>
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content="AC"
          type="funcion"
        />
        <Button onButtonClick={handleButtonPress} id="masmenos" content="±" type="funcion" />
        <Button onButtonClick={handleButtonPress} id="porcentaje" content="%" type="funcion" />
        <Button onButtonClick={handleButtonPress} id="division" content="÷" type="operador" />
        <Button onButtonClick={handleButtonPress} id="7" content="7" />
        <Button onButtonClick={handleButtonPress} id="8" content="8" />
        <Button onButtonClick={handleButtonPress} id="9" content="9" />
        <Button onButtonClick={handleButtonPress} id="multiplicacion" content="×" type="operador" />
        <Button onButtonClick={handleButtonPress} id="4" content="4" />
        <Button onButtonClick={handleButtonPress} id="5" content="5" />
        <Button onButtonClick={handleButtonPress} id="6" content="6" />
        <Button onButtonClick={handleButtonPress} id="resta" content="−" type="operador" />
        <Button onButtonClick={handleButtonPress} id="1" content="1" />
        <Button onButtonClick={handleButtonPress} id="2" content="2" />
        <Button onButtonClick={handleButtonPress} id="3" content="3" />
        <Button onButtonClick={handleButtonPress} id="suma" content="+" type="operador" />
        <Button onButtonClick={handleButtonPress} id="0" content="0" />
        <Button onButtonClick={handleButtonPress} id="punto" content="." />
        <Button onButtonClick={handleButtonPress} id="modulo" content="Mod" type="operador" />
        <Button onButtonClick={handleButtonPress} id="igual" content="=" type="operador" />
      </div>
      <div className="bottom" />
    </div>
  );
}

export default StartApp;
