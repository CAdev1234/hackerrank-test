function stripProperty(obj, prop) {
  var newObj = new Object();
  for (const key in obj) {
    if (key != prop) {
        newObj[key]=obj[key];
    }
  }
  return newObj;
}


