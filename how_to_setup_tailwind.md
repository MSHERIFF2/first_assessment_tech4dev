How to setup tailwind using npm:

step 1: type npm install -D tailwindcss
step 2: type npx tailwind init. This will create tailwind.config.js file 
step 3: open the file and input the path to your html and js files e.g. 

module.export = {
    content: ["./src/**/*.{html, js}]
    theme: {
        extend: {},
    },
    plugins: [],
}

step 4: add the following to your source tailwind file: 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

step 5: start the CLI build process by type: npx tailwindcss -i ./src/input.css -o ./src/output.css

step 6: add the output.css file in your html files

step 7: That is all about tailwind setup.