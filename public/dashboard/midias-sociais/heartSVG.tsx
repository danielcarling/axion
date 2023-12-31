import { useState } from "react";

interface Props {
  color: string;
  size?: 'small' | 'large';
}

export function HeartSVG({ color, size = 'large' }: Props) {
  const [svgSize, setSvgSize] = useState(
    size === 'large' ? 19 : 14
  );


  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/bold/heart">
        <g id="Group">
          <path
            id="Vector"
            d="M13.015 2.45422C11.5821 2.45422 10.2996 3.15089 9.49998 4.21964C8.7004 3.15089 7.4179 2.45422 5.98498 2.45422C3.55456 2.45422 1.58331 4.43339 1.58331 6.87964C1.58331 7.82172 1.73373 8.69256 1.99498 9.50006C3.24581 13.4584 7.10123 15.8255 9.00915 16.4746C9.27831 16.5696 9.72165 16.5696 9.99081 16.4746C11.8987 15.8255 15.7541 13.4584 17.005 9.50006C17.2662 8.69256 17.4166 7.82172 17.4166 6.87964C17.4166 4.43339 15.4454 2.45422 13.015 2.45422Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}
