
import './FriendListItem.css'; // Імпортуємо CSS для стилізації

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img src={avatar} alt="Avatar" width="48" />
      <div>
        <p>{name}</p>
        <p className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
};

export default FriendListItem;
