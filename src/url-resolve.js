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

  let toSplit = to.split("/");

  // ignore parts that refer to the current directory.
  toSplit = toSplit.filter(item => item != ".");

  toSplit.forEach(item => {
    if (item === "..") {
      fromSplit.pop();
    } else {
      fromSplit.push(item);
    }
  });

  if (to[0] === "/") {
    fromSplit = to.substr(1).split("/");
  } else {
    // fromSplit = fromSplit.concat(toSplit);
  }

  return protocol + doubleSlash + domain + "/" + fromSplit.join("/");
};
