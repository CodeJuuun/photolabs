import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, profile, imageSource, location } = props.photo;
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt="person holding phone" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt="image of a person" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <div className="photo-list__user-location">
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
