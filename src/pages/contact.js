import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
const contact = ({ data }) => {
  const recipes = data.allContentfulDetroitRecipes.nodes;
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulDetroitRecipes(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default contact;
