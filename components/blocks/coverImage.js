/**
 * Block: Cover Image
 * @param props (title, subtitle, button text, button link, image)
 */

import PropTypes from "prop-types";

const CoverImage = ({ title, subtitle, buttonText, image }) => (
  <section className="cover-image">
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
    <a>{buttonText}</a>
    <style jsx>{`
      .cover-image {
        width: 100%;
        padding: 5rem 0;
        background-image: url(${image});
        background-attachment: fixed;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cover-image:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </section>
);

CoverImage.defaultProps = {
  title: "test",
  image: "./static/hero.jpg",
  subtitle: "subtitle",
  buttonText: "Get in Touch"
};

export default CoverImage;
