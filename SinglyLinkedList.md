# Linked Lists

## What is it? 
- Linear data structure, ordered list of data, made up of **nodes** that contains a **head**, **tail**, and **length** property.
- Each **node** has a **value/data** and a **pointer** to another node. If it's the last node in the list, it references `null`. 
   - A **pointer** is a reference to the next node
 
- **Different** than an array in that it doesn't have indices (index 0, 1, etc.) but rather a continuous string of nodes that each point to the next node in the list (like a train).

- You can't start in the middle/anywhere random, you have to start with the first node and move through the list. 

## What's singly linked list? 
- A **singly linked list** means that it only is connected the next or following node. Compared two a **doubly linked list** that has connections going both directions (the next and previous node).

## Why would you want to use linked lists instead of arrays?
- Linked lists are especially good at **insertions/deletions**. 
- Consider an array of numbers. In order to insert or delete something from the array, every index after that change would have to be reindexed. 
   - With a linked list, you only change the node that is being inserted/deleted. 

