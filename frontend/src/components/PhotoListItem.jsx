import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, profile, imageSource, location } = props.data;
  return (
    <ul>
      <li>
        <img src={imageSource} />
        <img src={profile} />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </li>
    </ul>
  );
};

export default PhotoListItem;
