import PropTypes from "prop-types";

const Button = ({ text, onClickButton }) => (
  <a className="button" onClick={onClickButton}>
    {text}
    <style jsx>{`
      .button {
        color: #fff;
        background-color: #3490dc;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        align-items: flex-start;
        text-align: center;
      }
    `}</style>
  </a>
);

Button.defaultProps = {
  text: "test"
};

export default Button;
