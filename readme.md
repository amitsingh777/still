

We can remove the JIT and purge params from the command and add it in the config file 

**npx tailwindcss -i ./src/styles.css -o ./build/styles.css --watch**


Reference
https://www.youtube.com/watch?v=mP2TPWZRSmk

This one is using JIT

We can use input and output file. Use below command

npx tailwindcss -i ./src/styles.css -o ./build/styles.css

To run using JIT

npx tailwindcss -i ./src/styles.css -o ./build/styles.css --JIT --purge="./*.html"

To continuously watch 

npx tailwindcss -i ./src/styles.css -o ./build/styles.css --JIT --purge="./*.html" --watch

To init the tailwind config file

npx tailwindcss init