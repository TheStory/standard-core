import MuiDivider, {
  type DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

type DividerProps = {} & MuiDividerProps;

const Divider = (props: DividerProps) => (
  <MuiDivider
    {...props}
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      ...props?.sx,
    }}
  />
);

export default Divider;
