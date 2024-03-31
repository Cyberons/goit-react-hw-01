
import './FriendListItem.css'; // Імпортуємо CSS для стилізації

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {/* Використовуємо тернарний оператор для визначення тексту та класу стилів */}
      <p className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
