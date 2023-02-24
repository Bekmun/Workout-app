import Header from "./header/header"
import styles from './Layout.module.scss'
import cn from 'clsx'
import { useCheckToken } from "../../hooks/useCheckToken"

const Layout = ({ children, bgImg, heading = '', backLink = '/' }) => {
	useCheckToken()

	return (
		<section className={cn(styles.wrapper, {
			[styles.otherPage]: !!heading
		})}
			style={{ backgroundImage: `url(${bgImg})` }}>
			<Header backLink={backLink} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
