import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";
import { component } from "vue-tsx-support";
import componentList from "@/mixin/vuetify";
export default component({
  name: "Home",
  mixins: [componentList],
  components: {
    HelloWorld
  },
  render() {
    return (
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <div class="home">
              <logoPng />
              <HelloWorld msg={"Welcome to Your Vue.js App"} />
            </div>
          </v-col>
        </v-row>
      </v-container>
    )
  }
});
