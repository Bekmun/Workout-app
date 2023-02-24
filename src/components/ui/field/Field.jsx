import styles from './Field.module.scss'

const Field = ({register, name, options, error, ...rest}) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input className={styles.input} {...register(name, options)} {...rest} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Field