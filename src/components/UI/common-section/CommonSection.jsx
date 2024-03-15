/* eslint-disable react/prop-types */
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <div className="container mx-auto">
        <h2 className="text-white">{props.title}</h2>
      </div>
    </section>
  );
};

export default CommonSection;
