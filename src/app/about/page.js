import React from 'react'

async function TakeTime() {
    await new Promise((resolve) => (resolve, 3000))
}
export default function About() {
    TakeTime();
    // throw new Error();
  return (
    <div>About</div>
  )
}
