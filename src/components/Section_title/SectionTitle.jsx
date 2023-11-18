
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-1/2 text-center mx-auto mb-6 my-8">
            <h2 className="text-[#D99904] text-lg italic pb-2">---{heading}---</h2>
            <p className="text-4xl font-medium border-b-4 border-t-4 py-3">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;