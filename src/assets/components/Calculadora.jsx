import React, { useState } from "react";
import Boton from "./Boton";

export default function Calculadora() {
  const [entrada, setEntrada] = useState("0");
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState("");
  const [total, setTotal] = useState(0);
  const [newNumero2, setNewNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const tomaSuma = () => {
    if (entrada) {
      if (suma === "+") {
        setNewNumero2("1");
      }
      setSuma("+");
      setNumero1(parseInt(entrada));
      setNumero2(parseInt(entrada));
      setEntrada("");
    }
  };

  const eliminarUltimo = () => {
    setEntrada(entrada.slice(0, -1))   
  }

  const tomaResta = () => {
    if (entrada) {
      if (suma === "-") {
        setNewNumero2("1");
      }
      setSuma("-");
      setNumero1(parseInt(entrada));
      setNumero2(parseInt(entrada));
      setEntrada("");
    }
  };

  const tomaMultiplicacion = () => {
    if (entrada) {
      if (suma === "x") {
        setNewNumero2("1");
      }
      setSuma("x");
      setNumero1(parseInt(entrada));
      setNumero2(parseInt(entrada));
      setEntrada("");
    }
  };

  const tomaDivision = () => {
    if (entrada) {
      if (suma === "/") {
        setNewNumero2("1");
      }
      setSuma("/");
      setNumero1(parseInt(entrada));
      setNumero2(parseInt(entrada));
      setEntrada("");
    }
  };

  const clean = () => {
    setTotal(0);
    setEntrada("0");
    setNumero1(0);
    setNumero2(0);
    setSuma("");
  };

  const cleanCE = () => {
    setEntrada('')
  }

  const handleClick = (valor) => {
    if (entrada === "0") {
      setEntrada(valor);
    } else {
      setEntrada(entrada + valor);
    }
  };

  const igual = () => {   
    if (suma === "+") {
      if (total === 0) {
        if (!entrada) {
          setEntrada((numero1 + numero2).toString());
          setTotal(1);
        } else {
          setTotal(1);
          setEntrada((numero1 + parseInt(entrada)).toString());
          setNumero2(entrada);
        }
      } else {
        setEntrada((parseInt(entrada) + parseInt(numero2)).toString());
        if (newNumero2 === "1") {
          setNumero2(entrada);
          setNewNumero2("");
        }
      }      
    }
    if(suma === 'x'){        
        if (total === 0) {
            if (!entrada) {
              setEntrada((numero1*numero2).toString());
              setTotal(1);
            } else {
              setTotal(1);
              setEntrada((numero1*parseInt(entrada)).toString());
              setNumero2(entrada);
            }
          } else {
            setEntrada((parseInt(entrada)*parseInt(numero2)).toString());
            if (newNumero2 === "1") {
              setNumero2(entrada);
              setNewNumero2("");
            }
          }
      }
      if(suma === '/'){
        if (total === 0) {
            if (!entrada) {
              setEntrada((numero1/numero2).toString());
              setTotal(1);
            } else {
              setTotal(1);
              setEntrada((numero1/parseInt(entrada)).toString());
              setNumero2(entrada);
            }
          } else {
            setEntrada((parseInt(entrada)/parseInt(numero2)).toString());
            if (newNumero2 === "1") {
              setNumero2(entrada);
              setNewNumero2("");
            }
          }
      }
      if(suma === '-'){
        if (total === 0) {
            if (!entrada) {
              setEntrada((numero1-numero2).toString());
              setTotal(1);
            } else {
              setTotal(1);
              setEntrada((numero1-parseInt(entrada)).toString());
              setNumero2(entrada);
            }
          } else {
            setEntrada((parseInt(entrada)-parseInt(numero2)).toString());
            if (newNumero2 === "1") {
              setNumero2(entrada);
              setNewNumero2("");
            }
          }
      }
  };

  return (
    <section className="grid grid-cols-4 justify-center rounded items-center p-1 gap-1 bg-slate-900">
      {
                entrada === "" ? 
                <input onChange={(e) => {setEntrada(e.target.value)}} maxLength={'16'} value={numero1} className="grid-  col-span-4 rounded h-10"/> 
                :
                <input onChange={(e) => {setEntrada(e.target.value)}} maxLength={'16'} value={entrada} className="grid-  col-span-4 rounded h-10"/>
                
            } 
      <button onClick={cleanCE} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">CE</button>
      <button onClick={clean} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">C</button>
      <button onClick={eliminarUltimo} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">{'<--'}</button>
      <button onClick={tomaDivision} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">%</button>
      {[7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => {
            handleClick(num.toString());
          }}
          className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300"
        >
          {num}
        </button>
      ))}
      <button onClick={tomaMultiplicacion} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">X</button>
      {[4, 5, 6].map((num) => (
        <button
          key={num}
          onClick={() => {
            handleClick(num.toString());
          }}
          className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300"
        >
          {num}
        </button>
      ))}
      <button onClick={tomaResta} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">-</button>
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => {
            handleClick(num.toString());
          }}
          className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300"
        >
          {num}
        </button>
      ))}
      <button onClick={tomaSuma} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">+</button>
      <Boton>+/-</Boton>
      <button
        onClick={() => {
          handleClick("0");
        }}
        className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300"
      >
        0
      </button>
      <button onClick={igual} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">,</button>
      <button onClick={igual} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">=</button>
    </section>
  );
}
