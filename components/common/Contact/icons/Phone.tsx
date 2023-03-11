import React from "react";

const Phone = ({w, h, fill}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3487 11.0597C12.9287 11.0497 12.4 11.025 12.066 10.9664C11.7047 10.9024 11.27 10.7784 10.964 10.683C10.724 10.6084 10.4627 10.6744 10.2847 10.8517L8.80667 12.321C7.78533 11.783 6.96733 11.1564 6.27467 10.4597C5.578 9.76704 4.95133 8.94904 4.41333 7.92771L5.88267 6.44904C6.06 6.27104 6.126 6.00971 6.05133 5.76971C5.95667 5.46438 5.832 5.02971 5.76867 4.66838C5.70933 4.33438 5.68533 3.80571 5.67467 3.38571C5.666 3.02237 5.37 2.73438 5.00667 2.73438H2.66667C2.37467 2.73438 2 2.95304 2 3.40104C2 6.42704 3.22667 9.31704 5.31067 11.4237C7.41733 13.5077 10.3073 14.7344 13.3333 14.7344C13.7813 14.7344 14 14.3597 14 14.0677V11.7277C14 11.3644 13.712 11.0684 13.3487 11.0597Z"
        fill={fill}
      />
    </svg>
  );
};

export default Phone;
