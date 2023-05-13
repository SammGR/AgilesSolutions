const Select = ({ items, label, value, searchQuery, onValueChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="genre">{label}</label>
      <select
        value={value}
        onChange={(e) => onValueChange(e.currentTarget.value)}
      >
        <option value="" />
        {items.map((item) => (
          <option key={item._id || item} value={item._id || item}>
            {item.name || item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
