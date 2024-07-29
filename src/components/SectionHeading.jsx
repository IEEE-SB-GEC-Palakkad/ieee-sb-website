import { cn } from "@/lib/utils";

const SectionHeading = ({ children, className, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        "uppercase text-[#035B98] font-monument font-extrabold text-7xl tracking-widest mb-8",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
