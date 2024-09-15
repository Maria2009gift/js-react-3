
import style from './Statistics.module.css'

export const Statistics = ({stats}) => {
    console.log(stats);
    return (
        <section className={style.section}>
            <h2 className={style.title}>Upload stats</h2>
            <ul className={style.list}>
                {stats.map(stat => 
                    <li key={stat.id} className={style.item}>
                        <span className={style.label}>{stat.label}</span>
                        <span class={style.percentage}>{stat.percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    )
}
