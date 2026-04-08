function Btn({children, className, onClick}) {
  return <button className={`primary-btn px-5 py-2 rounded-3xl font-medium ${className}`} onClick={onClick}>{children}</button>;
}

export default Btn;
