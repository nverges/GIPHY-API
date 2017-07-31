Instructions:

How can we restructure our database tables if we wanted the ability to form a relationship between a Post and an Author?

What would we have to change with these tables to make that possible?

Which table would have a foreign key and why?

- on the post, because each author can have more than one post.
- foreign key becomes one of the columns. refers to the id of the author

What would that look like?
Remember, an Author can and will have multiple Posts, but a Post will only have a single Author.

Assume we won't be making a third table.