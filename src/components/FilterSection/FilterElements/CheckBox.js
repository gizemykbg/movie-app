// import React from "react";
// import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { set_genre } from "../../../redux/filter";

// const CheckBox = ({ id, name, group, route, state, img }) => {
//   const dispatch = useDispatch();

//   const toggleCheckbox = () => {
//     dispatch(set_genre(id, route));
//   };

//   return (
//     <ListItem>
//       <input
//         type="checkbox"
//         name={group}
//         id={name}
//         checked={state?.includes(id)}
//         onChange={toggleCheckbox}
//         className={state?.includes(id) ? "active" : ""}
//       />
//       <label htmlFor={name}>{name}</label>
//     </ListItem>
//   );
// };
// export default CheckBox;

// export const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   ${"" /* justify-content: center; */}
//   input {
//     visibility: hidden;
//     height: 0;
//     width: 0;
//   }
//   input:active {
//     background-color: #2f5a6e;
//     color: white;
//   }
//   label {
//     font-size: 14px;
//     cursor: pointer;
//     transition: all 0.4s ease;
//     user-select: none;
//   }
//   label:hover {
//     background-color: var(--secondary-color);
//   }
// `;
