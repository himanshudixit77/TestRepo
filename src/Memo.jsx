// use of react.memo for understanding
 //------------------------------------------

// import { useState } from "react";

// export function Memo() {
//   const [title, setTitle] = useState("");
//   //  const[TitleList, setList] = useState([ ])

//   const handleClick = () => {
//     setTitle("my name is " + Math.random());

//     // let newtitle = [title +" ", ...TitleList]
//     //setList(newtitle)
//   };

//   return (
//     <div>
//       <button
//         style={{
//           height: 30,
//           width: 60,
//         }}
//         type="Submit"
//         onClick={handleClick}
//       >
//         Click
//       </button>

//       <Name prop={title}></Name>
//       {<Name prop="dixit" />}
//       {/*<Name prop={TitleList}></Name><br></br>*/}
//       {<SurName surname={{ name: "mishra", age: 25 }}></SurName> }
//     </div>
//   );
// }

// function Name({ prop }) {
//   return <div>{prop}</div>;
// }
// function SurName({ surname }) {
//   return (
//     <>
//       {surname.name}
//       <br></br>
//       {surname.age}
//     </>
//   );
// }

// export default Memo;

import React ,{memo, useState} from "react";
export function Memo() {
    const [title, setTitle] = useState("");
    //   //  const[TitleList, setList] = useState([ ])
    
    const handleClick = () => {
        setTitle("my name is " + Math.random());
    }
        return (
            <div>
                <button
                    style={{
                        height: 30,
                        width: 60,
                    }}
                    type="Submit"
                    onClick={handleClick}
                >
                    Click
                </button>

                <Name prop={title}></Name>
                {<Name prop="dixit" />}
                {<Name prop="himanshu" />}
                {<Name prop="j2" />}
                {<Name prop="kanpur" />}
                {/*<Name prop={TitleList}></Name><br></br>*/}
                {/*<SurName surname={{ name: "mishra", age: 25 }}></SurName>*/}
            </div>
    )
}
// function Name({ prop }) {
//      return <div>{prop}</div>;
// }
    
const Name = memo(function Name({ prop }) {
    return <div>{ prop}</div>
})