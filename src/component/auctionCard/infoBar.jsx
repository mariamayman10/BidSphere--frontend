
function InfoBar({ list, val }) {
  const config = list[val];

  return (
    <div
      style={{
        backgroundColor: config.bg,
        color: config.text,
      }}
      className="px-2 py-1 rounded-sm text-sm"
    >
      <p className="flex gap-2 items-center">
        <span>{config.el}</span>
        {val}
      </p>
    </div>
  );
}

export default InfoBar;
