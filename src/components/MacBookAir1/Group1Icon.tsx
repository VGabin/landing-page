import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 210 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 11C0 4.92487 4.92487 0 11 0H199C205.075 0 210 4.92487 210 11V11C210 17.0751 205.075 22 199 22H11C4.92487 22 0 17.0751 0 11V11Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
