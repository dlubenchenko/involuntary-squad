<template>
    <div>
		<div class="page-title">
			<h3>Helper</h3>
		</div>

        <div v-if="loading" class="center">
            <loader/>
        </div>

        <div v-else>
            <table class="highlight">
                <thead class="attached">
                    <tr>
                        <th></th>
                        <th>{{ tableList[0][1] }}</th>
                        <th>{{ tableList[0][2] }}</th>
                        <th>{{ tableList[0][3] }}</th>
                        <th>{{ tableList[0][4] }}</th>
                        <th>{{ tableList[0][5] }}</th>
                        <th>{{ tableList[0][6] }}</th>
                    </tr>
                </thead>

                <tbody v-for="(item, i) in tableList.slice(1)" :key="i">
                    <tr v-if="item[1] === '' && item[2] === ''">
                        <td colspan="7" class="center teal lighten-5"><b>{{ item[0] }}</b></td>
                    </tr>
                    <tr v-else>
                        <td class="teal lighten-5 text"><b>{{ item[0] }}</b></td>
                        <td>{{ item[1] }}</td>
                        <td>{{ item[2] }}</td>
                        <td>{{ item[3] }}</td>
                        <td>{{ item[4] }}</td>
                        <td>{{ item[5] }}</td>
                        <td>{{ item[6] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Loader from '../components/app/Loader.vue'
    export default {
  components: { Loader },
        name: 'helper',
        data:() => ({
            tableList: null,
            loading: true,
        }),
        async mounted() {
            const spreadsheetId1 = '1CNyeVH4xuaWoGrCqSTTZAiIZy2Q9I4j76RIfNcUIvVM'
            this.table = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId1}/gviz/tq?tqx=out:json`)
                .then(res => res.text())
                .then(text => {
                const json = JSON.parse(text.substr(47).slice(0, -2)).table.rows
                // console.log(json);
                let temp = []
                json.map(e => {
                    temp.push(e.c)

                })
            
                this.tableList = temp.map(e => e.map(k => {
                    return k === null ? k = '' : k.v
                }))
                // console.log(this.tableList)
                })
            this.loading = false
        }
        
    }
</script>

<style>
.attached {
    position: sticky;
    top: 60px;
    color: teal;
    font-size: 1.5rem;
    pointer-events: none;
}

.text {
    font-size: .9rem;
}
</style>