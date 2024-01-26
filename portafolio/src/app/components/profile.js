import Image from "next/image";
import style from './profile.module.css';
import prof from '../images/perfil_picture.jpeg';
import git from '../icons/github.svg';
import link from '../icons/linkedin.svg';
import twitt from '../icons/twitter.svg';
import yt from '../icons/youtube.svg';

export default function Profile(){
    return(
        <div className={style.container}>
            <div> 
                <Image src={prof} className={style["profile-image"]}></Image>
            </div>
            <div className={style["text-container"]}>
                <h1 className={style.title}>Victor Alvarado</h1>
                <p className={style["short-description"]}>Software Engineer</p>
                <div className={style["icons-container"]}>
                    <Image src={git}></Image>
                    <Image src={twitt}></Image>
                    <Image src={link}></Image>
                    <Image src={yt}></Image>
                </div>
            </div>
        </div>
    )
}