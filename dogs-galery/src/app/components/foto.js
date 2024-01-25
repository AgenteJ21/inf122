"use client"
import Image from "next/image";
import style from './foto.module.css';
import { useState, useEffect } from 'react';

 export default function Foto(){
    const [dog, setDog] = useState("/vercel.svg")
    const [estado, setEstado] = useState("esperando")
    const [habilidad, setHabilidad] = useState("habilidad")
    const [movimiento, setMovimiento] = useState("movimiento")
    const url = "https://pokeapi.co/api/v2/pokemon/palkia";

    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setDog(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.abilities[1].ability.name),
            setMovimiento(data.moves[0].move.name)
        })
    },[]
    )

    return(
        <div className={style.container}>
            <h1>{estado}</h1>
            <Image src={dog} height={250} width={250} />
            <h1>{habilidad}</h1>
            <h1>{movimiento}</h1>
        </div>
    )
 }