import "../styles/contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hmfqi4",
        "template_svsdrp1",
        form.current,
        "otBUQ1keufNNJ59e0"
      )
      .then(
        () => {
          setSuccess("✅ Thank you! Your message has been sent successfully.");
          form.current.reset();
        },
        (error) => {
          setSuccess("❌ Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        Quick learner, always eager to explore new technologies. Open to
        internships, collaborations, and exciting opportunities.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> lakshmisrikatteboina@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9573467919
        </p>
        <p>
          <strong>Location:</strong> Telangana, India
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      {success && <p className="success-message">{success}</p>}

      <div className="contact-buttons">
        <a
          href="mailto:lakshmisrikatteboina@gmail.com"
          className="btn"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/lakshmi-sri-katteboina-89ba363b2/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/2410030279-dotcom"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;