import { Fragment, useState } from "react";
import TimeSelect from "./TimeSelect";
import { BookingTimes, WeekdayName } from "@/libs/types";
import clsx from "clsx";
import axios from "axios";

const weekdayNames: WeekdayName[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function EventTypeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState(0);
  const [bookingTimes, setBookingTimes] = useState<BookingTimes>({});

  async function handleSubmit(ev) {
    ev.preventDefault();
    const response = await axios.post("/api/event-types", {
      title,
      description,
      length,
      bookingTimes,
    });
    console.log({ response });
  }

  const handleBookingTimeChange = (
    day: WeekdayName,
    val: string | boolean,
    prop: "from" | "to" | "active"
  ) => {
    setBookingTimes((oldBookingTimes) => {
      const newBookingTimes: BookingTimes = oldBookingTimes
        ? { ...oldBookingTimes }
        : {};

      if (!newBookingTimes[day]) {
        newBookingTimes[day] = {
          from: "00:00",
          to: "00:00",
        };
      } else {
        newBookingTimes[day][prop] = val;
      }
      return newBookingTimes;
    });
  };

  return (
    <form className="p-2 bg-gray-200 rounded-lg" onSubmit={handleSubmit}>
      create new event type:
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>
            <span>Title</span>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>Description</span>
            <textarea
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <span>Event length (minutes)</span>
            <input
              type="number"
              placeholder="30"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </label>
        </div>
        <div>
          <span className="label">Availability</span>
          <div className="grid gap-2">
            {weekdayNames.map((day) => {
              const from = bookingTimes[day]?.from;
              const to = bookingTimes[day]?.from;
              const active = bookingTimes[day]?.active;

              return (
                <div key={day}>
                  <label className="flex gap-1 uppercase">
                    <input
                      type="checkbox"
                      value={1}
                      onChange={(ev) =>
                        handleBookingTimeChange(
                          day,
                          ev.target.checked,
                          "active"
                        )
                      }
                      checked={bookingTimes?.[day]?.active}
                    />
                    {day}
                  </label>
                  <div
                    className={clsx(
                      "inline-flex gap-2 items-center ml-2",
                      active ? "" : "opacity-40"
                    )}
                  >
                    <TimeSelect
                      onChange={(val) =>
                        handleBookingTimeChange(day, val, "from")
                      }
                      value={from || "00.00"}
                      step={30}
                    />
                    -
                    <TimeSelect
                      onChange={(val) =>
                        handleBookingTimeChange(day, val, "to")
                      }
                      value={to || "00.00"}
                      step={30}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn-blue !px-8">
          Save
        </button>
      </div>
    </form>
  );
}
