import React from "react";
import ReactMarkdown from "react-markdown";
import { useEditorContext } from "../Context/EditorContext";
import remarkGfm from "https://esm.sh/remark-gfm@3";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";

const Preview = () => {
  const { code } = useEditorContext();
  return (
    <StyledPreview>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {code}
      </ReactMarkdown>
    </StyledPreview>
  );
};

const StyledPreview = styled.div`
  padding: 20px;
  font-size: 16px;
  border-left: 1px solid ${(props) => props.theme.inputBorder};
  height: calc(100vh - 55px);
  overflow: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  blockquote {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 46px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
  }

  ol,
  ul {
    padding: 20px 20px 0 20px;
  }

  hr {
    border: 0.1px solid ${(props) => props.theme.inputBorder};
  }

  blockquote {
    padding: 10px 30px;
    background-color: #f4f4f4;
    border-left: 5px solid #ccc;
  }

  blockquote p {
    margin-bottom: 0;
  }

  blockquote h1 {
    margin-bottom: 0;
  }
  blockquote h2 {
    margin-bottom: 0;
  }
  blockquote h3 {
    margin-bottom: 0;
  }
  blockquote h4 {
    margin-bottom: 0;
  }
  blockquote h5 {
    margin-bottom: 0;
  }
  blockquote h6 {
    margin-bottom: 0;
  }

  .task-list-item {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 6px;

    input[type="checkbox"] {
      display: flex;
      align-items: center;
      width: 22px;
      margin-right: 10px;
      position: relative;

      ::before {
        display: block;
        content: "";
        width: 20px;
        height: 20px;
        border: 1px solid ${(props) => props.theme.textColorLighter};
        border-radius: 3px;
        background-color: ${(props) => props.theme.bg2};
      }

      :checked {
        ::before {
          background-color: dodgerblue;
          border-color: dodgerblue;
        }

        ::after {
          content: "";
          position: absolute;
          height: 13px;
          width: 7px;
          top: 50%;
          left: 5px;
          border-bottom: 3px solid #fff;
          border-right: 3px solid #fff;
          transform: rotate(45deg) translate(-50%, -50%);
        }
      }
    }
  }

  pre > div {
    border-radius: 8px;
    font-size: 16px;
  }
`;

export default Preview;
