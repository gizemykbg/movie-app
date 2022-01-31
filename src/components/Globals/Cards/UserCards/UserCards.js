import React from "react";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";
import profile from "../../../../assets/profile.png";

const UserCards = () => {
  const user = useSelector((state) => state.user);
  const watchlist = useSelector((state) => state.watchlist);
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <div className="profile-img">
        <Profile src={profile} alt="User Profile Image" />
      </div>
      <Info>
        <h1>{user?.username}</h1>
        <p>{user?.joinDate}</p>
        <p>Turkey</p>
        <div className="btns">
          <a href="https://github.com/gizemykbg">
            <FaGithub />
          </a>
        </div>
      </Info>
      <UserDetails>
        <ul>
          <li>Watchlist:{watchlist.watchMovies.length}</li>
          <li>Favorites:{favorites.favoriteMovies.length} </li>
        </ul>
      </UserDetails>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .profile-img {
    margin: 10px auto;
    text-align: center;
    @media only screen and (min-width: 576px) {
      flex-basis: 30%;
      text-align: center;
    }
  }
  .btns {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: row;
    min-height: auto;
    align-items: center;
    justify-content: space-between;
  }
`;
const Profile = styled.img`
  border: 2px solid var(--my-color);
  border-radius: 50%;
  height: 60%;
  width: 60%;
  @media only screen and (min-width: 576px) {
    flex-basis: 30%;
    text-align: center;
  }
`;

const Info = styled.div`
  margin: 0 auto 10px auto;
  text-align: center;
  line-height: 1.8;
  h1 {
    color: var(--my-font-color);
  }
  @media only screen and (min-width: 576px) {
    flex-basis: 40%;
    padding: 5px;
    text-align: left;
  }
`;

const UserDetails = styled.div`
  margin: 10px auto 10px auto;
  ul {
    list-style: none;
  }
  li {
    margin: 10px 0;
  }
  @media only screen and (min-width: 576px) {
    flex-basis: 30%;
  }
`;

export default UserCards;
