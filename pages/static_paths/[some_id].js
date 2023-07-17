
export default function StaticPaths({params}) {
    return (
        <div>
            StaticPaths<br />
            params: {JSON.stringify(params)}

        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: Array(5).fill(0).map((_,i)=>({params:{some_id:i+""}})),
        fallback:false,
    }
}

export async function getStaticProps({params}){
    return {
        props:{
            params
        }
    }
}
