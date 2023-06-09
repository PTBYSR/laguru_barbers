import React from 'react';

const Mail = ({ w, h, fill }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.50016 3.40088C1.85616 3.40088 1.3335 3.92355 1.3335 4.56755L8.00016 8.73421L14.6668 4.56755C14.6668 3.92355 14.1442 3.40088 13.5002 3.40088H2.50016ZM1.3335 5.90218V12.7342C1.3335 13.4709 1.93016 14.0675 2.66683 14.0675H13.3335C14.0702 14.0675 14.6668 13.4709 14.6668 12.7342V5.90218L8.00016 10.0675L1.3335 5.90218Z"
        fill={fill}
      />
    </svg>
  );
};

export default Mail;
