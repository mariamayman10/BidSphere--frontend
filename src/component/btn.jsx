function Btn({children, className}) {
  return <button className={`primary-btn px-5 py-2 rounded-3xl font-medium ${className}`}>{children}</button>;
}

export default Btn;
