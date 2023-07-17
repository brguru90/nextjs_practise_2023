
export default function ClientSide({ node_env }) {
  return (
    <div>
      client side<br />
      NODE_ENV:{node_env}
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      node_env: process.env.NODE_ENV,
    }
  }
}
