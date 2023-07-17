
export default function ServerSide({env,url,cookies,query}) {
  return (
    <div>
        <p>URL: {url}</p>
        <p>Queries: {JSON.stringify(query)}</p>
        <p>Cookies: {JSON.stringify(cookies)}</p>
        <p>ENV: {env}</p>
    </div>
  )
}

export async function getServerSideProps(context){
    return {
        props:{
            env:JSON.stringify(process.env),
            url:context?.req?.url,
            cookies:context?.req?.cookies,
            query:context?.query,
        }
    }
}
