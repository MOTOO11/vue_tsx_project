import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

interface Events {
  // all memebers must be prefixed by 'on'
  onOk: () => void;
  // If event handler has only one parameter, you can specify parameter type as a shorthand.
  // For example, this is equivalent to `onError: (arg: { code: number, detail: string }) => void`
  onError: { code: number; detail: string };
}

export default tsx.componentFactoryOf<Events>().create({
  render(): VNode {
    return (
      <div>
        <button onClick={() => this.$emit("ok")}>OK</button>
        <button
          onClick={() => this.$emit("error", { code: 9, detail: "unknown" })}
        >
          Raise Error
        </button>
      </div>
    );
  }
});
