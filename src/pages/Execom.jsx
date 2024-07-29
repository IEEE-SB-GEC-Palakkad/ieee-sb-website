import Banner from "@/components/Banner/Banner";
import Execom24 from "@/components/Execom24/Execom24";

const EventsPage = () => {
  return (
    <>
      <Banner />
      <div className="sm:container sm:px-20 flex flex-col justify-center items-start">
        <Execom24 />
      </div>
    </>
  );
};

export default EventsPage;
