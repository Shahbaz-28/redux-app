import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetApi from "../Hooks/get_user_hook";
import Card from "react-bootstrap/Card";

const UserData = () => {
  const { data } = useGetApi();

  console.log("Data in Card", data);

  return (
    <>
      <div>
        <div className="main-box">
          {data &&
            data.map((ele) => (
              <Card style={{ width: "50%", margin: "8px" }} key={ele.id}>
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {ele.email}
                  </Card.Subtitle>
                  <Card.Text>{ele.gender}</Card.Text>
                  <Card.Link href="#">View</Card.Link>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserData;
