/**
 * Created by wyw on 2018/8/4.
 */
import api from '../api';
export default {
    getUserInfo({commit, state}) { // 获取用户登录信息
        api.getUserInfo().then(r => {
            if (r.code === 0) {
                commit('setUser', r.data);
                commit('setIslogin', true);
                document.body.id = 'theme-' + state.user.projectTheme;
            } else {
                commit('setUser', '');
                commit('setIslogin', false);
            }
        });
    },
    setTheme({state}) { // 设置主题
        document.body.id = 'theme-' + state.user.projectTheme;
    }
}