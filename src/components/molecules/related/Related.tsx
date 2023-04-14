import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { BlogList } from "@/components/organism";
import { BlogT } from "@/hooks/blogs/useBlogList";

type RelatedProps = {
  related: BlogT[];
  navigation: (slug: string) => void;
};

const Related = ({
  related,
  navigation = (slug) => console.log(slug),
}: RelatedProps) => {
  return (
    <Box>
      <Typography fontSize={24}>
        <b>Relacionados</b>
      </Typography>
      <Divider />
      <BlogList blogs={related} navigation={navigation} />
    </Box>
  );
};

export default Related;
