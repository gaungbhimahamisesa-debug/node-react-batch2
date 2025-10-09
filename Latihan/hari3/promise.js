var willGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    var reason = new Error("mom is not happy");
    reject(reason);
  }
});

function askMom() {
  willGetNewPhone;
}
