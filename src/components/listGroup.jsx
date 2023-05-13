const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect,
}) => {
  return (
    <ul className="list list--tick list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            item._id === selectedItem._id
              ? "list-group-item list__item active"
              : "list-group-item list__item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
