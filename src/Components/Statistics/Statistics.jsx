
export const Statistics = ({stats}) => {
    console.log(stats);
    return (
        <section>
            <h2>Upload stats</h2>
            <ul>
                {stats.map(stat => 
                    <li key={stat.id}>
                        <span class="label">{stat.label}</span>
                        <span class="percentage">{stat.percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    )
}
