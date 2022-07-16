import { useEffect } from "react"

export const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log('RETURN COMMENT FUNCTION WAS CALLED')
  }, [returnComment])
  return (
    <article>{returnComment('Pedro')}</article>
  )
}
