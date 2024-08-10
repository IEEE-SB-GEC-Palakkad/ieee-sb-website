const Heading = (props) => {
  return <h1 className={`heading text-2xl my-4 text-center sm:!text-left sm:text-4xl ${props.className}`}>{props.text}</h1>;
};

export default Heading;