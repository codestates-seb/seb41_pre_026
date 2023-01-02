import styled from "styled-components";
import { ReactComponent as Logo } from "../../Assets/logo.svg";

const StyledFooter = styled.footer`
  margin: 51px 0px 0px 0px;
  width: 100%;
  background-color: #232629;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #b5b5b5;

  .menus {
    margin: 20px 48px 20px 48px;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 700;
    font-size: 13px;
    margin: 5px 0px 5px 0px;
  }

  .menuContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu {
    margin: 4px 0px 4px 0px;
    font-size: 13px;
    color: #9199a1;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 11px;
    width: 313px;
    margin: 32px 32px 32px 32px;
    color: #9199a1;

    .sns {
      margin: -5px 0px 0px 0px;
    }
  }
`;

const StyledLogo = styled.div`
  font-size: 3rem;
  margin: -5px -10px 0px 15px;
  padding: 0px 0px 0px 20px;
  color: orange;
`;

function Footer() {
  const stack = ["Question", "Help"];
  const product = ["Teams", "Advertising", "Collectives", "Talent"];
  const company = [
    "About",
    "Press",
    "Work Here",
    "Legal",
    "Privacy Policy",
    "Terms of Service",
    "Contact Us",
    "Cookie Settings",
    "Cookie Policy",
  ];
  const network = [
    "Technology",
    "Culture & recreation",
    "Life & arts",
    "Science",
    "Professional",
    "Business",
    "",
    "API",
    "Data",
  ];

  return (
    <StyledFooter>
      <StyledLogo>
        <Logo width="32" height="37" />
      </StyledLogo>
      <div className="menus">
        <span className="title">STACK OVERFLOW</span>
        <div className="menuContainer">
          {stack.map((el, idx) => (
            <span className="menu" key={idx}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className="menus">
        <span className="title">PRODUCTS</span>
        <div className="menuContainer">
          {product.map((el, idx) => (
            <span className="menu" key={idx}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className="menus">
        <span className="title">COMPANY</span>
        <div className="menuContainer">
          {company.map((el, idx) => (
            <span className="menu" key={idx}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className="menus">
        <span className="title">STACK EXCHANGE NETWORK</span>
        <div className="menuContainer">
          {network.map((el, idx) => (
            <span className="menu" key={idx}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className="info">
        <div className="sns">
          Blog&nbsp;&nbsp;&nbsp; Facebook&nbsp;&nbsp;&nbsp;
          Twitter&nbsp;&nbsp;&nbsp; LinkedIn&nbsp;&nbsp;&nbsp; Instagram
        </div>
        <div>
          Site design / logo © 2023 Stack Exchange Inc; user contributions
          licensed under CC BY-SA.\n rev 2022.12.21.43127
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
