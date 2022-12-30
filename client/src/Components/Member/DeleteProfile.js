import { useState } from "react";
import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";

const StyledDelete = styled.div`
  width: 830px;

  .delete {
    border-bottom: 1px solid #d6d9dc;
    margin: 0px 0px 24px 0px;
    font-size: 27px;
    padding: 0px 0px 16px 0px;
    color: #0c0d0e;
  }

  .check {
    button {
      background-color: #e8a3a5;
      border: none;
    }

    .checked {
      background-color: #d0393e;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 15px;
`;

const StyledCheck = styled.div`
  display: flex;
  flex-direction: row;
  color: #232629;
  font-size: 15px;
  margin: 0px 0px 25px 0px;
  cursor: pointer;

  input {
    margin: 5px 0px 0px 0px;
  }

  input:focus {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }

  p {
    margin: 0px 0px 0px 10px;
  }
`;

function DeleteProfile() {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsCheck(!isCheck);
  };

  return (
    <StyledDelete>
      <div className="delete">Delete Profile</div>
      <StyledDiv>
        <p>
          Before confirming that you would like your profile deleted, we&apos;d
          like to take a moment to explain the implications of deletion:
        </p>
        <ul>
          <li>
            Deletion is irreversible, and you will have no way to regain any of
            your original content, should this deletion be carried out and you
            change your mind later on.
          </li>
          <li>
            Your questions and answers will remain on the site, but will be
            disassociated and anonymized (the author will be listed as
            &quot;user20812454&quot;) and will not indicate your authorship even
            if you later return to the site.
          </li>
        </ul>
        <p>
          Confirming deletion will only delete your profile on Stack Overflow -
          it will not affect any of your other profiles on the Stack Exchange
          network. If you want to delete multiple profiles, you&apos;ll need to
          visit each site separately and request deletion of those individual
          profiles.
        </p>
      </StyledDiv>
      <div className="check">
        <StyledCheck onClick={handleClick}>
          <div>
            <input type="checkbox" checked={isCheck}></input>
          </div>
          <p>
            I have read the information stated above and understand the
            implications of having my profile deleted. I wish to proceed with
            the deletion of my profile.
          </p>
        </StyledCheck>
        <StyledBlueBtn className={isCheck ? "checked" : ""}>
          Delete profile
        </StyledBlueBtn>
      </div>
    </StyledDelete>
  );
}

export default DeleteProfile;
