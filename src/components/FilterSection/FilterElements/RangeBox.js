// import React from "react";
// import Slider, { createSliderWithTooltip } from "rc-slider";
// import "rc-slider/assets/index.css";
// import styled from "styled-components";
// import { MdDateRange } from "react-icons/md";
// import { useDispatch } from "react-redux";

// const Range = createSliderWithTooltip(Slider.Range);
// const RangeBox = ({
//   name,
//   defaults,
//   state,
//   action,
//   min,
//   max,
//   step,
//   tipFormatter,
//   marks,
//   route,
// }) => {
//   let rangeStyles = {
//     rail: {
//       backgroundColor: "#e2e2e2",
//       height: "50%",
//     },

//     track: [
//       {
//         height: "50%",
//       },
//     ],
//     handle: [
//       {
//         position: "absolute",
//         height: "25px",
//         width: "25px",
//         top: "1px",
//         border: "3px solid #79c4e2",
//       },
//     ],
//     dot: {
//       opacity: "0",
//     },
//   };
//   const dispatch = useDispatch();
//   const handleSliderChange = (value) => {
//     console.log(value);
//     dispatch({ type: action, payload: { value: value, route: route } });
//   };
//   return (
//     <Wrapper>
//       <header>
//         <MdDateRange />
//         <h3>{name}</h3>
//       </header>
//       <Range
//         onChange={(value) => handleSliderChange(value)}
//         defaultValue={defaults}
//         value={state}
//         min={min}
//         max={max}
//         railStyle={rangeStyles.rail}
//         trackStyle={rangeStyles.track}
//         handleStyle={rangeStyles.handle}
//         dotStyle={rangeStyles.dot}
//         step={step}
//         tipProps={{
//           placement: "top",
//           visible: true,
//         }}
//         tipFormatter={tipFormatter}
//         marks={marks}
//       />
//     </Wrapper>
//   );
// };
// export default RangeBox;

// export const Wrapper = styled.div`
//   margin-bottom: 3rem;
//   header {
//     display: flex;
//     margin-bottom: 2.4rem;
//     justify-content: center;
//     align-items: center;
//     background-color: red;
//   }
// `;
