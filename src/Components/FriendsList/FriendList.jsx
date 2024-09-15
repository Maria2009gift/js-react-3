import style from './FriendsList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <section> 
      <ul className={style.list}>
        {friends.map((friend) => (
          <li key={friend.id} className={friend.isOnline === true ? style.online : style.ofline}>
            <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={style.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
