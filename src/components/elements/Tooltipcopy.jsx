import React from 'react';

const Tooltipcopy = ({ children, title }) => {
  return (
    <div className="group no-underline cursor-pointer relative inline-block text-center hover:opacity-100  ">
      {children && children}
      <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 hover:opacity-100  top-full left-1/2 -translate-x-1/2 px-3 pointer-events-none">
        {title && title}
      </div>
    </div>
  );
};

export default Tooltipcopy;
