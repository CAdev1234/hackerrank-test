function joinedLogger(level, sep) {
  // write your code here
  var s =[]
  return function(...msg) {
      msg.forEach(arg => {
          if(arg.level >= level) {
              s.push(arg.text)
          }
      });
      let ans = String(s.join(sep));
      ws.write(ans);
  }
}
