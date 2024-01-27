import Image from "next/image";
import style from './tabs-img.module.css';
import img1 from '../images/kitchen.jpeg';
import img2 from '../images/bussiness_man.png';
import img3 from '../images/pictures_wall.jpeg';
import img4 from '../images/kitchen.jpeg';
import img5 from '../images/mobile_app.png';
import img6 from '../images/issima_page.png';
import link from '../icons/link.svg';

export default function TabsImages(){
    return(
        <div className={style.container}>
            <figure>
                <Image src={img1}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
            <figure>
                <Image src={img2}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
            <figure>
                <Image src={img3}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
            <figure>
                <Image src={img4}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
            <figure>
                <Image src={img5}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
            <figure>
                <Image src={img6}></Image>
                <div className={style.cap}>
                    <h3>SmarterTrading411</h3>
                    <p>Landing page of SmarterTrading411 created using wordPress</p>
                    <div className={style["link-icon"]}>
                        <Image src={link} width={20} height={20}></Image>
                    </div>
                </div>
            </figure>
        </div>
    )
}