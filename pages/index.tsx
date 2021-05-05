// Styled-JSX
//if we remove golbal then it will be component scope

// function Heading() {
//   return (
//     <>
//       <h1>
//         Hello World
//     </h1>
//       <style jsx global>
//         {
//           `
//         h1{
//             color:red;
//         }
//        `}
//       </style>
//     </>
//   )
// }
import styles from './Home.module.css';
export default function Home() {
  return (
    <>
      {/* <Heading /> */}
      <h1 className={styles.fw}>THis is JSX</h1>
    </>
  )
}
