import PropTypes from 'prop-types';
import './Profile.css'; // Import your CSS file

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={image}
          alt="User avatar"
          className="profile-image"
        />
        <div className="profile-info">
          <p className="profile-name">{name}</p>
          <p className="profile-tag">@{tag}</p>
          <p className="profile-location">{location}</p>
        </div>
      </div>

      <ul className="profile-stats-list">
        <li className="profile-stats-item">
          <span className="profile-stats-label">Followers</span>
          <span className="profile-stats-value">{followers}</span>
        </li>
        <li className="profile-stats-item">
          <span className="profile-stats-label">Views</span>
          <span className="profile-stats-value">{views}</span>
        </li>
        <li className="profile-stats-item">
          <span className="profile-stats-label">Likes</span>
          <span className="profile-stats-value">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Profile;
