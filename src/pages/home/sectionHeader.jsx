function SectionHeader({title}) {
  return (
    <div className="flex flex-col items-center mb-12">
      <p className="text-2xl font-bold text-center mb-3">{title}</p>
      <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent"></div>
    </div>
  );
}

export default SectionHeader
