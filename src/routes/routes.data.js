import Profile from '../components/screens/profile/Profile';
import Home from "../components/screens/home/Home";
import Auth from '../components/screens/auth/Auth';
import NewWorkout from '../components/screens/new-workout/NewWorkout';
import NewExercise from '../components/screens/new-exercise/NewExercise';

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true,
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true,
	}
	// {
	// 	path: '/workout/:id',
	// 	component: SingWorkout,
	// 	isAuth: true,
	// },
	// {
	// 	path: '/workouts',
	// 	component: ListWorkouts,
	// 	isAuth: true,
	// },
]