import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img src={image} alt={name} className={css.image} />
        <p className={css.titleName}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.ulList}>
        <li className={css.item}>
          <span className={css.elementsTitle}>Followers</span>
          <span className={css.counter}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.elementsTitle}>Views</span>
          <span className={css.counter}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.elementsTitle}>Likes</span>
          <span className={css.counter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
