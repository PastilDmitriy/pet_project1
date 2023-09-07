import React, {FC, PropsWithChildren} from 'react'

export const HomePage: FC<PropsWithChildren> = ({children}) => {
    const [userText, setUserText] = React.useState('');
      
      function useDebouncedValue(value, delay) {
        const [debouncedValue, setDebouncedValue] = React.useState(value);
      
        React.useEffect(() => {
          const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => clearTimeout(timeoutId);
        }, [value, delay]);
      
        return debouncedValue;
      }

      const useDebounce = (delay) => {
        const [value, setValue] = React.useState('');
        
        const debouncedValue = useDebouncedValue(value, delay);
      
        return [debouncedValue, setValue];
      };

    const [value, setValue] = useDebounce(1000);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
        setUserText(e.target.value);
      }

    React.useEffect(() => {
        // Do something with debounceValue
        console.log('value', value);
      }, [value]);

  return (
    <>
        <input type="text" value={userText} onChange={handleChange} />
        <div>{children}</div>
    </>
  )
}
