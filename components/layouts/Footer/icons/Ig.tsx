import React from "react";

const Ig = ({ w, h, fill }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.11979 2.60938C4.81896 2.60938 2.95312 4.47521 2.95312 6.77604V13.4427C2.95312 15.7435 4.81896 17.6094 7.11979 17.6094H13.7865C16.0873 17.6094 17.9531 15.7435 17.9531 13.4427V6.77604C17.9531 4.47521 16.0873 2.60938 13.7865 2.60938H7.11979ZM15.4531 4.27604C15.9131 4.27604 16.2865 4.64937 16.2865 5.10938C16.2865 5.56937 15.9131 5.94271 15.4531 5.94271C14.9931 5.94271 14.6198 5.56937 14.6198 5.10938C14.6198 4.64937 14.9931 4.27604 15.4531 4.27604ZM10.4531 5.94271C12.754 5.94271 14.6198 7.80854 14.6198 10.1094C14.6198 12.4102 12.754 14.276 10.4531 14.276C8.15229 14.276 6.28646 12.4102 6.28646 10.1094C6.28646 7.80854 8.15229 5.94271 10.4531 5.94271ZM10.4531 7.60938C9.79008 7.60938 9.1542 7.87277 8.68536 8.34161C8.21652 8.81045 7.95312 9.44633 7.95312 10.1094C7.95312 10.7724 8.21652 11.4083 8.68536 11.8771C9.1542 12.346 9.79008 12.6094 10.4531 12.6094C11.1162 12.6094 11.7521 12.346 12.2209 11.8771C12.6897 11.4083 12.9531 10.7724 12.9531 10.1094C12.9531 9.44633 12.6897 8.81045 12.2209 8.34161C11.7521 7.87277 11.1162 7.60938 10.4531 7.60938Z"
        fill={fill}
      />
    </svg>
  );
};

export default Ig;
