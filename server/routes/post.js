module.exports = function(app) {

var items = Array.apply(null, {length: 100}).map(function(v, i) {
  return {
    id: i,
    name: "post " + i
  };
});

  // RETRIEVE all
  app.get('/api/posts', function(req, res) {
    var limit = parseInt(req.query.limit);
    var offset = parseInt(req.query.offset) || 0;

    var filteredItems = items;
    if (limit) {
      filteredItems = items.slice(offset, (offset+limit));
    } else {
      filteredItems = items.slice(offset);
    }
    res.send({
      post: filteredItems
    });
  });
};