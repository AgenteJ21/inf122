import style from './stats.module.css';

export default function Stats(){
    return(
        <div className={style.container}>
            <div className={style["card-text"]} >
                <h3>7</h3>
                <p>Years of work experience</p>
            </div>
            <div className={style["card-text"]}>
                <h3>50+</h3>
                <p>Completed projects</p>
            </div>
            <div className={style["card-text"]}>
                <h3>20+</h3>
                <p>Satisfied customers</p>
            </div>
        </div>
    )
}