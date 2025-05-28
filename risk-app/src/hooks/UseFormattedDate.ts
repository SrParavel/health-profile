import { useMemo } from "react";

export const useFormattedDate = () => {
  return useMemo(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("es-ES", options);
  }, []);
};
