import { GetStaticProps } from "next"

// executes on server only .it gives dynamic content
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            myNumber: 33000 * 12
        }
    }
}

const Dynamic = (props) => {
    return (
        <div>
            <h1>Number is {props.myNumber}</h1>
        </div>
    )
}

export default Dynamic
