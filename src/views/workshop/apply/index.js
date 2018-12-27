// import $                from 'jquery'
// import Toast            from 'utils/toast.util'

// 控制器
const Controller = {
    init () {
        let eleInput = this.getTagName('input');
        let eleSelect = this.getTagName('select');
        let eleTextarea = this.getTagName('textarea');
        this.addListener(eleInput);
        this.addListener(eleSelect);
        this.addListener(eleTextarea);
    },
    getTagName (name) {
        let ele = document.getElementsByTagName(name);
        return ele ? Array.prototype.slice.apply(ele) : [];
    },
    addListener (arr, event ='blur') {
        arr.forEach((item) => {
            item.addEventListener(event, this.handleBlur);
        })
    },
    handleBlur () {
        setTimeout(() => {
            const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
    },
};
Controller.init();
