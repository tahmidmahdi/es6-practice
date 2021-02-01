const ages = [12, 13, 14, 15];
const ages2 = [15,16,14,13];
const ages3 = [22,24,26,18,19]
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges);
console.log(allAges2);
console.log(...ages);

const business = 650;
const minister = 450;
const sochib = 750;
const value = [650, 450, 750];
// const takaPoysa = Math.max(business, minister, sochib);
const takaPoysa = Math.max(...value);
console.log(takaPoysa);