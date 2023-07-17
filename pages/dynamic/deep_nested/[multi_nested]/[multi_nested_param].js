import {useRouter} from "next/router"

export default function MultiNestedParam() {
  const router=useRouter()
  return (
    <div>MultiNestedParam: {JSON.stringify(router.query)}</div>
  )
}
