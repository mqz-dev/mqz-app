/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useEffect } from "react";

const STORAGE_KEY = "mqz-app-form-data";

export const INITIALFORMDATA = {
  name: "",
  title: "",
  location: "",
  email: "",
  about: "",
  experience: [],
  volunteer: [],
  projects: [],
  achievements: [],
  education: [],
  certifications: [],
  skills: [],
  interests: [],
  links: [],
};

export const FormContext = createContext();

function loadInitialFormData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? { ...INITIALFORMDATA, ...JSON.parse(stored) }
      : INITIALFORMDATA;
  } catch {
    return INITIALFORMDATA;
  }
}

export default function FormProvider({ children }) {
  const [data, setData] = useState(() => loadInitialFormData());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Fail Silently
    }
  }, [data]);
  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}
