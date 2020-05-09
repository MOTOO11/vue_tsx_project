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
  VDialog,
  VCard,
  VCardText,
  VProgressLinear,
  VOverflowBtn,
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
    "v-switch": VSwitch,
    "v-dialog": VDialog,
    "v-card": VCard,
    "v-card-text": VCardText,
    "v-progress-linear": VProgressLinear,
    "v-overflow-btn": VOverflowBtn
  },
});
