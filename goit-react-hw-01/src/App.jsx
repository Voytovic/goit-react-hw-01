import Profile from "./components/profile/Profile.jsx";
import FriendList from "./components/friendList/FriendList.jsx;
import TransactionHistory from "./components/transactionHistory/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import "./App.css"

export default function App() {
  return (
    <>
      <p className="title">Task 1</p>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p className="title">Task 2</p>
      <FriendList friends={friends} />
      <p className="title">Task 3</p>
      <TransactionHistory items={transactions} />
    </>
  );
}