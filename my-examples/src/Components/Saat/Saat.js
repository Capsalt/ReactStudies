import "./saat.css";
import moment from "moment";

const Saat = () => {

  const dateTime = moment();
  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");

  let message = "";
  if (hour >= 6 && hour < 11) message = "Morning";
  else if (hour >= 11 && hour < 17) message = "Afternoon";
  else if (hour >= 17 && hour < 21) message = "Evening";
  else message = "Night";

    return (
    <div className = "saat-container">
        <div className = "saat">{timeStr}</div>
        <div>
            <div className = "tarih">{dateStr}</div>
            <div className = "gun">{dayStr} {message}</div>
        </div>

    </div>
    );
}

export default Saat;