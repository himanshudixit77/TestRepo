import React, { useCallback, useState ,memo} from "react";

export default function UseCallBackFunc() {
  let [counter, setCounter] = useState(0);
/*
    function a()  {
        console.log("hello himans");
       
    }            This function is rendering everytime even it is not changing
    */
    
    const a = useCallback(() => {
        console.log("hello himans");
    },[])
    
  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button onClick={handleCounter}>Counter is{counter}</button>
      {<Demo a={a}></Demo>}
    </>
  );
}

// function Demo({ a }) {
//     console.log("heeeee")
//     a()
//   return <>{a}</>;
// }

const Demo=memo(function Demo({ a }) {
    console.log("heeeee")
    a()
  return <>{a}</>;
}
)

