import React from "react";
import { useForm } from "react-hook-form";

import "./contact.scss";

function Contact() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section className="contact">
      <h1>Our Contacts</h1>
      <div className="container contact__container">
        <div className="contact_col">
          <form onSubmit={handleSubmit(onSubmit())}>
            <label>
              Your name
              <input
                placeholder="John Doe"
                {...register("name", {
                  required: "The name must be filled in!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 symbols!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message ||"Error!"}</p>}
            </div>

            <label>
              Your Email
              <input
                placeholder="john@company.com"
                {...register("email", {
                  required: "Email must be filled in!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Please, input correct email!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.email && <p>{errors?.email?.message ||"Error!"}</p>}
            </div>

            <label>
              Your Message
              <textarea
                {...register("msg", {
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 symbols",
                  },
                })}
              ></textarea>
            </label>
            <div className="contact__error">
              {errors?.msg && <p>{errors?.msg?.message ||"Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
