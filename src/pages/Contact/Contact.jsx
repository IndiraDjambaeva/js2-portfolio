import React from "react";
import Usercard from "../../components/Usercard/Usercard";

function Contact() {
  return (
    <section className="contact">
      <h1>Contacts page</h1>
      <div className="container">
        <Usercard userName="Didi" userAge="55" />
      </div>
    </section>
  );
}

export default Contact;
