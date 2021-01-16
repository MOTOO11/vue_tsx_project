// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import * as TSX from "vue-tsx-support";
import logoSvg from "@/components/LogoSvg";
import logoPng from "@/components/LogoPng";

export default TSX.component({
  name: "Home",
  components: {
    HelloWorld,
    logoPng
  },
  render() {
    return (
      <div class="home">
        <logoPng />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    );
  },
  computed: {},
  mounted() {
    const speech = new webkitSpeechRecognition();
    // window.SpeechRecognition =
    //   webkitSpeechRecognition || window.SpeechRecognition;
    // console.log(webkitSpeechRecognition);
    // console.log(window.SpeechRecognition);

    const recognition = new webkitSpeechRecognition();
    recognition.onend = (ev: Event) => {
      console.log(ev.timeStamp, "end");
    };
    // var recognition = new webkitSpeechRecognition();
    recognition.lang = "ja";
    recognition.onresult = event => {
      console.log(event.results[0][0].transcript);
    };

    recognition.start();
    console.log(recognition);
  }
});
