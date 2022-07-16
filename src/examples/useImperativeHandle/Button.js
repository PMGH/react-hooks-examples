import { forwardRef, useImperativeHandle, useState } from 'react';

export const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      console.log('useImperativeHandle calling setToggle')
      setToggle(!toggle);
    }
  }))

  return (
    <div>
      <button onClick={() => {
        console.log('Button from Child calling setToggle')
        setToggle(!toggle)
      }}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  )
})
