import styled from "styled-components";

const PostContainer = styled.div`
  box-sizing: border-box;
  diplay: block;
  font-size: 15px;
  text-align: left;
  overflow-wrap: break-word;
  p {
    color: #232629;
    margin-block-end: 16.5px;
    margin-block-start: 0px;
    margin-bottom: 16.5px;
  }
  pre {
    background-color: #f6f6f6;
  }
  .tags {
    display: block;
    font-size: 13px;
    margin: 24px 12px 0px 0px;
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
  .profile {
    align-items: flex-start;
    display: flex;
    felx-wrap: wrap;
    font-size: 13px;
    justify-content: flex-end;
    margin: 16px 16px 0px;
    padding-top: 4px;
  }
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
          <code> 이거 어떻게 해~~~ 나는 모르겠는디</code>
        </pre>
      </div>
      <div className="tags">
        <ul>
          <li>javascript</li>
          <li>html</li>
          <li>css</li>
        </ul>
      </div>
      <div className="profile">share & createdAt & profile</div>
    </PostContainer>
  );
}
export default Post;
