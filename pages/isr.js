import { useState, useEffect } from 'react'

export default function ISR({ re_validated_at }) {

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    
    return (
        <div>
            ISR<br />
            <p> {isClient && new Date(re_validated_at).toLocaleString()}</p>

        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            re_validated_at: new Date().getTime(),
        },
        revalidate: 10,
    }
}
