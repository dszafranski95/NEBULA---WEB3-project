@echo off
set /p commitMessage="Enter update title: "

echo Fetching the latest changes from GitHub...
git pull

echo Adding all changes to the index...
git add .

echo Committing the changes...
git commit -m "%commitMessage%"

echo Pushing the changes to GitHub...
git push origin master

echo Update completed!
pause