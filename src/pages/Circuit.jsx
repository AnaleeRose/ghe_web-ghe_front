import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createContext } from 'react';
import { Header } from "../components/Header.jsx";
import { HeadingBlurb } from "../components/HeadingBlurb.jsx";
import { Matches } from "../components/Circuit/Matches";
import '../styles/styles.scss';
import { Link } from "react-router-dom";

const PageName = createContext("circuit");

// displays the circuit page
export const Circuit = () => {
    const { match_info } = useLoaderData();

    return (
        <>
        <Header pageName="circuit" />
        <main className="circuit">
          <ul className="tabNavList">
            <li><Link to="/circuit/3s" className="tabNavBtns">3s</Link></li>
            <li><Link to="/circuit/2s" className="tabNavBtns">2s</Link></li>
            <li><Link to="/circuit/1s" className="tabNavBtns">1s</Link></li>
          </ul>
          <Matches matches={match_info}/>
        </main>
        </>
    );
}

// styles that are specific to this page
const pageStyles= {
  matchupsContainer: {
    margin: "6rem 0 0",
  },

  btnCTA: {
    paddingLeft: "2.25rem",
  },

  btnCTAbg: {
    width: "15rem",
    top: "-.15rem",
  }
}

// customizes the heading blurb section
let blurbOptions = {
    heading: "THE GOLDEN CUP", 
    imgLink:process.env.REACT_APP_SITE_URL + "/imgs/background/trophy.svg", 
    imgAltText: "trophy background image",
    btnText: "JOIN A TEAM", 
    btnLink: "/franchises", 
};
