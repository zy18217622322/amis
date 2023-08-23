import App from './App.vue';
import * as echarts from 'echarts'
import router from '@/router';
import store from '@/store';
import 'amfe-flexible';
import 'vant/lib/index.css';
import '@/styles/index.less';

const app = createApp(App);

app.use(router);
app.use(store);
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$user = "张三"
app.mount('#app');
