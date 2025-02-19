import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@thestory/standard-core/atoms/Button";

export interface AccordionCtaButtonProps {
  button?: {
    label: string;
    overline?: string;
    url: string;
    sx?: SxProps;
  };
}

export const AccordionCtaButton = ({ button }: AccordionCtaButtonProps) =>
  button && (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        ...button.sx,
      }}
    >
      <Button
        size="large"
        href={button.url}
        sx={{
          "&:hover": {
            backgroundColor: "#CED0C2",
          },
          textTransform: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          pl: "10px",
        }}
      >
        {button.overline && (
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: "block" }}
          >
            {button.overline}
          </Typography>
        )}
        {button.label}
      </Button>
    </Box>
  );
