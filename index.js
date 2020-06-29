

function forEach(obj, f) {
  Object.entries(obj).forEach(([key, val]) => f(key, val));
}

function containsProperty(obj, prop) {
  return (obj[prop]) !== undefined;
}
function deepCopy(from, to) {
  if (to === undefined) {
    return JSON.parse(JSON.stringify(from));
  }
  forEach(from, (key, value) => {
    to[key] = deepCopy(value);
  });
  return to;
}


function removePropertiesNotInFilter(obj, filter) {
  if (obj === undefined) {
    return;
  }

  if (filter === undefined) {
    return;
  }

  const toFilter = [];
  forEach(obj, (key) => {
    if (!containsProperty(filter, key)) {
      toFilter.push(key);
    }
  });

  for (let i = 0; i < toFilter.length; i += 1) {
    delete obj[toFilter[i]];
  }
}
module.exports = {
  deepCopy,
  forEach,
  containsProperty,
  removePropertiesNotInFilter,
};
