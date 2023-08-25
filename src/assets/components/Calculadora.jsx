import Boton from "./Boton"
import { useState } from "react"
export default function Calculadora(){
    const [entrada, setEntrada] = useState(0)
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [suma, setSuma] = useState()
    const [total, setTotal] = useState(0)
    const [newNumero2, setNewNumero2] = useState()
    const [resultado, setResultado] = useState(0)


    const tomaSuma = () => {
        if(entrada){
            if(suma === '+'){
                setNewNumero2(1)
            }
            setSuma("+")
            setNumero1(parseInt(entrada))     
            setNumero2(parseInt(entrada))
            setEntrada("")
        }
        
    }
    const clean = () => {
        setTotal(0)
        setEntrada(0)
        setNumero1(0)
        setNumero2(0)
        setSuma()
    }
    const handleClick = (valor) => {           
        
        if(entrada === 0){
            setEntrada(valor)  
                  
        }
        if(entrada !==0){
            setEntrada(entrada+valor)            
        }
        
        
    }
    const igual = () => {  
        if(suma === "+"){    
            if(total === 0){                
                setTotal(1)
                setEntrada(numero1+parseInt(entrada))
                setNumero2(entrada)   
            }
            if(total !== 0){                
                setEntrada(parseInt(entrada)+parseInt(numero2))   
                if(newNumero2===1){
                    setNumero2(entrada)
                    setNewNumero2('')
                }            
                

                console.log(numero1,':num1',numero2,':num2',entrada,':entrada')
            }       
        }
    }

    return(
        <section className="grid grid-cols-4 justify-center rounded items-center p-1 gap-1 bg-slate-900">    
            {
                entrada === "" ? 
                <input onChange={(e) => {setEntrada(e.target.value)}} maxLength={'16'} value={numero1} className="grid-  col-span-4 rounded h-10"/> 
                :
                <input onChange={(e) => {setEntrada(e.target.value)}} maxLength={'16'} value={entrada} className="grid-  col-span-4 rounded h-10"/>
                
            } 
            <button className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">CE.</button>
            <button onClick={clean} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">C.</button>
            <Boton>{'<--'}</Boton>
            <Boton>%</Boton>            
            <button onClick={() => {handleClick('7')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">7</button>
            <button onClick={() => {handleClick('8')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">8</button>
            <button onClick={() => {handleClick('9')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">9</button>
            <Boton>X</Boton>
            <button onClick={() => {handleClick('4')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">4</button>
            <button onClick={() => {handleClick('5')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">5.</button>
            <button onClick={() => {handleClick('6')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">6.</button>
            <Boton>-</Boton>
            <button onClick={() => {handleClick('1')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">1</button>
            <button onClick={() => {handleClick('2')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">2</button>
            <button onClick={() => {handleClick('3')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">3</button>
            <button onClick={tomaSuma} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">+</button>
            <Boton>+/-</Boton>
            <button onClick={() => {handleClick('0')}} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">0</button>
            <button onClick={igual} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">,</button>
            <button onClick={igual} className="border-0 rounded h-10 w-14 bg-slate-50 hover:bg-slate-300">=</button>
            
        </section>
    )
}