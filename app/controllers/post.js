export default Ember.Controller.extend({
  queryParams: ['limit', 'offset'],
  limit: 20,
  offset: 0,

  pageSize: 20,

  actions: {
    loadMore: function() {
      this.set('limit', this.get('limit') + this.get('pageSize'));
    }
  }
});