### Chrome OSX without CORS protection
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

### Chrome Windows 10 without CORS protection
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

### Run the Server
java -jar restaurant.jar

### Connect to the Server
http://localhost:8000/restaurants
http://localhost:8000/restaurants/3

### Swagger UI to view and test the service
http://localhost:8000/swagger-ui.html