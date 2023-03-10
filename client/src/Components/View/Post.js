import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Editor from "../Share/Editor";
import setDateFormat from "../../util/setDateFormat";
import Cookie from "../../util/cookie";
import axios from "axios";

const PostContainer = styled.div`
  box-sizing: border-box;
  font-size: 15px;
  text-align: left;
  overflow-wrap: break-word;
  .tags {
    display: flex;
    font-size: 13px;
    margin: 0px 0px 16px;
    ul {
      margin: 4px 4px 0px 0px;
      padding: 0px;
      flex-direction: row;
      line-height: 18px;
      float: left;
    }
    li {
      list-style: none !important;
      display: inline-block;
      font-size: 12px;
      margin: 2px;
      padding: 4px 6px;
      border-radius: 3px;
      color: #39739d;
      background-color: #e1ecf4;
    }
  }
  .question-footer {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    margin: 16px 0px;
    padding-top: 4px;
    .menu {
      display: flex;
      flex-wrap: wrap;
      font-size: 13px;
      color: #6a737c;
      div {
        display: block;
        padding: 4px;
        margin-right: 4px;
      }
      a {
        text-decoration: none;
        color: #6a737c;
      }

      button {
        border: 0px;
        color: #6a737c;
        cursor: pointer;
      }
    }
    .profile {
      background-color: #d9eaf7;
      align-items: flex-start;
      display: flex;
      felx-wrap: wrap;
      font-size: 13px;
      justify-content: flex-end;
      text-align: left;
      vertical-align: baseline;
      margin-left: auto;
      padding: 4px;
      border-radius: 3px;
      img {
        width: 22px;
        height: 22px;
        border-radius: 2px;
        margin: 1px;
      }
      span {
        margin: 2px;
        font-size: 12px;
        color: #6a737c;
      }
    }
  }
`;

function Post({ data, member }) {
  const cookie = new Cookie();
  const navigate = useNavigate();
  let tags = [];

  if (data.tags) {
    tags = data.tags.split(" ");
  }

  const handleDelete = () => {
    console.log(cookie.get("userId"));
    axios
      .delete(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/questions/${data.id}`,
        {
          data: { mid: Number(cookie.get("userId")) },
        }
      )
      .then((res) => {
        navigate("/questions");
      })
      .catch((e) => console.log(e));
  };

  return (
    <PostContainer>
      <Editor value={data.problem} />
      <Editor value={data.expecting} />
      <div className="tags">
        <ul>
          {tags
            ? tags.map((tag, idx) => <li key={idx}>{tag}</li>)
            : (tags = [])}
        </ul>
      </div>
      <div className="question-footer">
        <div className="menu">
          <div>
            <Link to="/question" className="none">
              Share
            </Link>
          </div>
          {Number(cookie.get("userId")) === data.mid ? (
            <div>
              <Link to="/edit" state={{ data: [data.id, "questions"] }}>
                Edit
              </Link>
            </div>
          ) : null}
          <div>
            <Link to="/question" className="none">
              Follow
            </Link>
          </div>
          {Number(cookie.get("userId")) === data.mid ? (
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
          ) : null}
        </div>
        <div className="profile">
          <img src={member.profileImage} alt=""></img>
          <span>{member.name}</span>
          <span>
            asked {data.created ? setDateFormat(data.created) : data.created}
          </span>
        </div>
      </div>
    </PostContainer>
  );
}
export default Post;
