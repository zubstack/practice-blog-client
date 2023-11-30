import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Obtener el valor almacenado en localStorage o el valor inicial
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Estado para almacenar el valor actual
  const [value, setValue] = useState(initial);

  // Función para actualizar el valor y guardarlo en localStorage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};
export { useLocalStorage };
