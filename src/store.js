const STORAGE_KEY='todos-vuejs'
export default {
    fetch: function () {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function (items) {
        // localStorage 和 sessionStorage 属性允许在浏览器中存储 key/value 对的数据。
        // localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
        // localStorage 属性是只读的

        // 如果你只想将数据保存在当前会话中，可以使用 sessionStorage 属性， 
        // 该数据对象临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },
    clearall: function () {
        window.localStorage.clear()
    },
    clear: function (key) {
        window.localStorage.removeItem(key)
    }
}