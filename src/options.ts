import Vue from 'vue'
import App from './App.vue'


const items: Map<string, string> = new Map<string, string>();
let vue: Vue;

export function setOption(name: string, value: string): void {
    if (items) {
        items.set(name, value);
    }
}

export function mount(mountAt: string): void {
    vue = new Vue({
        render: h => h(App),
        data: {
           options : items
        },
    });
    
    vue.$mount(mountAt);
}

export function unmount(): void {
    vue.$destroy();
}