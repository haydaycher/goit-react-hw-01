import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({ item: { avatar, name, isOnline } }) {
  const statusClsx = clsx(
    css.statusText,
    isOnline ? css.isActive : css.isRetired
  );

  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="50" className={css.img} />
      <p className={css.title}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
