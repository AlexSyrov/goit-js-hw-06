// Write code under this line
const getSortedUniqueSkills = array =>
  array
    .reduce(
      (acc, item) => (acc.includes(item) ? acc : [...acc, ...item.skills]),
      [],
    )
    .filter((current, index, arr) => arr.indexOf(current) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
