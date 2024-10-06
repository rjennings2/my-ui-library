###  1. Clone the Repository by using the commands:
```bash
git clone https://github.com/rjennings2/my-ui-library.git
# and change directories
cd my-ui-library

# 2. Install the dependencies by using the command:
npm install

# 3. Run Storybook by using the command:
npm run storybook
# if it does not automatically, open http://localhost:6006 (or 6007)

# 4. Run with Docker by building the Docker image:
docker build -t lastname_firstname_coding_assignment12 .
# and run the container:
docker run -p 8083:80 last_name_firstname_coding_assignment12

# 5. access the application at http://localhost:8083# my-ui-library
