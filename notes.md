# import ../ takes one folder back before the component like importing any images from the  assets.
# hooks folder is when you want to use any hook that can be used again later on for ex:- chaning color of the navbar while scrolling down or the chainging the theme of light dark and writing that logic there then resue whereever we desire.
# utils  is the folder where we write any function that doesn't belong nowhere or you can also call this miscallenous for example : -
- formatDate.js
- capitalize.js
- scrollToSection.js
- downloadResume.js
- calculateAge.js

# keypoint is that make the code more reusalbe as much as you can if it's possible.
# use display:inline-flex; incase when the any element is taking full width of the it's parent using this will take only neccessary
# always remeber when you try to push the new project do this:- gh repo create myproject --public --source=. --remote=origin --push 
- use .{styles.Container} to create something like : -  <div className={styles.Container}> </div>