// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import { component } from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";

export default component({
  name: "Home",
  mixins: [VuetifyMixin],
  components: {
    HelloWorld,
  },
  render() {
    return (
      <div class="home">
        <logo-png />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    );
  },
  computed: {
    logoSrc() {
      return this.$store.direct.getters.Const.logoSrcPng;
    },
  },
});
