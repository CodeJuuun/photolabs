import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, profile, imageSource, location } = props.data;
  return (
    <div>
      <img src={imageSource} />
      <img src={profile} />
     <p>{username}</p> 
     <p>{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;
