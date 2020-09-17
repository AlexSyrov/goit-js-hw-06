const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users));
