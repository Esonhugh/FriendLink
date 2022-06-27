import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Welcome to Dashboard',
	}
});

export default app;