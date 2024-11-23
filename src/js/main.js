const modules = import.meta.glob('./**/*.js');

for (const path in modules) {
  modules[path]()
    .then(module => {
      // Do something with the imported module

      console.log(`Loaded module: ${path}`, module);
    })
    .catch(error => {
      // Handle error
      console.error(`Error loading module: ${path}`, error);
    });
}
