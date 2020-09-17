const getUserWithEmail = (users, mail) =>
  users.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
