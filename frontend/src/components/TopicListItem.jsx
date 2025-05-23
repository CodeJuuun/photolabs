import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div className="topic-list__item"
         onClick={handleClick}
    >
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
