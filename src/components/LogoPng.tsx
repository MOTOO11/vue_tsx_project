import { component } from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";

export default component({
  name: "logoPng",
  components: {},
  render() {
    return <v-img src={this.logoSrc} class="my-3" contain height="200" />;
  },
  computed: {
    logoSrc() {
      return this.$store.direct.getters.Const.logoSrcPng;
    },
  },
});
