const ContactUsForm = () => {
  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col gap-4 text-black md:w-[44%] p-4 shadow-form-card rounded-lg"
    >
      <CustomInput type="text" placeholder="Full Name" />
      <CustomInput type="email" placeholder="E-mail" />
      <CustomInput type="text" placeholder="Message" />
      <button className="bg-button-gradient w-fit py-2 px-3 rounded-[100vmax] font-semibold text-lg text-white active:scale-[0.98] mt-4">
        Contact Us
      </button>
    </form>
  );
};

const CustomInput = ({ ...props }) => {
  return (
    <input
      {...props}
      className="bg-white border-b-[3px] border-[#757575] placeholder:tracking-wider font-semibold text-xl placeholder:text-[#757575] py-2 focus:outline-none focus-visible:outline-1 focus:border-[#2C84C5]"
    />
  );
};

export default ContactUsForm;
