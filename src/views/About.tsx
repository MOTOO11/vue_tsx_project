import Vue from "vue";
import { component } from "vue-tsx-support";

export default component({
  name: "about",
  render() {
    var list = [];
    for (var i in this.prefecture) {
      var e = this.prefecture[i];
      list.push(<li key={e.id}>{`${e.name_ja}<${e.id}>: ${e.cases} [${e.deaths}]`}</li>);

    }
    return (
      <div class="about">
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
          </template>
        </v-data-table >
        <v-switch v-model={this.singleSelect} label="Single select" class="pa-3"></v-switch>

        <h1 onClick={this.increment}>This is an about page</h1>
        <h1 onClick={this.loadCovid19}>This is an about page</h1>
        <div>this is {this.count} @1</div>
        <div>this is {this.count2} @2</div>
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
      return this.$store.direct.state.Const.count;
    },
    count2() {
      return this.$store.direct.state.Const.count;
    },
    prefecture() {
      return this.$store.direct.state.Const.prefecture;
    }
  },
  async mounted() {
    await this.loadCovid19();
  },
  methods: {
    increment() {
      this.$store.direct.dispatch.Const.increment();
    },
    increment2() {
      this.$store.direct.dispatch.Const.increment();
    },
    async loadCovid19() {
      await this.$store.direct.dispatch.Const.loadCovid19();
    }
  }
});
