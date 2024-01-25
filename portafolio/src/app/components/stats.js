import style from './stats.module.css';

export default function Stats(){
    return(
        <div className={style.container}>
            <div className={style["card-text"]} >
                <h3>1</h3>
                <p>Frist Stat</p>
            </div>
            <div className={style["card-text"]}>
                <h3>2</h3>
                <p>Second Stat</p>
            </div>
            <div className={style["card-text"]}>
                <h3>3</h3>
                <p>Third Stat</p>
            </div>
        </div>
    )
}