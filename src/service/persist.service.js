const PERSIST = 'persist';

const Persist = {
    set: (data) => {
        localStorage.setItem(PERSIST, JSON.stringify(data));
    },
    get: () => {
        return JSON.parse(localStorage.getItem(PERSIST));
    }
}

export default Persist;