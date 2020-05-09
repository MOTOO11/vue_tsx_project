import * as TSX from "vue-tsx-support";
import LogoSvg from "@/components/LogoSvg";
import VuetifyMixin from "@/mixin/vuetify";
import LogoPng from "@/components/LogoPng";
import MyComponent from "@/components/MyComponent";
export default TSX.componentFactory.mixin(VuetifyMixin).create({
    components: {
        LogoSvg, LogoPng, MyComponent
    },
});
