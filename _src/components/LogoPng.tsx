import { component } from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";

export default component({
  name: "logo-png",
  mixins: [VuetifyMixin],
  components: {},
  render() {
    return <v-img src={this.logoSrc} class="my-3" height="200" />;
  },
  computed: {
    logoSrc(): String {
      return this.$store.direct.getters.counter2.logoSrcPng;
    }
  },
});
