import React from 'react'
import {useRouter} from "next/router"

export default function NestedParam() {
  const router=useRouter()
  return (
    <div>NestedParam: {JSON.stringify(router.query)}</div>
  )
}
