
const MenuTitle = ({header,description}) => {
    return (
        <div className="w-[700px] h-[300px] text-center flex bg-opacity-50 flex-col items-center justify-center bg-[#151515]">
            <h2 className=" text-white text-7xl mb-5 font-bold">{header}</h2>
            <p className="text-2xl">{description}</p>
        </div>
    );
};

export default MenuTitle;