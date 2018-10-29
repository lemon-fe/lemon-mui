import Vue from 'vue';
import Com from './index.vue'
const VueComponent = Vue.extend(Com);
const instance = new VueComponent({
    el: document.createElement('div')
})
const Dialog = (option, confirm, cancel) => {
    showDialog(option, confirm, cancel);
};
const showDialog = (option, confirm, cancel) => {
    Object.assign(instance.options, option);
    instance.options.show = true;
    document.body.appendChild(instance.$el);
    let btn_cancel = instance.$el.getElementsByClassName("btn-cancel")[0];
    let btn_confirm = instance.$el.getElementsByClassName("btn-confirm")[0];
    btn_cancel.onclick = function(){
        instance.options.show = false;
        cancel && cancel()
    }
    btn_confirm.onclick = function(){
        instance.options.show = false;
        confirm && confirm()
    }
}
export default Dialog;
