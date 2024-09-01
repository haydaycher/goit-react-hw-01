import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={css.list}>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem item={friend} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
