import Image from "next/image";

export default function Pokemon({ name, image, imageShiny, weight, abilities}) {
  return (
    <section > 
        <section className="flex md:flex-row flex-col"> 
            <Image
            src= {image}
            width={250}
            height={250}
            alt="Pokemon!"
            />

            <Image
            src= {imageShiny}
            width={250}
            height={250}
            alt="Pokemon!"
            />
        </section>
      
    <h1>
      {name}
    </h1>

    <h2>weight {weight}</h2>
    <h3>Abilities:</h3>
    {
        abilities.map(ability => (
            <h2>{ability.ability.name}</h2>
        ))
    }
  </section>
    
  );
}
