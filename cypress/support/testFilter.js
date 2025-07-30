const TestFilters = (testTags = [], runTest) => {
    const envTags = Cypress.env('tags');
  
    //run all tests
    if (!envTags) {
      return runTest();
    }
  
    // AND logic
    if (envTags.includes('&')) {
      const filterTags = envTags.split('&').map(t => t.trim());
      const matchesAll = filterTags.every(tag => testTags.includes(tag));
      if (matchesAll) runTest();
    } 
    // OR logic
    else {
      const filterTags = envTags.split(',').map(t => t.trim());
      const matchesAny = testTags.some(tag => filterTags.includes(tag));
      if (matchesAny) runTest();
    }
  };
  
  export default TestFilters;