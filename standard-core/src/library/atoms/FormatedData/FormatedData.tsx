import Box from "@mui/material/Box";
import { useFormatter, useTranslations } from "next-intl";

const FormattedDate = ({ value }: { value?: Date | string }) => {
  const t = useTranslations("common");
  const f = useFormatter();

  const formatDate = () => {
    if (value === undefined) return "-";

    return f.dateTime(new Date(value), {
      dateStyle: "medium",
    });
  };

  return (
    <Box component="span" sx={{ whiteSpace: "nowrap" }}>
      {formatDate()} {t("year")}
    </Box>
  );
};

export default FormattedDate;
