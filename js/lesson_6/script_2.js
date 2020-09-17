const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
