import {useRouter} from "next/router"

export default function CatchAllParam() {
  const router=useRouter()
  return (
    <div>CatchAllParam: {JSON.stringify(router.query)}</div>
  )
}
