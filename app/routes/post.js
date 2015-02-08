export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    },
    offset: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('post', {
      limit: params.limit,
      offset: params.offset
    });
  }
});