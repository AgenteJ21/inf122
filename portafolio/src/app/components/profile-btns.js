import style from './profile-btns.module.css';
import Image from 'next/image';
import down from '../icons/download.svg';

export default function ProfileButtons(){
    return(
        <div className={style.container}>
            <div className={style["download-btn"]}>
                <button>
                    <p>Download</p>
                    <Image src={down}></Image>
                </button>
            </div>
            <div className={style["contact-btn"]}>
                <button>
                    <p>Contact me</p>
                </button>
            </div>
        </div>
    )
}