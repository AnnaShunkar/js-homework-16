import { useMemo, useState } from 'react';

const UseMemoComponent = () => {
    const [list, setList] = useState([1, 3, 75, 80]);

    const listSum = useMemo(() => list.reduce((accumulator, currentValue) => accumulator + currentValue, 0), [list]);
    return (
        <div>
            <p>Список: {list.map((list) => <li>{list}</li> )}</p>
            <p>Сума: {listSum} </p>
        </div>
    )
};
export default UseMemoComponent;