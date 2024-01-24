"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './dogs.modules.css';

export default function Dog(){
    const [dog, setDog] = useState("/vercel.svg")

    const url = "https://dog.ceo/api/breed/hound/english/images/random"
    
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setDog(data.message)
        })
    },[]
    )

    return(
        <div>
            <h1 className={style.box}>Dogs</h1>
            <Image src={dog} alt="dog" width={500} height={500} />
        </div>
    );
}