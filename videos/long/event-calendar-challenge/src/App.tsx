import EventCalendar from "./EventCalendar";
import { addDays, subDays } from "date-fns";

const App = () => {
  return (
    <div className="">
      <EventCalendar
        events={[
          { date: subDays(new Date(), 6), title: "Post video" },
          { date: subDays(new Date(), 1), title: "Edit video" },
          { date: addDays(new Date(), 3), title: "Code" },
        ]}
      />
    </div>
  );
};

export default App;
