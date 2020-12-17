//========================================================================
// REST PARAMETERS
//========================================================================
//ES5
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= 18);
  });
}

//isFullAge5(1990,1999,1965);
//isFullAge5(1990,1999,1965,2016,1987);

// ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

// NOTE: the spread operator and the rest parameter looks EXACTLY the same. so heres the difference:
// the spread operator is used in the function call
// the rest parameter is used in the function declaration for an arbitrary number of arguments

// EXAMPLE
// in the natours project, we need to pass an arbitrary number of arguments into a function that will loop through
// the arguments and allow access if the user role matches one of the options that were passed into the argument
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array: ['lead-guide', 'admin']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      ); // 403 = forbidden
    }
    next();
  };
};
