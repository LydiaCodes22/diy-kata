const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, {
    name: 'Jenny',
    role: 'Sales Associate'
  }, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant' 
  }]
  
  test("returns the employee's role in the company", () => {
    expect (getEmployerRole('Javid', employees)).toEqual('Human Recommended Reading Assistant');
    expect (getEmployerRole('Satti', employees)).toEqual('Developer');
    expect (getEmployerRole('Theresa', employees)).toEqual('Not an employee')
  });
});
