'use client';
import Button from "@/components/Button";
import Pokemon from "@/components/Pokemon";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    changePokemon()

  }, []); // Empty dependency array ensures this runs once when the component mounts

  async function changePokemon() {
    console.log("hi");
    // Example of changing the Pokémon, you can replace this with actual API call or logic
    const randInt = Math.floor(Math.random() * 1000) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randInt}/`;

    const resp = await fetch(url);
    const data = await resp.json();
    setData(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello world</h1>

      {data.name ? (
        <Pokemon name={data.name} image = {data.sprites.front_default} imageShiny={data.sprites.front_shiny} weight={data.weight} abilities = {data.abilities} />
      ) : (
        <p>Loading...</p>
      )}

      
      <Button text="click" onClick={changePokemon} className="bg-gray-300 px-2 py-0.5 rounded-md shadow-md outline-1 outline outline-gray-500"></Button>
    </main>
  );
}
