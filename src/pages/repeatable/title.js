export default function Title(props) {
  return (
    <>
      <div>
        <div className="text-3xl font-russo tracking-normal text-black pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-black after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-black">
          {props.title}
        </div>
        
      </div>
    </>
  );
}
