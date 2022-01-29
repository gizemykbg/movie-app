import React from "react";
import { Footers, Content } from "./Footer.styles";

const Footer = () => {
  return (
    <Footers>
      <Content>
        <p>Data provided by:</p>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <img
            src={
              "https://img.search.brave.com/t14S9-qphfxOEpy3o-RJAhMppnwlIyPCDjVU1Sw2QxI/rs:fit:293:302:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvYXNzZXRzLzEv/djQvbG9nb3MvMjkz/eDMwMi1wb3dlcmVk/LWJ5LXNxdWFyZS1n/cmVlbi0zZWU0ODE0/YmI1OWQ4MjYwZDUx/ZWZkZDdjMTI0Mzgz/NTQwZmMwNGNhMjdk/MjNlYWVhM2E4Yzg3/YmZhMGYzODhkLnBu/Zw"
            }
            alt="logo"
          />
        </a>
      </Content>
    </Footers>
  );
};

export default Footer;
