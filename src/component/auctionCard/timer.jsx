function Timer({ startsAt, endsAt, now }) {
  let label = "";
  let timeDiff = 0;

  if (now < startsAt) {
    label = "Starts in";
    timeDiff = startsAt - now;
  } else if (now >= startsAt && now < endsAt) {
    label = "Ends in";
    timeDiff = endsAt - now;
  } else {
    return <p>Ended</p>;
  }

  const totalSeconds = Math.floor(timeDiff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="text-right">
      <span className="font-light text-surface-500">{label}</span>

      <p>
        {days > 0 && `${days}d `}
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
}

export default Timer;
