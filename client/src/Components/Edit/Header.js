import styled from "styled-components";

const StyledHead = styled.div`
  font-size: 12px;
  padding: 6px 20px 20px 20px;
  border: 1px solid #e6cf79;
  background-color: #fdf7e2;
`;

function Header() {
  return (
    <StyledHead>
      <p>Your edit will be placed in a queue until it is peer reviewed.</p>
      We welcome edits that make the post easier to understand and more valuable
      for readers. Because
      <br />
      community members review edits, please try to make the post substantially
      better than how you found it, for
      <br />
      example, by fixing grammar or adding additional resources and hyperlinks.
    </StyledHead>
  );
}

export default Header;
