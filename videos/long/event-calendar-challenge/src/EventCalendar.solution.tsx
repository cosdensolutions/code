import clsx from "clsx";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isToday,
  startOfMonth,
} from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Event {
  date: Date;
  title: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((weekday) => {
          return (
            <div key={weekday} className="text-center font-bold">
              {weekday}
            </div>
          );
        })}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return <div key={`empty-${index}`} className="border rounded-md" />;
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div
              key={index}
              className={clsx("border rounded-md text-center p-2", {
                "bg-gray-200": isToday(day),
                "text-gray-900": isToday(day),
              })}
            >
              {format(day, "d")}
              {events
                .filter((event) => isSameDay(event.date, day))
                .map((event) => {
                  return (
                    <div
                      key={event.title}
                      className="text-sm bg-green-500 rounded-md"
                    >
                      {event.title}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
