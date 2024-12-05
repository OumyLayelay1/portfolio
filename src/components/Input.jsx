export const Input = ({ type, name, placeholder, label }) => (
    <div className="border-b border-[#685D5D] text-[14px] flex mb-4 px-2 py-1 m-4">
        <label className="text-[#FF5C00] pe-2">{label}</label>
        <input type={type} name={name} className="border-none outline-none text-white bg-[#1D1C1D] w-96" placeholder={placeholder}/>
    </div>
  );
  
  export const Textarea = ({ rows, cols, placeholder, label, type, name }) => (
    <div className="border-b border-[#685D5D] text-[14px] flex mb-4 px-2 py-1 m-4">
        <label className="text-[#FF5C00] pe-2">{label}</label>
        <textarea rows={rows} cols={cols} type={type} name={name} className="border-none outline-none text-white bg-[#1D1C1D] w-full" placeholder={placeholder}></textarea>
    </div>
  );