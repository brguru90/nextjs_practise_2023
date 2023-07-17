import React from 'react'
import styles from "./style.module.scss"
import Link from "next/link"

export default function SideBar() {
    return (
        <div className={styles["side_bar"]}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/client_side">Client side SSG</Link></li>
                <li><Link href="/nested/">Nested</Link></li>
                <li><Link href="/nested/level2/test2">Nested level2</Link></li>
                <li><Link href="/dynamic/nested/2">Nested with param</Link></li>
                <li><Link href="/dynamic/deep_nested/1/2">Dynamic deep nested with param</Link></li>
                <li><Link href="/catch_all/1/2/3/4/guru">Catch all route</Link></li>
                <li>SSG with dynamic param using getStaticPath</li>
                <li>SSG with dynamic param using<br /> getStaticPath with fallback</li>
                <li>ISR </li>
                <li><Link href="/server_side">Server side</Link></li>
            </ul>
        </div>
    )
}
