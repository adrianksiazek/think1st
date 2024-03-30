import clsx from "clsx";
import { RangeSliderProps } from "./range-slider.types";
import ReactSlider from "react-slider";
import thumb from "../../../assets/images/thumb.svg";

export default function RangeSlider({
  name,
  value,
  onChange,
  min = 0,
  max = 100,
  tickMarks = false,
}: RangeSliderProps) {
  return (
    <div>
      <p className="label">Age</p>
      <div className="w-full my-8 relative h-8">
        <ReactSlider
          key={name}
          className="cursor-not-allowed"
          value={value}
          min={min}
          max={max}
          onAfterChange={(value) => onChange(value)}
          renderThumb={(props, state) => (
            <div
              {...props}
              className={clsx(
                "aspect-square h-4 w-4 cursor-grab rounded-full bg-tertiary-light focus-visible:outline-none"
              )}>
              <div className="relative top-5 -left-2 w-8 h-8 text-xs text-black flex justify-center items-center">
                <img src={thumb} className="absolute top-0 left-0" />
                <span className="z-10">{state.value}</span>
              </div>
            </div>
          )}
          renderTrack={(props, state) => (
            <div
              {...props}
              className={clsx(
                "top-[6px] h-1 max-w-full bg-secondary rounded-2xl",
                state.index === 0 && "!bg-tertiary-light"
              )}
            />
          )}
        />
        {tickMarks && (
          <div className="w-full absolute bottom-9 flex justify-between text-black text-xs">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    </div>
  );
}
