const getEmployerRole = (employeeName, employees) => {
  const search = employees.find(x => x.name === employeeName);
  if (search === undefined) {
    return "Not an employee";
  } else {
    return search.role;
  }
};

module.exports = getEmployerRole;
