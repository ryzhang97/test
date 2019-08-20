<template>
  <div class="v-tables">
    <table v-for="(contents,index1) in list" :key="'contents-'+index1">
      <tr>
        <th colspan="4">
          <div><img class="i-icon" src="../../../static/img/icon_push_report.png">{{contents.title}}</div>
        </th>
      </tr>
      <tr v-for="(items,index) in contents.content" :key="'items-'+index">
        <td v-for="(item,idx) in items" :key="'item-'+idx">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Push',
    data () {
      return {
        id: '',
        title: '日报提醒',
        options: {},
        list: [{
          title: '销售组',
          src: '',
          content: [['', '昨日完成', '异常'], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']]
        }, {
          title: '设计组',
          src: '',
          content: [['', '昨日完成', '异常'], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']]
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "push.css";
</style>
