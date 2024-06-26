const { exec } = require('child_process');

const files = {
  'src/assets/styles/main.scss': 'dist/styles/main.css',
  'src/assets/styles/tree.scss': 'dist/styles/tree.css'
};

Object.keys(files).forEach(key => {
  exec(`sass ${key} ${files[key]}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error compiling ${key}: ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`Sass stderr: ${stderr}`);
      return;
    }
    console.log(`Compiled ${key} to ${files[key]}`);
  });
});
