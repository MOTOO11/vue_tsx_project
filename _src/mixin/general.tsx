import { component } from "vue-tsx-support";
import LogoSvg from "@/components/LogoSvg";
import VuetifyMixin from "@/mixin/vuetify";
import LogoPng from "@/components/LogoPng";
export default component({
  components: {
    "logo-svg": LogoSvg,
    "logo-png": LogoPng,
    LogoSvg: LogoSvg,
    LogoPng: LogoPng,
  },
  mixins: [VuetifyMixin],
});
