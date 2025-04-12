import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, profile, imageSource, location } = props.photo;
  return (
    <li>
      <img src={imageSource} alt="person holding phone" />
      <img src={profile} />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </li>

  );
};

export default PhotoListItem;
