user management system

Group: 48
Name: 
Li Tung Hon (13281513),
Lin Ho Fung (13440485),
TONG Yuyang (13335950)

Application link: https://user-management-system-qj8p.onrender.com

********************************************
# deploy in local:
npm install

npm start

it will show a console log: `App listeing on port 8099'

open browser, insert 'localhost:8099/login'

********************************************

********************************************
# Login
user must first register before they can login




After successful login, userid is stored in seesion.

********************************************
# Logout
In the home page, each user can log out their account by clicking logout.

********************************************
# CRUD service
- Create
-	A device document may contain the following attributes with an example: 
	1)	first Name
	2)	last name
	3)	telephone
	4)	email
	5)	details
	

all are mandatory

Create operation is post request, and all information is in body of request.

********************************************
# CRUD service
- Read
-  There are two options to read and find device list all information or searching by firstname ,last name,telephone.

1) List all information
	it will list information that user have inputed

2) Searching by firstname ,last name,telephone 
    then can sort the user information
	

********************************************
# CRUD service
- Update
-	The user can update the user information through the details interface.


-	A device document may contain the following attributes with an example: 
	1)	first Name nelson 
	2)	last name lo
	3)	telephone 96874152
	4)	email hmkij@gmail.com
	5)	details hi

	In example, we updated all the above information

********************************************
# CRUD service
- Delete
-	The user can delete the user 
 information through the button in the page.

