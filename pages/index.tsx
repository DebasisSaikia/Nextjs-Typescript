// Styled-JSX
//if we remove golbal then it will be component scope

function Heading() {
  return (
    <>
      <h1>
        Hello World
    </h1>
      <style jsx global>
        {
          `
        h1{
            color:red;
        }
       `}
      </style>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Heading />
      <h1>THis is JSX</h1>
    </>
  )
}
