import React, { useState } from "react";

export const StoreContext = React.createContext({
  courses: [],
  teachers: [],
});

const StoreContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  return (
    <StoreContext.Provider
      value={{
        courses,
        setCourses,
        teachers,
        setTeachers,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
