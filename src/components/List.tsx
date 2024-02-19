import { useEffect, useState } from "react";
import Details from "./Details";
import { ListGroup } from "react-bootstrap";

type Item = {
  id: number;
  name: string;
};

const List = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );
      const data = await response.json();
      setData(data);
    })();
    setLoading(false);
  }, []);

  return (
    <>
      <div className="list">
        <ListGroup>
          {loading
            ? "Loading..."
            : data.map((item: Item) => (
              <ListGroup.Item
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                active={selectedId === item.id ? true : false}
              >
                {item.name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      {selectedId ? <Details id={selectedId} /> : null}
    </>
  );
};

export default List;
