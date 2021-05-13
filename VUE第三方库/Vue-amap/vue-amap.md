# https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install

// 按需加载Echart模块
import echarts from 'echarts/lib/echarts'
import { LineChart, BarChart, ScatterChart } from 'echarts/lib/chart'
import { CanvasRenderer } from 'echarts/renderers'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  MarkLineComponent,
  MarkAreaComponent,
  VisualMapPiecewiseComponent } from 'echarts/lib/component'
echarts.use([LineChart, BarChart, ScatterChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, DatasetComponent, MarkLineComponent, MarkAreaComponent, VisualMapPiecewiseComponent, CanvasRenderer])
Vue.prototype.$echarts = echarts