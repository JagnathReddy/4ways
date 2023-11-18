# 4ways

<h2>To run this project</h2>
###To run this project

1.Download the zip file / clone the git https.  
2. cd projectdir  
3. npx vite => frontend , you will be redirected to a localhost port  
4. npm start=> backend in a different terminal under same dir
5. Copy the Node Id from the workspace and paste it in the viewer id to explore!

<h2>About 4Ways</h2>

<h4>Objective/Aim:</h4>

To create an interactive and immersive 360-degree image viewer that
allows users to upload and view panoramic photos. This can be used
to create a virtual tour of a location or to showcase a product or
service or to show temporary changes in places for events.

<h4>Technical Details:</h4>
Frontend : Three.js , html, bootstrap and javascript
Backend: Express.js
Database : Firebase

<h2>How it works</h2>

When user adds a image to the workspace , the image gets uploaded
in firebase cloud storage with a unique key, each image is associated
with a node, each node has properties such as img-base64 string, id,
north, east, west and south. Where directions point towards another
node.
While this happens , a array of nodes is maintained and when user
finally creates the project , this array is stored in firebase realtime
database.
While sharing with others , the unique key is shared , this key is
associated with a json which has all the nodes and ids of images.
When the other user starts navigating these images are loaded from
cloud storage.


<h1>UI </h1>

![image](https://github.com/JagnathReddy/4ways/assets/70469290/769b9ac2-17f1-4d3c-8451-3c6e635a5724)


![image](https://github.com/JagnathReddy/4ways/assets/70469290/dc54dcbb-4aa0-4b0b-9894-8eefdd1c460b)

![image](https://github.com/JagnathReddy/4ways/assets/70469290/09dd4ffe-63a4-4d45-befe-a49582d9f064)






##UI 
![Screenshot from 2023-11-17 20-21-47](https://github.com/JagnathReddy/4ways/assets/70469290/7ec0a373-63c3-4ba1-9a89-112dcde4a528)

![Screenshot from 2023-11-17 20-28-24](https://github.com/JagnathReddy/4ways/assets/70469290/c765e503-4cba-4f03-9f85-7efb68065d23)




