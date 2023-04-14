import { Suspense } from "react";
import { BlogList } from "@/components/organism";
import { useRelated } from "@/hooks";
import { useNavigation } from "react-router-dom";
import { CircularProgress, Typography, Divider, Box } from "@mui/material";
const Related = () => {
  const { related } = useRelated();
  if (!related) return null;
  const navigation = useNavigation();
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box>
        <Typography fontSize={24}>
          <b>Relacionados</b>
        </Typography>
        <Divider />
        <BlogList blogs={related} />
      </Box>
    </Suspense>
  );
};

export default Related;
