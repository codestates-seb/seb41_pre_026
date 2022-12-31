import styled from "styled-components";
import profileIMG from "../../Assets/profileIMG.jpg";
import Editor from "../Share/Editor";

const PostContainer = styled.div`
  box-sizing: border-box;
  diplay: block;
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

function Post({ data }) {
  return (
    <PostContainer>
      <Editor value={data.problem} />
      <Editor value={data.expecting} />
      <div className="tags">
        <ul>
          {data.tags
            ? data.tags.map((tag, idx) => <li key={idx}>{tag}</li>)
            : (data.tags = [])}
        </ul>
      </div>
      <div className="question-footer">
        <div className="menu">
          <div>
            <a href="/">Share</a>
          </div>
          <div>
            <a href="/">Edit</a>
          </div>
          <div>
            <a href="/">Follow</a>
          </div>
        </div>
        <div className="profile">
          <img src={profileIMG} alt=""></img>
          <span>{data.mid}</span>
          <span>asked {data.created}</span>
        </div>
      </div>
    </PostContainer>
  );
}
export default Post;
