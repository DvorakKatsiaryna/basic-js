const CustomError = require("../extensions/custom-error");

module.exports =function createDreamTeam(members) {
  if (Array.isArray(members) === false || members.length === 0) {
    return false;
  }
  let team = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') 
      team += members[i].trim()[0];
  }
  return team.toUpperCase().split('').sort().join('');
}; 