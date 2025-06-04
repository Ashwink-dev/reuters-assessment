import React from "react";

type Props = {
    message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
    
  return ( <label className="absolute text-lg duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 text-red-600 dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
    {message}
    </label>);
};

export default ErrorMessage