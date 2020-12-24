export default class AsyncStorageServices {
    static setItem(key, value) {
        return localStorage.setItem(key, value);
    }
    static getItem(key) {
        return localStorage.getItem(key);
    }
    static removeItem(key) {
        return localStorage.removeItem(key);
    }
    static removeAllItem() {
        return localStorage.clear();
    }
}