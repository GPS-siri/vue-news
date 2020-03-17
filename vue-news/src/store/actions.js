import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => { context.commit("SET_NEWS", response.data); })
      .catch(error => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => { context.commit("SET_ITEMS", response.data); })
      .catch(error => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => { context.commit("SET_JOBS", response.data); })
      .catch(error => console.log(error));
  },
  FETCH_USER({commit}, userName) {
    fetchUserInfo(userName)
      .then(({data}) => { commit('SET_USER', data) })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({commit}, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => { commit('SET_ASKINGITEM', data)} )
      .catch(error => console.log(error));
  }
};