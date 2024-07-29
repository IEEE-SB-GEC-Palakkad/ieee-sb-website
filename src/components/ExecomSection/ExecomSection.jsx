const ExecomSection = () => {
  return (
    <section className="text-black">
      <div className="container mx-auto flex justify-between">
        {/* TODO: Add heading component */}
        <ExecomBox year="2024" />
        <ExecomBox year="2023" />
        <ExecomBox year="2022" />
      </div>
    </section>
  );
};

const ExecomBox = ({ year }) => {
  return (
    <div className="w-[27%] aspect-[0.95/1] shadow-execom-card flex items-center justify-center">
      <h3 className="text-[#595959] font-bold text-[32px] text-center">
        Execom
        <br />
        {year ?? "Nan"}
      </h3>
    </div>
  );
};

export default ExecomSection;
