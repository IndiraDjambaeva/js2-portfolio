import React from "react";
import "./about.scss";
import Usercard from "../../components/Usercard/Usercard";

function About() {
  const users = [
    {
      name: "John Doe",
      age: 15,
    },
    {
      name: "Pete Doe",
      age: 20,
    },
    {
      name: "Mariya Doe",
      age: 26,
    },
    {
      name: "Anna Doe",
      age: 18,
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <h1>About us. It's Interesting</h1>
        <h2>This page will be redeveloped soon</h2>
        <h3>Our Users</h3>
        {users.map((user, idx) => {
          return (
            <Usercard
              userName={user.name}
              userAge={user.age}
              key={`${idx}-${user.name}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default About;
