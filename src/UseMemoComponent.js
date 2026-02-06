import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [list, setList] = useState([1, 3, 75, 80]);
  const [newValue, setNewValue] = useState("");

  
  const listSum = useMemo(() => {
    return list.reduce((acc, curr) => acc + curr, 0);
  }, [list]);

  const addItem = () => {
    if (newValue.trim() !== "" && !isNaN(newValue)) {
      setList([...list, Number(newValue)]);
      setNewValue("");
    }
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Список:</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeItem(index)}>Видалити</button>
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        placeholder="Додати число"
      />
      <button onClick={addItem}>Додати</button>

      <p>Сума: {listSum}</p>
    </div>
  );
};

export default UseMemoComponent;