import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDatePicker } from "./datepicker.effect";
import captionIcon from "../../../assets/images/captionIcon.svg";

const DatePickerComponent = ({ onChange }: { onChange: (date: Date) => void }) => {
  const { startDate, holidays, handleDateChange, showCaption } = useDatePicker();

  return (
    <>
      <h2 className="heading mt-8">Your workout</h2>
      <div>
        <p className="label">Date</p>
        <DatePicker
          showTimeSelect
          timeFormat="HH:mm"
          selected={startDate}
          onChange={(date) => {
            if (date) {
              handleDateChange(date);
              onChange(date);
            }
          }}
          excludeDates={holidays.map((holiday) => new Date(holiday.date))}
          inline
          disabledKeyboardNavigation
        />
        {showCaption && (
          <p className="text-gray-700 text-xs mt-2 flex items-center gap-2">
            <span>
              <img src={captionIcon} />
            </span>
            {showCaption}
          </p>
        )}
      </div>
    </>
  );
};

export default DatePickerComponent;
