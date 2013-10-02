console.log('Loading <%= moduleName %>...');

function <%= moduleName %> () {
  var instance;
  if( !(this instanceof <%= moduleName %>) ){
    if( !instance ) {
      instance = new <%= moduleName %>.apply( this, arguments );
    }
    
    return instance;
  }
}

<%= moduleName %>.prototype = Object.create( <%= moduleName %>.prototype, {
  hola: {
    value: function () {
      return 'back atcha.';
    },
    enumerable: true
  }
});

exports = module.exports = <%= moduleName %>;
