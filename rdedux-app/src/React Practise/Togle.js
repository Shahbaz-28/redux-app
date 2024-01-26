import UseTogle from "../Hooks/UseTogle";

const Togle = () => {

  const {myName, setmyName}= UseTogle()

  const changeName = () => {
    let val = myName;
    setmyName(val === "Your Name" ? "Shahbaz Khan" : "Your Name");
  };

  return (
    <div>
      <h1>{myName}</h1>

      <button className="btn btn-primary" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
};

export default Togle;
