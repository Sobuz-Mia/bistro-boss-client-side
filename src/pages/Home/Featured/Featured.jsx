import SectionTitle from "../../../components/Section_title/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import '../Featured/Featured.css'
const Featured = () => {
 
  return (
    <div className="featured-img px-32 py-20 text-white my-8 bg-fixed">
      <SectionTitle
        heading="Check it out"
        subHeading="Our Featured"
      ></SectionTitle>

      <div
        className="flex justify-center gap-5 items-center z-10 "
      >
        <img className="w-[600px] h-[400px] p-4" src={feature} alt="" />
        <div className="space-y-2">
          <h3>March 20,2023</h3>
          <h2>WHERE I CAN GET SOME??</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            reprehenderit impedit nemo voluptatibus esse consequuntur fuga!
            Dignissimos pariatur dolor nisi esse alias sunt officiis nulla in
            laudantium ad. Delectus, exercitationem.
          </p>
          <button className="btn border-0 border-b-4 border-black mt-5">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
