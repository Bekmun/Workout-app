import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/layout'
import Button from '../../ui/button/Button'
import styles from '../../layout/Layout.module.scss'
import Statistics from '../profile/statistics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImg='../../../../public/images/home-bg.webp'>
			<Button clickHandler={() => navigate('/new-workout')}>
				New
			</Button>
			<h1 className={styles.heading}>
				EXERCISES FOR THE SHOULDERS
			</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
