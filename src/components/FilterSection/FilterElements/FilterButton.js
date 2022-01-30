// import React, { useState } from "react";
// import { FiSliders } from "react-icons/fi";
// import styled from "styled-components";

// const FilterButton = ({ onClick }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Container>
//       <BtnWrapper
//         className={`${isOpen ? "removePointer" : ""}`}
//         onClick={onClick}
//       >
//         <FiSliders className="btn" />
//       </BtnWrapper>
//     </Container>
//   );
// };

// export default FilterButton;

// export const Container = styled.div`
//   max-width: var(--max-width);
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   margin-top: 1.5rem;
//   margin-bottom: -1.5rem;
//   @media only screen and (max-width: 1080px) {
//     justify-content: flex-end;
//   }
// `;
// export const BtnWrapper = styled.div`
//   cursor: pointer;
//   .removePointer {
//     cursor: default;
//   }
//   .btn {
//     margin: 10px;
//     color: var(--text-light-color);
//     font-size: 40px;
//     transform: rotate(270deg);
//   }
//   @media only screen and (max-width: 300px) {
//     font-size: 35px;
//   }
// `;
