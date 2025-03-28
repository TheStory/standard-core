import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/material/styles";
import { Button } from "@thestory/standard-core/atoms/Button";

export interface CtaButtonProps {
  button?: {
    label: string;
    overline?: string;
    url: string;
    sx?: SxProps;
  };
}

const CtaButton = ({ button }: CtaButtonProps) =>
  button && (
    <Box
      sx={{
        ...button.sx,
      }}
    >
      <Button
        size="large"
        href={button.url}
        sx={{
          color: "text.primary",
          width: "fit-content",
          backgroundColor: "secondary.main",
          textTransform: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          py: 1,
          px: 2.5,
          fontSize: 15,
          boxShadow: "none",
          "& .arrow": {
            transition: "transform 0.3s",
          },
          "&:hover": {
            backgroundColor: "secondary.dark",
            boxShadow: "none",
            "& .arrow": {
              transform: "translateX(5px)",
            },
          },
        }}
      >
        {button.overline && (
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: "block", fontSize: 12 }}
          >
            {button.overline}
          </Typography>
        )}
        <Stack direction="row" spacing={2} alignItems="center" gap={4}>
          {button.label}
          <ArrowForward className="arrow" fontSize="small" />
        </Stack>
      </Button>
    </Box>
  );

export default CtaButton;
