import MuiDivider, {
  type DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

type DividerProps = {} & MuiDividerProps;

const Divider = (props: DividerProps) => (
  <MuiDivider
    {...props}
    sx={{
      backgroundColor: "divider",
      ...props?.sx,
    }}
  />
);

export default Divider;
