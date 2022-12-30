import styled from "styled-components";
import Vote from "./Vote";
import profile2 from "../../Assets/proimg2.jpg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const AnswerContainer = styled.div`
  border-bottom: 1px solid #e3e6e8;
  box-sizing: border-box;
  display: block;
  margin-top: 10px;
  padding-top: 10px;
  text-align: left;
  vertical-align: baseline;
  width: 727px;
  .answer-content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 52px 675px;
    text-align: left;
    vertical-align: baseline;
    .answer-content-vote {
      display: block;
      margin-top: 8px;
      padding-right: 16px;
      vertical-align: top;
    }
    .answer-content-post {
      display: block;
      padding: 0px 16px;
      vertical-align: top;
    }
  }
  .answer-footer {
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
`;

function Answer({ answerData, id }) {
  const score = answerData.score;

  return (
    <AnswerContainer>
      <div className="answer-content">
        <div className="answer-content-vote">
          <Vote score={score} />
        </div>
        <div className="answer-content-post">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return inline ? (
                  // 강조 (``)
                  <code
                    style={{
                      background: "#f6f6f6",
                      padding: "2px",
                      borderRadius: "3px",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                ) : match ? (
                  // 코드 (```)
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children)
                      .replace(/\n$/, "")
                      .replace(/\n&nbsp;\n/g, "")
                      .replace(/\n&nbsp\n/g, "")}
                  </SyntaxHighlighter>
                ) : (
                  <SyntaxHighlighter
                    style={nord}
                    language="textile"
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              // 인용문 (>)
              blockquote({ node, children, ...props }) {
                return (
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: "1px 15px",
                      borderRadius: "10px",
                    }}
                    {...props}
                  >
                    {children}
                  </div>
                );
              },
              img({ node, ...props }) {
                return (
                  <img
                    style={{ maxWidth: "60vw" }}
                    src={props.src.replace("../../../../public/", "/")}
                    alt="MarkdownRenderer__Image"
                  />
                );
              },
              em({ node, children, ...props }) {
                return (
                  <span style={{ fontStyle: "italic" }} {...props}>
                    {children}
                  </span>
                );
              },
            }}
          >
            {answerData.answerContent
              .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
              .replace(/\*\*/gi, "@$_%!^")
              .replace(/@\$_%!\^/gi, "**")
              .replace(/<\/?u>/gi, "*")}
          </ReactMarkdown>
          <div className="answer-footer">
            <div className="menu">
              <div>
                <a href="/">Share</a>
              </div>
              <div>
                <a href="/">Follow</a>
              </div>
            </div>
            <div className="profile">
              <img src={profile2} alt=""></img>
              <span>{answerData.memberId}</span>
              <span>answerd {answerData.creationAt}</span>
            </div>
          </div>
        </div>
      </div>
    </AnswerContainer>
  );
}

export default Answer;
