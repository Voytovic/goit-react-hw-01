import FriendListItem from "../friendListItem2/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
