// import React, { useState } from "react";

// export default function UseMemoFunc() {
//   let [number, setNumber] = useState("");
//   function handleNumber(e) {
//     setNumber(e.target.value);
//   }

//   return (
//     <>
//       <div
//         style={{
//           border: "5px solid blue",
//           padding: "5px",
//           width: "225px",
//         }}
//       >
//         <input type="text" onChange={handleNumber} />
//         <br></br>
//         {number != " " && (
//           <p>
//             Sum of numbers up to {number}: {sum}
//           </p>
//         )}

//         <p>Sum is {sum(number)}</p>
//         <br></br>
//         <Button></Button>
//       </div>
//     </>
//   );

//   function sum(N) {
//     let sum = 0;
//     const num = parseInt(N);
//     if (!isNaN(num)) {
//       sum = (num * (num + 1)) / 2;
//     }
//     return sum;
//   }

//   function Button() {
//     const [count, setCount] = useState(0);
//     function handleClick() {
//       setCount(count + 1);
//     }

//     return (
//       <>
//         {count >= 0 && (
//           <button onClick={handleClick}>Counter is {count}</button>
//         )}
//       </>
//     );
//   }
// }


import React
, { useMemo, useState }    from "react";

export default function UseMemoFunc(){
    
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    let sum = useMemo(() => {
        let num=parseInt(number)
        return ((num * (num + 1)) / 2);
    },[number])

    function handleClick() {
               setCounter(counter + 1);
    }
    
    function handleInput(e) {
        console.log(e.target.value)
        console.log( typeof e.target.value)
        setNumber(e.target.value);
      }
    return (
        <>
            <input type="text" onChange={ handleInput} value={number} /><br></br>
            <p>Sum is {sum }</p><br></br>
            <button onClick={handleClick}>Counter is {counter }</button>
        </>
    )
    }