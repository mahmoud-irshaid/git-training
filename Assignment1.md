# Assignment #1

For this assignment you need to fork this repository, and carry out the tasks below:

1. Draw a directed graph to represent this repository, where each node is a commit.
    - Use the first 4 characters of the commit hash to identify the nodes on the graph
    - Place all labels where they should be
    - Map all branches (6 branches)
    - Use any drawing tool (e.g, Draw.io, Visio, ...) and export an image of the graph
    - Create a new branch **assignment1/task1** based on **master** and add the image and commit it
    - Push your changes to remote on **assignment1/task1**

2. Starting at a point in history where the root path endpoint was just created:
    - Create a branch called **feature/power**
    - Add to it the changes found in the power function endpoint available at **task/power-function**
    - Resolve any conflicts if needed
    - Push your changes to remote on **feature/power**

3. The branch **refactor/addition** has a non-atomic commit **892d721** and this needs to be split into multiple commits:
    - A commit where a utility function was added
    - A commit for the new operations module
    - A commit where these modules are used to refactor the addition operation endpoint
    - Push your changes to remote on **refactor/addition**

4. Using the outputs of **Task #2** and **Task #3** above:
    - Add the utility function from **Task #3** changes to the **feature/power** branch from **Task #2**
    - Add the operations module from **Task #3** changes to the **feature/power** branch from **Task #2**
    - Refactor the power function to use the utility and operations module and commit the changes
    - Push your changes to remote on **feature/power**

5. Repeat **Task #1** after all the changes above were done, push your changes on branch **assignment1/task5**
