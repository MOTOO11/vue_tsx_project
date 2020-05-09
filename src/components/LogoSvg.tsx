// @ is an alias to /src
import * as TSX from "vue-tsx-support";
import { VNode } from "vue/types/umd";
import vuetifyMixin from "@/mixin/vuetify";
abstract class Events {
  abstract onClick?: () => void;
  public static ON_CLICK_EVENT_NAME = "click";
}

export default TSX.componentFactoryOf<Events>().mixin(vuetifyMixin).create({
  name: "logoSvg",
  components: {
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
          this.$emit(Events.ON_CLICK_EVENT_NAME);
        }}
      />
    );
  },
  computed: {
    logoSrc(): String {
      return this.$store.direct.getters.Covid19ApiStore.logoSrcSvg;
    },
  },
});
