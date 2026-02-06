import UseMemoComponent from './UseMemoComponent';
import { useState, memo } from 'react'
import CustomComponent from './useWindowWidth'
import './App.css';

const ItemList = ({ items, onDelete }) => {
  console.log("render"); 
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}{" "}
          <button onClick={() => onDelete(item.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};
const StaticComponent = memo(() => {
  console.log("StaticComponent render");
  return <div>StaticComponent render</div>;
});


function App() {
    const [items, setItems] = useState([
    { id: 1, name: "Елемент 1" },
    { id: 2, name: "Елемент 2" },
    { id: 3, name: "Елемент 3" },
  ]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='div'>
          <UseMemoComponent/>
      </div> 
        
      <div className='div'>
      <h2>Список елементів</h2>
      <ItemList items={items} onDelete={handleDelete} />
      <StaticComponent />
      </div>
        
        <div className='div'>
          <CustomComponent/>
        </div>

      </header>
    </div>
  );
}

export default App;
