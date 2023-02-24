import styles from './Header.module.scss'
import { RiArrowLeftLine, RiUser3Line } from 'react-icons/ri'
import Hamburger from '../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '' }) => {

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button onClick={() => {
							navigate('/profile')
						}}> <RiUser3Line />
						</button>
					) : (
						<button onClick={() => {
							navigate(isAuth ? backLink : '/auth')
						}}>
							<RiArrowLeftLine />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
