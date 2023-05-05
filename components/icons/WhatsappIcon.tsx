import React from "react";
import Link from 'next/Link'

const WhatsappIcon = ({w, h, fill = "black"}) => {
  return (
    <Link target="_blank" href="https://api.whatsapp.com/message/L4SBDA7TOZ6FL1?autoload=1&app_absent=0">
      <svg
        width={w}
        height={h}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9783 9.41045C20.6383 3.61045 15.3683 -0.85955 9.29834 0.14045C5.11834 0.83045 1.76834 4.22045 1.11834 8.40045C0.738342 10.8204 1.23834 13.1105 2.32834 15.0005L1.43834 18.3104C1.23834 19.0604 1.92834 19.7405 2.66834 19.5305L5.92834 18.6304C7.40834 19.5004 9.13834 20.0005 10.9883 20.0005C16.6283 20.0005 21.3083 15.0304 20.9783 9.41045ZM15.8783 13.7205C15.6372 14.2152 15.2251 14.6059 14.7183 14.8204C14.4183 14.9504 14.0883 15.0105 13.7383 15.0105C13.2283 15.0105 12.6783 14.8904 12.1083 14.6404C11.5008 14.3737 10.9241 14.0418 10.3883 13.6504C9.80834 13.2304 9.26834 12.7605 8.74834 12.2505C8.22834 11.7305 7.76834 11.1804 7.34834 10.6104C6.93834 10.0404 6.60834 9.47045 6.36834 8.90045C6.12834 8.33045 6.00834 7.78045 6.00834 7.26045C6.00834 6.92045 6.06834 6.59045 6.18834 6.29045C6.30834 5.98045 6.49834 5.70045 6.76834 5.45045C7.08834 5.13045 7.43834 4.98045 7.80834 4.98045C7.94834 4.98045 8.08834 5.01045 8.21834 5.07045C8.34834 5.13045 8.46834 5.22045 8.55834 5.35045L9.71834 6.99045C9.80834 7.12045 9.87834 7.23045 9.91834 7.34045C9.96834 7.45045 9.98834 7.55045 9.98834 7.65045C9.98834 7.77045 9.94834 7.89045 9.87834 8.01045C9.80834 8.13045 9.71834 8.25045 9.59834 8.37045L9.21834 8.77045C9.15834 8.83045 9.13834 8.89045 9.13834 8.97045C9.13834 9.01045 9.14834 9.05045 9.15834 9.09045C9.17834 9.13045 9.18834 9.16045 9.19834 9.19045C9.28834 9.36045 9.44834 9.57045 9.66834 9.83045C10.1365 10.3806 10.6482 10.8923 11.1983 11.3604C11.4583 11.5804 11.6783 11.7304 11.8483 11.8204C11.8783 11.8304 11.9083 11.8504 11.9383 11.8604C11.9783 11.8804 12.0183 11.8805 12.0683 11.8805C12.1583 11.8805 12.2183 11.8505 12.2783 11.7905L12.6583 11.4104C12.7883 11.2804 12.9083 11.1905 13.0183 11.1305C13.1383 11.0605 13.2483 11.0205 13.3783 11.0205C13.4783 11.0205 13.5783 11.0405 13.6883 11.0905C13.7983 11.1405 13.9183 11.2005 14.0383 11.2905L15.6983 12.4705C15.8283 12.5605 15.9183 12.6705 15.9783 12.7905C16.0283 12.9205 16.0583 13.0405 16.0583 13.1805C15.9983 13.3505 15.9583 13.5405 15.8783 13.7205Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
};

export default WhatsappIcon;
