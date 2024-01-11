import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  return (
    <>
      <CustomizeButton />
    </>
  );
}

function CustomizeButton() {
  const [title, setTitle] = useState("");

  const handleClick = () => {
    setTitle("you have click " + Math.random());
  };
  return (
    <>
      <button
        type="submit"
        onClick={handleClick}
        style={{
          height: 30,
          width: 70,
        }}className="btn btn-primary"
      >
        Click it
      </button>
      <br></br>
      <NameofTitle name={title}></NameofTitle>
    </>
  );
}
function NameofTitle({ name }) {
  return (
    <>
      {name}
      <br></br>
      <Surname
        surname={{
          naam: "Snehal abli",
        }}
      ></Surname>
    </>
  );
}
function Surname({ surname }) {
  return <>{surname.naam}</>;
}

export default Header;
