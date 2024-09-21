import style from './Profile.module.css'

export const Profile = ({user}) => {
  return (
    <div className={style.globalContainer}>
      <div className={style.container}>
        <img
          src={user.avatar}
          alt="User avatar"
          className={style.avatar}
        />
        <p className={style.info}>{user.username}</p>
        <p className={style.info}>@{user.tag}</p>
        <p className={style.info}>{user.location}</p>
      </div>

      <ul className={style.list}>
        <li>
          <span className={style.stats}>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span className={style.stats}>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li>
          <span className={style.stats}>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

