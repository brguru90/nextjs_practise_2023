import { useRouter } from "next/router"


export default function StaticPaths({ params }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            StaticPaths<br />
            params: {JSON.stringify(params)}

        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: Array(5).fill(0).map((_, i) => ({ params: { some_id: i + "" } })),
        fallback: true,
    }
}

export async function getStaticProps({ params }) {

    if (Number(params.some_id) > 100) {
        return {
            notFound: true
        }
    }

    if (Number(params.some_id) > 5) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    return {
        props: {
            params
        }
    }
}
