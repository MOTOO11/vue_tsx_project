import * as TSX from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";
import * as Covid from "@/Entity/Covid"

abstract class Events {
  abstract onloading: (value: boolean) => void;
  public static ON_LOADING_EVENT_NAME = "loading";
}

export default TSX.componentFactoryOf<Events>().mixin(VuetifyMixin).create({
  name: "PositivesComponent",
  props: {
  },
  components: {},
  async mounted() {
    await this.fetchData();
  },
  data: () => {
    return {
      selectedPrefecture: "青森県",
    }
  },
  methods: {
    async fetchData() {
      this.$emit(Events.ON_LOADING_EVENT_NAME, true);
      await this.$store.direct.dispatch.Covid19ApiStore.getPositives(this.selectedPrefecture);
      this.$emit(Events.ON_LOADING_EVENT_NAME, false);
    }
  },
  render() {
    return (<div><v-overflow-btn
      class="my-2"
      items={this.PREFECTURES}
      label="都道府県"
      v-model={this.selectedPrefecture}
      onChange={this.fetchData}
    ></v-overflow-btn>
      <div>{this.positives.length}</div>

    </div>);
  },
  computed: {
    positives() {
      return this.$store.direct.state.Covid19ApiStore.positivesLocalAchievements.find(e => e.name == this.selectedPrefecture)?.positives ?? [];
    },
    PREFECTURES() {
      return [
        '北海道',
        '青森県',
        '岩手県',
        '宮城県',
        '秋田県',
        '山形県',
        '福島県',
        '茨城県',
        '栃木県',
        '群馬県',
        '埼玉県',
        '千葉県',
        '東京都',
        '神奈川県',
        '新潟県',
        '富山県',
        '石川県',
        '福井県',
        '山梨県',
        '長野県',
        '岐阜県',
        '静岡県',
        '愛知県',
        '三重県',
        '滋賀県',
        '京都府',
        '大阪府',
        '兵庫県',
        '奈良県',
        '和歌山県',
        '鳥取県',
        '島根県',
        '岡山県',
        '広島県',
        '山口県',
        '徳島県',
        '香川県',
        '愛媛県',
        '高知県',
        '福岡県',
        '佐賀県',
        '長崎県',
        '熊本県',
        '大分県',
        '宮崎県',
        '鹿児島県',
        '沖縄県',
      ];
    },
  }
});
