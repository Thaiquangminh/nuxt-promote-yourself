export default function ({store, redirect}) {
    const isAuthenticated = store.getters['auth/isLoggedIn']
    if (isAuthenticated) {
        redirect('/')
    }
}