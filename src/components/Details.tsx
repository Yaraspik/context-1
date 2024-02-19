import { useEffect, useState } from "react";
import { ListGroup, Card } from "react-bootstrap";

const Details = ({ id }: { id: number }) => {
  const [data, setData] = useState({
    avatar: "",
    name: "",
    details: { city: "", company: "", position: "" },
  });

  useEffect(() => {
    (async () => {
      const url = encodeURI(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      );
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    })();
  }, [id]);

  return (
    <>
      {data ? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.avatar} alt={data.name} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>City: {data.details.city}</ListGroup.Item>
              <ListGroup.Item>Company: {data.details.company}</ListGroup.Item>
              <ListGroup.Item>Position: {data.details.position}</ListGroup.Item>
            </ListGroup>
          </Card>
        </>
      ) : null}
    </>
  );
};

export default Details;
