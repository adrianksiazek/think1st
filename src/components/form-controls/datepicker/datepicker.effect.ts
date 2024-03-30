import { useEffect, useState } from "react";
import { DayType, GetDatesResponse, Holiday, Observance } from "./datepicker.types";

const API_URL = "https://api.api-ninjas.com/v1/holidays?country=PL&year=2023";

export const useDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [observence, setObservence] = useState<Observance[]>([]);
  const [showCaption, setShowCaption] = useState<boolean | string>(false);

  const handleDateChange = (date: Date) => {
    setStartDate(date);

    const formattedStartDate = date.toISOString().split("T", 1)[0].split("-").join("-");
    const isObservenceIncluded = observence.filter((day) => day.date === formattedStartDate);
    setShowCaption(isObservenceIncluded.length > 0 ? isObservenceIncluded[0].holidayName : false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });

      const data: GetDatesResponse[] = await response.json();
      const isHoliday: Holiday[] = data
        .filter((day) => day.type === DayType.NATIONAL_HOLIDAY)
        .map((day) => ({ date: day.date }));
      const isObservence: Observance[] = data
        .filter((day) => day.type === DayType.OBSERVANCE)
        .map((day) => ({ date: day.date, holidayName: day.name }));

      setHolidays(isHoliday);
      setObservence(isObservence);
    };

    fetchData();
  }, []);

  return { startDate, showCaption, holidays, handleDateChange };
};
