// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import * as TSX from "vue-tsx-support";
import logoSvg from "@/components/LogoSvg"
import logoPng from "@/components/LogoPng"

export default TSX.component({
  name: "Home",
  components: {
    HelloWorld, logoPng
  },
  render() {
    return (
      <div class="home">
        <logoPng />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    );
  },
  computed: {
  },
});
