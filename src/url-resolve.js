module.exports = function(from, to) {
  if (to.indexOf("://") > -1) {
    return to;
  }

  let fromSplit = from.split("/");

  let protocol = "";
  let doubleSlash = "";
  let domain = "";

  // If there is an empty item then we have a full URL
  let indexOfEmptyItem = fromSplit.indexOf("");

  if (indexOfEmptyItem === 0) {
    // we have no protocol.
    doubleSlash = "//";
    fromSplit.shift();
  } else if (indexOfEmptyItem === 1) {
    doubleSlash = "//";
    protocol = fromSplit[0];
    fromSplit.splice(0, 2);
    domain = fromSplit.shift();
  }

  if (fromSplit[fromSplit.length - 1] === "") {
    fromSplit.pop();
  }

  if (to[0] === "/") {
    fromSplit = to.substr(1).split("/");
  } else {
    fromSplit.push(to);
  }

  return protocol + doubleSlash + domain + "/" + fromSplit.join("/");
};
