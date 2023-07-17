import {useRouter} from "next/router"

export default function DynamicParam() {
  const router=useRouter()
  return (
    <div>DynamicParam: {JSON.stringify(router.query)}</div>
  )
}
