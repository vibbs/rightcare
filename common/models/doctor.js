module.exports = function(Doctor) {

  Doctor.observe('access',function filterProperties(ctx, next) {
  	console.log("observe");
  	next();
  });
};
