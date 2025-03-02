'use client'
import { useState } from "react"
import { MyHeader } from "../Header/Header"
import axios from "axios";

export function Carta() {
    const [data, setData] = useState<any>(null);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false)

    const fetchPokemonData = async () => {
        setloading(true);
        try {
            if (value) {
                setError("")
                const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${value}`);
                if (response.data.data.length > 0) {
                    setData(response.data.data);
                } else {
                    setError("Nenhum Pokémon encontrado.");
                }
            }
        } catch (error) {
            console.log(error);
            setError("Não foi possível fazer a requisição.");
        } finally {
            setloading(false)
        }
    }

    const fetchPokemonaleatory = async () => {
        try {
            setloading(true)
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards`)
            if (response.data) {
                setError("")
                const randomPokemons = [];
                const totalPokemons = response.data.data.length;

                for (let i = 0; i < 6; i++) {
                    const randomIndex = Math.floor(Math.random() * totalPokemons);
                    randomPokemons.push(response.data.data[randomIndex]);
                }
                setData(randomPokemons);
            } else {
                setError("não foi capaz de buscar os pokemon")
            }
        } catch (error) {
            setError("Não foi possível fazer a requisição.");
        } finally {
            setloading(false)
        }
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value.toLowerCase());
    }

    return (
        <div>
            <MyHeader />
            <div className="flex justify-center m-10 sm:m-20 bg-blue-800 rounded-2xl p-10">
                <h1 className="text-3xl sm:text-4xl text-white hover:text-[#D4AF37] hover:transition-colors ease-in duration-300">
                    Procure seu Pokémon
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
                <input
                    className="border-amber-400 border-4 outline-0 p-4 sm:p-8 text-xl sm:text-2xl mb-6 sm:mb-10 rounded-2xl w-8/12 sm:w-4/12 md:w-3/12 lg:w-6/12"
                    type="text"
                    value={value}
                    required
                    onChange={handleInput}
                />

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={fetchPokemonData}
                        className={`bg-yellow-300 
            cursor-pointer lg:w-6/12 text-white text-xl sm:text-2xl p-4 rounded-2xl w-full sm:w-5/12 md:w-3/12 
            hover:border-blue-950 border-4 hover:ease-linear 
            duration-300 transition-colors
            ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={loading}
                    >
                        Procurar
                    </button>

                    <button
                        onClick={fetchPokemonaleatory}
                        className={`bg-yellow-300 
            cursor-pointer lg:w-6/12 text-white text-xl sm:text-2xl p-4 rounded-2xl w-full sm:w-5/12 md:w-3/12 
            hover:border-blue-950 border-4 hover:ease-linear
            duration-300 transition-colors
            ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={loading}
                    >
                        Aleatórios
                    </button>
                </div>
            </div>

            {loading && (
                <div className="flex justify-center items-center">
                    <p className="text-3xl text-blue-700">Carregando...</p>
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center mt-4">
                    <p className="text-xl text-red-500 mt-3">{error}</p>
                </div>
            )}

            {data && data.length > 0 && (
                <div className="bg-blue-950 p-6 rounded-2xl mt-8">
                    <h2 className="text-white text-3xl text-center mb-10">Resultados</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
                        {data.map((card: any, index: number) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-60">
                                <img
                                    src={card.images?.small}
                                    alt={card.name}
                                    className="w-50 h-auto rounded-md"
                                />
                                <h3 className="text-xl font-bold mt-4">{card.name}</h3>
                                <p className="text-gray-700">Tipo: {card.types}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}