import { Link } from "../Link";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const TermsLabel = () => {
  const t = useTranslations("contact.form");

  return (
    <Typography mb="6px">
      {t.rich("terms.label", {
        linkPrivacy: (chunks) => (
          <Link href="/privacy-policy" sx={{ textTransform: "capitalize" }}>
            {chunks}
          </Link>
        ),
        linkCookies: (chunks) => (
          <Link href="/cookies-policy" sx={{ textTransform: "capitalize" }}>
            {chunks}
          </Link>
        ),
      })}
    </Typography>
  );
};

export default TermsLabel;
