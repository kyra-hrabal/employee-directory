This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Home
After starting up the react app via 'npm start' you will be redicted to http://localhost:3000.
This is the homepage for my site. On this page is a carousel that holds 3 employees per slide.
The parent class here is the EmployeeList.js and creates a Navbar and EmployeeCard classes.
I created an EmployeeCard class that holds the styling for each employee. The class implements 
the Bootstrap card class. The EmployeeCard takes a group prop, either 1 or 2, and displays
that particular group of employees. While it looks nice, I did end up just creating 2 static 
groups of employees rather than implementing a dynamically transitioning slide deck based on 
the number of employees found in the list. I wanted to make the 'View Skills' button work but 
ran out of time. I focused more on the admin page than on the home page. With that said, hit 
the "Admin" button to view the admin page.

## Admin
I focused much more on completing the admin page. Here, we list all of the existing employees.
The parent class here is the Admin.js class and creates a list of EmployeeTableEntry classes.
The "Add Employee" button will pop up a modal form where the user can add a new employee.
Note that if you want to add an image, you will need to declare the file name in the Image Name
form and make sure that the image is in the public/img folder ('image = jackfinnigan.jpg'). 
I originally intended on rewriting the employees.json file after adding a new employee, but the 
browser does not let you modify local files so anynew employees added will be lost after a refresh. Next up we have 
the Location dropdown which allows the user to filter out the employee list according to selected 
location. This dropdown is loaded dynamically by getting a unique list of locations from the 
employees.json file. Then we have the search feature, where the user can enter in a string and hit
"Search". This will display the employees that have a substring match in their name, location, or 
title. Another fun feature is when the user hovers over an employee's picture, the image will 
increase in size.
