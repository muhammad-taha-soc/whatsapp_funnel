import { FaLink, FaRegFrown, FaRegSmile } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from 'react-icons/bs';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';

import React from 'react'; 

const data = [
  {
    icon: (
      <BsFillTicketPerforatedFill
        size={55}
        className="bg-primary-opacity-icons rounded"
      />
    ),
    title: 'Redeemed coupons',
    value: 40,
    id: 1,
  },
  {
    icon: (
      <MdOutlineChatBubbleOutline
        size={55}
        className="bg-primary-opacity-icons rounded"
      />
    ),
    title: 'Set coupons',
    value: 50,
    id: 2,
  },
  {
    icon: <FaLink size={55} className="bg-primary-opacity-icons rounded" />,
    title: 'Click on review link',
    value: 65,
    id: 3,
  },
  {
    icon: <FaRegFrown size={55} className="bg-primary-opacity-icons rounded" />,
    title: 'Unsatisfied customers',
    value: 150,
    id: 4,
  },
  {
    icon: <FaRegSmile size={55} className="bg-primary-opacity-icons rounded" />,
    title: 'Satisfied customers',
    value: 250,
    id: 5,
  },
];
export default data;

// const data = [
//   {
//     icon: '../../assets/icons/redeemed-coupon.png',
//     title: 'Redeemed coupons',
//     value: 40,
//     id: 1,
//   },
//   {
//     icon: '../../assets/icons/set-coupon.png',
//     title: 'Set coupons',
//     value: 50,
//     id: 2,
//   },
//   {
//     icon: '../../assets/icons/link.png',
//     title: 'Click on review link',
//     value: 65,
//     id: 3,
//   },
//   {
//     icon: '../../assets/icons/unsmile.png',
//     title: 'Unsatisfied customers',
//     value: 150,
//     id: 4,
//   },
//   {
//     icon: '../../assets/icons/smile.png',
//     title: 'Satisfied customers',
//     value: 250,
//     id: 5,
//   },
// ];
// export default data;
