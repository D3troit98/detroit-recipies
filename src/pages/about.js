import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const About = ({ data }) => {
  const recipes = data.allContentfulDetroitRecipes.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Our Story: From a Love of DetroitRecipes to Delicious Food</h2>
            <p>
              We're a group of food enthusiasts who love DetroitRecipes and its
              vibrant food scene. Our mission is to share our passion with you
              through amazing recipes that are easy to follow and bursting with
              flavor!
            </p>
            <p>
              Our team consists of chefs, home cooks, and food bloggers who have
              come together to create something special for you. We believe that
              cooking should be fun, creative, and delicious, and we're excited
              to share our knowledge and tips with you.
            </p>
            <Link to="/contact" className="btn">
              Let's Chat!
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
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
export default About;
