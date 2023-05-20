export default function ({store, redirect}) {
    const isAdmin = store.getters['auth/isAdmin']
    if (!isAdmin) {
        redirect('/not-authorized')
    }
}