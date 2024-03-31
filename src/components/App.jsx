
import Profile from './Profile/Profile.jsx';
import FriendsList from './FriendList/FriendsList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'; // Імпортуємо компонент TransactionHistory
import userData from "../userData.json";
import friends from "../friends.json";  
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} /> {/* Передаємо дані про транзакції через пропс items */}
    </>
  );
};

export default App;
