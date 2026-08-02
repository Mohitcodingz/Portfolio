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
- use .{styles.Container} to create something like : -  div className={styles.Container}> div
- whhen we use .map() make sure u use return and src={e.image} for images and objects. and for image just {e.title}

# {
        id: 5, 
        icon: FaGithub, // this is component to consume this we write <e.icon/> not {e.icon} because this is not written in the qoutes then it's an react component and we render the component like this <e.icon/>
        title: "GitHub", //{e.title}
        value: "github.com/Mohitcodingz", //{e.value}
        href: "https://github.com/Mohitcodingz",{e.href}
    }, 

    * Mindset:- what type and what to use with them
 Array      → map()
String     → {name}
Object     → person.name
Function   → greet()
Component  → Component

<!-- problem that I faced creating this with the solutions of them -->

- I was unable to make the navbar responsive: -
reasons were: - 
1. default gaps should be less, then for device size accordingly set.
2. never use 100vw use 100% instead.
3. not using the box-sizing : border-box;
4.  What went wrong: Forcing 1 logo + 7 links + 1 button onto a single horizontal row (flex-direction: row) without flex-wrap: wrap or a mobile media query breaks on any screen under 1200px.
5."When using justify-content: space-between, avoid adding extra margin-right or margin-left to the end items—let Flexbox handle edge spacing using container padding."