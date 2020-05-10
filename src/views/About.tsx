import Vue from "vue";
import * as TSX from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify"
import PositivesComponent from '@/components/PositivesComponent';

export default TSX.componentFactory.mixin(VuetifyMixin).create({
  name: "about",
  render() {
    var list = [];
    for (var i in this.prefecture) {
      var e = this.prefecture[i];
      list.push(<li key={e.id}>{`${e.name_ja}<${e.id}>: ${e.cases} [${e.deaths}]`}</li>);

    }
    return (
      <div >
        <h1 onClick={this.increment}>This is an about page</h1>
        <h1 onClick={this.fetchData}>This is an about page</h1>
        <div>this is {this.count} @1</div>
        <div>this is {this.count2} @2</div>
        <div>this is {this.count3} @3</div>
        <div>this is {this.total.hospitalize} @3</div>
        <PositivesComponent
          onloading={(value: boolean) => { this.setModal(value) }} />
        <v-dialog
          v-model={this.showModal}
          // hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              データを取得しています...
          <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-data-table dense
          v-model={this.selected}
          headers={this.headers}
          items={this.prefecture}
          item-key="id"
          single-select={this.singleSelect}
          show-select
          class="elevation-1"
        >
          <template slot={"top"}>
            <v-switch v-model={this.singleSelect} label="Single select" class="pl-3"></v-switch>
          </template>
        </v-data-table >
        <div>
          <ul>
            <li>{list}</li>
            {/* {this.message.map(e => <li>{`${e.id}: ${e.cases}`}</li>)} */}
          </ul>
        </div>
      </div >
    );
  },
  data: () => {
    return {
      singleSelect: false,
      selected: [],
      selectedPrefecture: "東京都",
      showModal: true,
      aaa: "about page",
      bbb: 1,
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: '名前', value: 'name_ja' },
        { text: '患者数', value: 'cases' },
        { text: '死者', value: 'deaths' },
        { text: 'PCR検査数', value: 'pcr' },
      ],
    };
  },
  computed: {
    count() {
      return this.$store.direct.state.Covid19ApiStore.count;
    },
    count2() {
      return this.$store.direct.getters.Covid19ApiStore.logoSrcSvg;
    },
    count3() {
      return this.$store.direct.state.Counter.count;
    },
    prefecture() {
      return this.$store.direct.state.Covid19ApiStore.prefecture;
    },
    total() {
      return this.$store.direct.state.Covid19ApiStore.total;
    }
  },
  async mounted() {
    await this.fetchData();
    this.setModal(false);
  },
  methods: {
    async increment() {
      var result = await this.$store.direct.dispatch.Covid19ApiStore.increment();
    },
    async fetchData() {
      await this.$store.direct.dispatch.Covid19ApiStore.fetchPrefectures();
      await this.$store.direct.dispatch.Covid19ApiStore.getTotal();
    },
    setModal(value: boolean) {
      this.showModal = value;

    }
  }
});
