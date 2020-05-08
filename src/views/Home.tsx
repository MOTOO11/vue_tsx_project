// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import { component } from "vue-tsx-support";

export default component({
  name: "Home",
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
  },
});
