import React from "react";

const Naira = ({ w, h, fill, fill2 }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill={fill2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.5" cy="10.5" r="10.5" fill={fill} />
      <path
        d="M7.736 15.084C7.55867 15.084 7.4 15.014 7.26 14.874C7.12 14.734 7.05 14.5753 7.05 14.398L7.064 6.236C7.064 6.04933 7.12467 5.89067 7.246 5.76C7.37667 5.62 7.54 5.55 7.736 5.55C7.848 5.55 7.95533 5.578 8.058 5.634C8.16067 5.68067 8.24467 5.75067 8.31 5.844L12.692 12.186V6.236C12.692 6.04933 12.7573 5.886 12.888 5.746C13.028 5.606 13.196 5.536 13.392 5.536C13.5787 5.536 13.7373 5.606 13.868 5.746C14.008 5.886 14.078 6.04933 14.078 6.236V14.398C14.078 14.594 14.0127 14.7573 13.882 14.888C13.7513 15.0187 13.588 15.084 13.392 15.084C13.2893 15.084 13.182 15.056 13.07 15C12.9673 14.944 12.8833 14.8693 12.818 14.776L8.45 8.462L8.436 14.398C8.436 14.594 8.366 14.7573 8.226 14.888C8.09533 15.0187 7.932 15.084 7.736 15.084Z"
        fill={fill2}
      />
      <rect x="6" y="9" width="9" height="1" rx="0.5" fill={fill2} />
      <rect x="6" y="11" width="9" height="1" rx="0.5" fill={fill2} />
    </svg>
  );
};

export default Naira;
