import { useRouter } from "next/router";

export default function Num() {
    const router = useRouter()
    console.log(router.query)
    return <h1>hello</h1>
}