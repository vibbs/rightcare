module.exports = function(Case) {

  Case.observe('access',function filterProperties(ctx, next) {
  	
  	next();
  
  });


};
