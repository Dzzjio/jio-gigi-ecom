import { useEffect } from "react";
import useTimeout from "./useTimeout";

/**
 * A custom React hook for debouncing the execution of a callback function.
 * @param callback The function to be executed after the debounce delay.
 * @param delay The delay (in milliseconds) before the callback is executed after the last trigger.
 * @param dependencies An array of dependencies that trigger the callback function.
 * @returns A function to manually clear the debounce timeout.
 */
const useDebounce = (callback: () => void, delay: number, dependencies: unknown[]) => {
  // Use the useTimeout hook to manage the debounce timeout
  const [reset, clear] = useTimeout(callback, delay);

  // Reset the debounce timeout whenever the dependencies change
  useEffect(reset, [...dependencies, reset]);

  // Clear the debounce timeout when the component unmounts or the hook is reinitialized
  useEffect(clear, [clear]);
};

export default useDebounce;