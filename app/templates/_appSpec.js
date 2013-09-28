define([
  '<%= distName %>'
], function (
    <%= moduleName %>
  ) {
    describe('checking that the lights come on', function() {

    it('works for <%= moduleName %>', function() {
      var back = <%= moduleName %>.hola();

      expect(back).toEqual('back atcha.');
    });

    // it('works for jQuery', function() {
    //   // just checking that $ works
    //   var $div = $('<div>').addClass('testing');
    //   expect($div.attr('class')).toEqual('testing');
    // });

    // it('works for underscore', function() {
    //   // just checking that _ works
    //   expect(_.size([1,2,3])).toEqual(3);
    // });
  });
});
