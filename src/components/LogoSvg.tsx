// @ is an alias to /src
import LogoPng from "@/components/LogoPng";
import { component, componentFactoryOf } from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";
import { VNode } from "vue/types/umd";
interface Events {
  onClick: () => void;
}

export default componentFactoryOf<Events>().create({
  name: "logo_svg",
  mixins: [VuetifyMixin],
  components: {
    LogoPng,
  },
  render(): VNode {
    return (
      <v-img
        src={this.logoSrc}
        class="my-3"
        contain
        height="200"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        onClick={() => {
          this.$emit("click");
        }}
      />
    );
  },
  computed: {
    logoSrc(): String {
      return this.$store.direct.getters.Const.logoSrcSvg;
    },
  },
});
