import { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect is called before useEffect in component mounting process

// useLayoutEffect is called before the layout has been painted
// useEffect is called after the page has been painted

// useLayoutEffect is useful to display something to users before the useEffect has finished e.g. while useEffect is doing an expensive API call. It isn't commonly used though

export const UseLayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    console.log({ inputRef: inputRef.current.value })
  }, [])

  useEffect(() => {
    console.log('useEffect')
    inputRef.current.value = 'useLayoutEffect was called before useEffect';
  }, [])

  return (
    <section>
      <h1>useLayoutEffect</h1>
      <div>
        <input type="text" ref={inputRef} value="PEDRO" style={{ width: '400px', margin: '10px' }} onChange={() => {}} />
      </div>
    </section>
  )
}
