import React from "react";

export default function FB() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_72_233)">
        <rect
          width="46"
          height="46"
          rx="3"
          fill="white"
          shape-rendering="crispEdges"
        />
        <path
          d="M33 23C33 17.48 28.52 13 23 13C17.48 13 13 17.48 13 23C13 27.84 16.44 31.87 21 32.8V26H19V23H21V20.5C21 18.57 22.57 17 24.5 17H27V20H25C24.45 20 24 20.45 24 21V23H27V26H24V32.95C29.05 32.45 33 28.19 33 23Z"
          fill="black"
        />
        <rect
          x="0.5"
          y="0.5"
          width="45"
          height="45"
          rx="2.5"
          stroke="black"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_72_233"
          x="0"
          y="0"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_72_233"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_72_233"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
