const Inspector = ({ navClass }) => (
  <nav className={navClass}>
    <label>Title text {navClass}</label>
    <style jsx>
      {`
        .inspector {
          position: fixed;
          width: 10rem;
          background-color: #292929;
          color: rgb(170, 170, 170);
          padding: 1rem;
          top: 0;
          left: 0;

          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .inspector.open {
          transform: translateX(0%);
        }
      `}
    </style>
  </nav>
);

export default Inspector;
