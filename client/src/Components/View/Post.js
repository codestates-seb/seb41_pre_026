import styled from "styled-components";

const PostContainer = styled.div`
  box-sizing: border-box;
  diplay: block;
  font-size: 15px;
  text-align: left;
  overflow-wrap: break-word;
  p {
    color: #232629;
  }
  pre {
    background-color: #f6f6f6;
  }
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
    margin: 16px 16px 0px 0px;
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
      margin: 0px 16px 0px 0px;
      padding: 4px;
      border-radius: 3px;
    }
  }
`;

const markdown = `
#heading
    **bold**
text
\`\`\`
    code block
\`\`\`
*incline*
text \`background-color\`
> quote
`;

function Post() {
  return (
    <PostContainer>
      <p>
        본문: I have this JS code that I use to add and remove a class while
        scrolling down from the top of a page, but what I want is to do is also
        disappear when you come close to the end of the page or go back to its
        old state after some scrolling (from right: 7px to right: -150px, for
        example). I copied the same JS code and changed the scrollTop,
        scrollBottom and it didnt work.
      </p>
      <div>
        <pre>
          <code>이거 어떻게 해~~~ 나는 모르겠는디{markdown}</code>
        </pre>
      </div>
      <div className="tags">
        <ul>
          <li>javascript</li>
          <li>html</li>
          <li>css</li>
        </ul>
      </div>
      <div className="question-footer">
        <div className="menu">
          <div>
            <a href="/">Share</a>
          </div>
          <div>
            <a href="/">Follow</a>
          </div>
        </div>
        <div className="profile">
          <img alt=""></img>
          <span>user name</span>
        </div>
      </div>
    </PostContainer>
  );
}
export default Post;
