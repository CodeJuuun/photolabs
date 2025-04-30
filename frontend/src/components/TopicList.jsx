import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, handleClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem 
        key={topicData.id} 
        id={topicData.id}
        title={topicData.title}
        onClick={handleClick} />
      ))}
    </div>
  );
};

export default TopicList;
