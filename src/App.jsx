import React, { useState } from "react";

function App() {
  // Task 1
  const name ='hello world'
  // Task 2
  // const obj = {name: "Hello World Object"}

  // Task 3
  // const data = ["We", "are", "United"]; //Show these in seperate tags

  // Task 4
  // const list = [
  //   { name: "Hello World 1" },
  //   { name: "Hello World 2" },
  //   { name: "Hello World 3" },
  // ];
  //Show these in seperate tags

  // Task 5
  // const complex = [
  //   { company: "XYZ", jobs: ["Javascript,", "React"] },
  //   { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  // ];
  //Show these in a Table
  return (
    <>
      <h1>{name}</h1>
      {/* <h1>{obj.name}</h1> */}
      {/* <ul>
      <li>{data[0]}</li>
      <li>{data[1]}</li>
      <li>{data[2]}</li>
    </ul> */}
      {/* <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}

      {/* <ul>{list.map((item,index)=>{
return(
  <li key={index}>{item.name}</li>
)

})}</ul> */}

      {/* <table>
        {complex.map((item, index) => {
          return (
            <>
              <tr>
                <td>{item.company}</td>
              </tr>
              <tr>
                <td>{item.jobs}</td>
              </tr>
            </>
          );
        })}
      </table> */}
    </>
  );
}

export default App;
