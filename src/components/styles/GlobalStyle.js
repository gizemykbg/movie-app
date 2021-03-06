import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

} 

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #c7c8d0;
    --border-color2: #ececef;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #9AAAD1;
    --my-color: #ceced5;
    --my-font-color: #28282d
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --border-color2: #2d3753;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #374462;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #51596d;
    --my-color:#717385;
    --my-font-color: #e6e6ea
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--my-color);
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--my-color);
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color:var(--may-font-color);
}
img{
    display: flex;
max-width: 100%;
  height: auto;  
}
img:hover{
  transform: scaleX(-1);
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
button:hover {
    color: var(--primary-color);
    border-radius: 5px;
}
button {
    background-color: var(--border-color);
    border-radius: 5px;
    margin: 5px;
    padding: 2px;
}
form {
    margin: 5px;
    padding: 2px;
    justify-constent: center;
    border-radius: 5px;
    border-width: 1px;
    label {
        color: var(--font-light-color)
    }
}


.input{
    margin: 5px;
    padding: 2px;
    justify-constent: center;
    border-radius: 5px;
    background-color: var(--border-color);
    color: var(--font-light-color)
}


.u-margin-bottom{
    margin-bottom: 4rem;
}


.light-dark-mode{
    background-color: var(--border-color);
    width: 6rem;
    right: 2px;
    height: 2.5rem;
    z-index: 10;
    display: flex;
    align-items: center;
     justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: var(--white-color);
    }
  }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }
.filter-sort{
  float: left;
  width: 25%;
  padding-left: 20px;
  padding-top: 5px;
  color: var(--font-light-color);
  margin: 5px;
}
.filter-card{
    background-color: var(--border-color);
}
.filter-card-body{
    background-color: var( --border-color);
}
.sort-box-profile{
    float: right;
    margin-right: 20px;
    margin-top:5px;
    padding: 5px;
}
.loadmore-button{
    color: var(--my-font-color);
}
`;

export default GlobalStyle;
