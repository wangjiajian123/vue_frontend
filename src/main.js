import vue from "vue";
import App from "./component/App.vue";
new vue({
    el: "#app",
    render(c) {
        return c(App);
    }
})