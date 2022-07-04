export default function ArrowCircleRight({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="16"></circle>
      <polyline
        points="134.1 161.9 168 128 134.1 94.1"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
      <line
        x1="88"
        y1="128"
        x2="168"
        y2="128"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </svg>
  );
}
