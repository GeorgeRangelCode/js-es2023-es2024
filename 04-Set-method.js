const web = new Set(["JavaScript", "HTML", "CSS"]);
const backend = new Set(["JavaScript", "Java", "C#"]);
const compiled = new Set(["Java", "TypeScript", "C#"]);

web.add("Python");
const size = web.size;
console.log({ size });

const hasPython = web.has("Python");
console.log({ hasPython });

const hasRuby = web.has("Ruby");
console.log({ hasRuby });

/** new methods */
const union = web.union(backend);
const intersection = web.intersection(backend);
const difference = web.difference(backend);
const symmetricDifference = web.symmetricDifference(backend);

console.log({ union });
console.log({ intersection });
console.log({ difference });
console.log({ symmetricDifference });

const begginer = new Set(["HTML", "CSS"]);
const isSubsetOf = begginer.isSubsetOf(web);

console.log({ isSubsetOf });

const isSupersetOf = web.isSupersetOf(begginer);

console.log({ isSupersetOf });

const isDisjointFrom = backend.isDisjointFrom(web);

console.log({ isDisjointFrom });
