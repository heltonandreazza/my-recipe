class DashBoardService {
  /*@ngInject*/
  constructor($http, url) {
    //setup dependency injections
    this.$http = $http;
    this.url = url;
  }
}

export default DashBoardService;