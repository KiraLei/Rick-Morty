import React from "react";

export const Pages = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-lg-around">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pages;
