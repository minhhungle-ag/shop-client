import { Box } from "@mui/material";

export function MainLayout({ children }) {
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
}
