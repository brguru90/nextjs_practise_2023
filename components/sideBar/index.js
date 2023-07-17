import React from 'react'
import styles from "./style.module.scss"
import Link from "next/link"

export default function SideBar() {
    return (
        <div className={styles["side_bar"]}>
            <ul>
                <li><Link href="/">Home[static]</Link></li>
                <li><Link href="/client_side">Client side [SSG]</Link></li>
                <li><Link href="/nested/">Nested[static]</Link></li>
                <li><Link href="/nested/level2/test2">Nested level2[static]</Link></li>
                <li><Link href="/dynamic/nested/2">Nested with param[static]</Link></li>
                <li><Link href="/dynamic/deep_nested/1/2">Dynamic deep nested with param[static]</Link></li>
                <li><Link href="/catch_all/1/2/3/4/guru">Catch all route[static]</Link></li>
                <li><Link href="/static_paths/1">static path param[SSG]</Link></li>
                <li><Link href="/static_paths/10">static path param undefined path[SSG]</Link></li>
                <li><Link href="/static_paths_fallback/1">static path param with fallback[SSG]</Link></li>
                <li><Link href="/static_paths_fallback/10">static path param with fallback on undefined path(delayed)[SSG]</Link></li>
                <li><Link href="/static_paths_fallback/110">static path param with fallback on unhandled path[SSG]</Link></li>
                <li>ISR </li>
                <li><Link href="/server_side">Server side[SSR]</Link></li>
            </ul>
        </div>
    )
}
