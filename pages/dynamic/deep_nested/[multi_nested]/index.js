import {useRouter} from "next/router"

export default function MultiNested() {
  const router=useRouter()
  return (
    <div>MultiNested {JSON.stringify(router.query)}</div>
  )
}
