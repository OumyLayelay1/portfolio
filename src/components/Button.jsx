import React from 'react';

const Button = ({ children, type, onClick, className }) => {
  return <button type={type} 
  className={`${className} text-center col-span-4 sm:col-span-12 md:col-span-12 lg:col-span-12 bg-[#FF5C00] px-[35px] xl:px-[10px] py-[5px] mt-6 border border-[#FF5C00] rounded-xl`}
  onClick={onClick}>{children}</button>;
};

export default Button;