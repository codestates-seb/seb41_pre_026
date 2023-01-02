import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  width: 230px;
  height: auto;
  margin: 20px 0px 0px 10px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 1px 2px #0000000d, 0 1px 4px #0000000d, 0 2px 8px #0000000d;
  list-style: none;

  .borderTop {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .borderBottom {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom: 1px solid #f1e5bc;
  }
`;

const StyledTitle = styled.li`
  list-style: none;
  height: 41px;
  padding: 12px 15px;
  background-color: #fbf3d5;
  border: 1px solid #f1e5bc;
  font-size: 12px;
  font-weight: bold;
  color: #525960;
`;

const StyledBody = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  background-color: #fdf7e2;
  border-left: 1px solid #f1e5bc;
  border-right: 1px solid #f1e5bc;
  font-size: 13px;

  svg {
    margin: 4px 8px 0px 0px;
  }

  span {
    margin: 0px 8px 0px 0px;
  }

  a {
    text-decoration: none;
    color: #232629;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  margin: 5px 0px;
  color: #3b4045;

  span {
    color: #6a737c;
    font-weight: 500;
  }
`;

const StyledStackExchangeIcon = styled.div`
  background-position: -2px -6118px;
  &.flow {
    background-position: 0 -6156px;
  }
  width: 26px;
  height: 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px;
  background-image: url("https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39");
  margin: 4px 0px 0px 0px;
`;

function RightSideBar() {
  const location = useLocation().pathname;
  const unSideList = ["/login", "/sign", "/ask", "/tags", "/member"];

  return (
    <>
      {unSideList.includes(location) ? null : (
        <StyledNav>
          <StyledUl>
            <StyledTitle>The Overflow Blog</StyledTitle>
            <StyledBody>
              <BodyWrapper>
                <div>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
                  </svg>
                </div>
                Remote work is killing big offices. Cities must change to
                survive
              </BodyWrapper>
            </StyledBody>
            <StyledBody>
              <BodyWrapper>
                <div>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
                  </svg>
                </div>
                You should be reading academic computer science papers
              </BodyWrapper>
            </StyledBody>

            <StyledTitle>Featured on Meta</StyledTitle>
            <StyledBody>
              <BodyWrapper>
                <StyledStackExchangeIcon />
                Navigation and UI research starting soon
              </BodyWrapper>
            </StyledBody>
            <StyledBody>
              <BodyWrapper>
                <svg
                  aria-hidden="true"
                  className="native svg-icon iconLogoGlyphMd"
                  width="14px"
                  height="14px"
                  viewBox="0 0 32 37"
                >
                  <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#6a737c" />
                  <path
                    d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                    fill="#6a737c"
                  />
                </svg>
                Temporary policy: ChatGPT is banned
              </BodyWrapper>
            </StyledBody>
            <StyledBody>
              <BodyWrapper>
                <svg
                  aria-hidden="true"
                  className="native svg-icon iconLogoGlyphMd"
                  width="14px"
                  height="14px"
                  viewBox="0 0 32 37"
                >
                  <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#6a737c" />
                  <path
                    d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                    fill="#6a737c"
                  />
                </svg>
                Should we burninate the [choice] tag?
              </BodyWrapper>
            </StyledBody>
            <StyledTitle>Hot Meta Posts</StyledTitle>
            <StyledBody>
              <BodyWrapper>
                <span>11</span>
                How to flag dozens of almost identical answers
              </BodyWrapper>
            </StyledBody>
            <StyledBody>
              <BodyWrapper>
                <span>25</span>
                Should we flag human-written questions that use code generated
                by ChatGPT?
              </BodyWrapper>
            </StyledBody>
          </StyledUl>
        </StyledNav>
      )}
    </>
  );
}

export default RightSideBar;
