import React from "react";

function Class() {
  const classrooms = [
    {
      title: "PHP",
      price: 1000,
    },
    {
      title: "Python",
      price: 1600,
    },
    {
      title: "SQL",
      price: 700,
    },
  ];
  return (
    <ul>
      {classrooms.map((classroom, index) => {
        return (
          <>
            {classroom.price < 1000 ? (<li key={index}>Lớp học: {classroom.title} - Giá: {classroom.price}</li>) : ("")}
          </>
        );
      })}
    </ul>
  );
}

export default Class;
