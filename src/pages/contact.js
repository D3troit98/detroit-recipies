import React from "react";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Thanks for visiting DetroitRecipes! We're always happy to hear
              from our visitors. If you have any questions, suggestions, or
              feedback, please don't hesitate to get in touch with us using the
              contact form below.
            </p>
            <p>
              You can also connect with us on social media to stay up-to-date
              with the latest recipes and news from DetroitRecipes.
            </p>
            <p>We look forward to hearing from you!</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default contact;
