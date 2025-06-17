export const Status = () => {
  return (
    <div className="mb-2 grid w-full grid-cols-2 gap-0 border shadow-lg border-borderColor bg-gradient-to-r from-black via-gray-900 to-black p-6 text-primary lg:max-w-lg  rounded-md">
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex items-center justify-center text-[22px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          9
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[14px] text-slate-300"> Schnupperlehren, an denen</p>
          <p className="text-[10px] lg:text-[14px] text-slate-300"> bisher teilnehmen durfte.</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex items-center justify-center text-[22px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          0
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[14px] text-slate-300"> Bisher von mir versandte</p>
          <p className="text-[10px] lg:text-[14px] text-slate-300"> Bewerbungen für Lehrstellen</p>
        </div>
      </div>
    </div>
  );
};
