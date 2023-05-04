import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { red } from "@mui/material/colors";
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
          borderBottom: "1px solid",
          my: 1,
        },
        "& > h2": {
          fontFamily: "Roboto",
          my: 2,
          borderBottom: "1px solid",
        },
        "& > h3": {
          fontFamily: "Roboto",
          my: 1,
        },
        "& > h4": {
          fontFamily: "Roboto",
          fontWeight: "bold",
          my: 1,
        },
        "& > blockquote": {
          fontFamily: "Roboto",
          my: 1,
          backgroundColor: red[300],
          borderRadius: 1,
          padding: 3,
          width: "auto",
        },
      }}
    >
      <ReactMarkdown
        components={{
          code({
            node,
            inline,
            className,
            children,
            style,
            ...props
          }: CodeProps) {
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
