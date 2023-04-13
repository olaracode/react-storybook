import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@fontsource/roboto";
const MarkdownPost = ({ content }: { content: string }) => {
  return (
    <Box
      sx={{
        "& > p": {
          fontFamily: "Roboto",
          my: 1.5,
        },
        "& > h1": {
          fontFamily: "Roboto",
        },
        "& > h2": {
          fontFamily: "Roboto",
        },
        "& > h3": {
          fontFamily: "Roboto",
        },
      }}
    >
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialOceanic}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
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
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownPost;
