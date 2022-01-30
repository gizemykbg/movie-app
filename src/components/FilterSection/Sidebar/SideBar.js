// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { IoCloseOutline } from "react-icons/io5";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { FiStar } from "react-icons/fi";
// import { IoMdTime } from "react-icons/io";
// import RangeBox from "../FilterElements/RangeBox";
// import CheckBox from "../FilterElements/CheckBox";
// import {
//   Form,
//   Header,
//   Menu,
//   Overlay,
//   GenreList,
//   FormButton,
//   Button,
//   SideWrap,
// } from "./Sidebar.styles";
// import FilterButton from "../FilterElements/FilterButton";

// function SideBar({ genres, onSubmit }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const { pathname } = useLocation();
//   const route = pathname.includes("popular") ? "popular" : "top_rated";
//   console.log(route);

//   const toggleFilterMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = (e) => {
//     console.log("hello");
//     if (
//       e.target.classList.contains("overlay") ||
//       e.target.classList.contains("closeBtn") ||
//       e.target.classList.contains("submit")
//     ) {
//       isOpen(!isOpen);
//     }
//   };

//   const resetForm = () => {
//     window.scrollTo(0, 0);
//   };

//   const applyFilters = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <SideWrap>
//         <Header>Filter & Sort</Header>
//         <Form onSubmit={onSubmit}>
//           <RangeBox
//             name="Year"
//             defaults={[1980, 2022]}
//             // state={filters[route].year.value}
//             // action="SET-YEAR"
//             min={1980}
//             max={2022}
//             step={1}
//             route={route}
//             tipFormatter={(v) => v}
//             marks={{
//               1980: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "1980",
//               },
//               2022: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "2022",
//               },
//             }}
//             icon={<AiOutlineCalendar />}
//           />
//           <RangeBox
//             name="Runtime"
//             defaults={[0, 240]}
//             // state={filters[route].runtime.value}
//             // action="SET-RUNTIME"
//             min={0}
//             max={240}
//             step={5}
//             route={route}
//             tipFormatter={(v) => `${v}m`}
//             marks={{
//               0: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "0m",
//               },
//               240: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "240m",
//               },
//             }}
//             icon={<IoMdTime />}
//           />
//           <RangeBox
//             name="Rating"
//             defaults={[0, 100]}
//             // state={filters[route].rating.value}
//             // action="SET-RATING"
//             min={0}
//             max={100}
//             step={1}
//             route={route}
//             tipFormatter={(v) => `${v}%`}
//             marks={{
//               0: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "0%",
//               },
//               100: {
//                 style: {
//                   marginTop: "10px",
//                 },
//                 label: "100%",
//               },
//             }}
//             icon={<FiStar />}
//           />
//           <div className="genres">
//             <h3 className="genresTitle">Genres</h3>
//             <GenreList>
//               {genres.map((obj) => (
//                 <CheckBox
//                   key={`${obj.id}-${obj.name}-${route}`}
//                   name={obj.name}
//                   id={obj.id}
//                   group="movie-genres"
//                 />
//               ))}
//             </GenreList>
//           </div>
//           <FormButton>
//             <Button className="reset" type="reset" onClick={resetForm}>
//               Reset
//             </Button>
//             <Button onClick={closeMenu} className="submit" type="submit">
//               Apply
//             </Button>
//           </FormButton>
//         </Form>
//       </SideWrap>
//     </>
//   );
// }

// export default SideBar;
