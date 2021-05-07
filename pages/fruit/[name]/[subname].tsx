import { useRouter } from 'next/router'
export default function () {
    const router = useRouter()
    // replace will push the given url and cannot access back th1 page but push  allow too access that page
    return (
        <>
            <h1>Hello Dynamic routing</h1>
            <button onClick={() => router.replace('/')}>Home</button>
        </>
    )
}