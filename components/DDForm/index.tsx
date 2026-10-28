"use client";
import { useEffect } from "react";

// Domain Directory form widget (https://www.domaindirectory.com/developer).
// Leads post to domaindirectory.com/api/domain-contact and land in VNOC.
const WIDGET_SRC = "https://www.domaindirectory.com/widget/dd-forms.js";

type FormType = "offer" | "partner" | "staffing" | "inquire" | "lease";

const DDForm = ({
  form,
  domain = "vnoc.com",
  className = "mx-auto max-w-xl",
}: {
  form: FormType;
  domain?: string;
  className?: string;
}) => {
  // The widget renders every [data-dd-form] once when it runs, so load it again
  // on each mount to cover client-side navigation between pages.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div className={className} data-dd-form={form} data-dd-domain={domain} />;
};

export default DDForm;
