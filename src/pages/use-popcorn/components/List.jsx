const List = (props) => {
  const { isOpen, render, movies } = props;

  if (isOpen) return null;

  return <ul className="list list-movies">{movies?.map(render)}</ul>;
};

export default List;
