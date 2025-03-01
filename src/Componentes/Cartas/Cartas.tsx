'use client'
import { useState } from "react"
import { MyHeader } from "../Header/Header"
import axios from "axios";

export function Carta() {
    const [data,setdata]=useState<string>("");
    const [value, setValue] = useState<string>("");

    function HandleInput(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event.target.value.toLowerCase());

    }
    return (
      

        <div>
            <MyHeader />
            <div className="flex justify-center m-28 bg-blue-800 rounded-2xl  p-10  ">
                <h1 className="text-4xl text-white hover:text-[#D4AF37] hover:transition-colors ease-in duration-300">Procure seu Pokemon</h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <input className="border-amber-400 border-4 outline-0 p-8 text-2xl mb-10 rounded-2xl w-4/10" type="text"
                 value={value}
                 required
                 />
                <button className="bg-blue-500  text-white text-2xl p-4 rounded-2xl w-2/12 hover:border-blue-950 border-4 hover:ease-linear duration-300 transition-colors">Procurar</button>
            </div>

        </div>



    )
}