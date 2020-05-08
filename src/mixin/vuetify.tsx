import { component } from "vue-tsx-support";
import {
  VCol,
  VApp,
  VAppBar,
  VImg,
  VContainer,
  VSpacer,
  VBtn,
  VIcon,
  VContent,
  VRow,
  VDataTable,
  VSwitch,
} from "vuetify/lib";

export default component({
  components: {
    "v-col": VCol,
    "v-row": VRow,
    "v-app": VApp,
    "v-app-bar": VAppBar,
    "v-img": VImg,
    "v-container": VContainer,
    "v-spacer": VSpacer,
    "v-btn": VBtn,
    "v-icon": VIcon,
    "v-content": VContent,
    "v-data-table": VDataTable,
    "v-switch": VSwitch
  },
});
