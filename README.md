Base Requirements:
1) Develop a simple website:

    Frontend: Use React.js to build a simple web page (whatever you like to present). Just like to see if you know how to use components with React.
    Backend: Use Django to build at least two API endpoints for the frontend page you created to use.

2) Deploy the website to AWS:

    Basic requirements
        Use AWS S3 to deploy your frontend code.
        Use AWS EC2 to deploy your backend code.
        Ensure the website is accessible publicly.
    Bonus requirements
        Use AWS CloudFront for CDN.
        Create a custom VPC with one private subnet and put your EC2 in it.

Created a website that provides Asian recipes of entrees and desserts. 

How to run: 
1) First, activate the virtual environment. Go to Kangacook_project folder and type in the command ".\KangeEnv\Scripts\activate"
2) "cd" to the "Kangacook" directory and type in the command "python manage.py runserver" to start the Django server.
3) In a separate terminal, navigate the "Kangacook/frontend" and enter the command "npm run dev" to run in development
4) NOTE: if changes are made to the "api" folder, will need to go to the "Kangacook_Project/Kangacook" directory and before running the server run the commands "python manage.py makemigrations" then "python manage.py migrate"


NOTE: There is also the command "python manage.py collectstatic" that can be used
