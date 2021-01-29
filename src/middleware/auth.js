export default function(next, store) {
    if(!store.state.isAuth)
    {
        store.state.openModal = true;
        next('/');
    }
    else 
    {
        next();
    }
}