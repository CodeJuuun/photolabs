import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* {isFavPhotoExist && <FavIcon displayAlert={true}/>} */}
      <FavIcon displayAlert={isFavPhotoExist ? true : false} selected={isFavPhotoExist ? true : false} />
    </div>
  ) 
};

export default FavBadge;
