import React from 'react';

const BeardStyle = ({ w, h, classNames, fill }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0163 2.38822C8.20638 2.39473 6.38997 3.23783 5 4.88497L8.34961 8.23458H11.6504L15 4.88497C13.6328 3.20528 11.8262 2.38171 10.0163 2.38822ZM10.3971 4.08744C11.1328 4.14603 11.8848 4.38692 12.5 4.90124L10.8333 6.56791H9.16667L7.5 4.90124C7.97852 4.40645 9.16992 3.99304 10.3971 4.08744ZM8.22266 9.92728C7.82227 9.92728 7.5 10.2528 7.5 10.6532V15.7606H10.8333V17.4273H7.5V19.094H12.5V10.6402C12.5 10.2463 12.1842 9.92728 11.7936 9.92728H8.22266Z"
        fill={fill}
      />
    </svg>
  );
};

export default BeardStyle;
