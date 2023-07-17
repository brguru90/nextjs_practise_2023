import SideBar from "@/components/sideBar/index"
import styles from "./style.module.scss"

export default function Layout({children}) {
    return (
        <div className={styles["layout"]}>
            <div className={styles["side_bar"]}>
                <SideBar />
            </div>
            <div className={styles["content"]}>
                {children}
            </div>
        </div>
    )
}
