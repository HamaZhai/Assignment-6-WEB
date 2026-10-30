# Assignment 6 - jQuery (Selectors, Effects, Animations)

Student: Zhasulan Akkulov  
Group: SE-2538

## About

For this assignment, I continued developing my portfolio from Assignment 5 and expanded the **Game Dev Hub** page.

I added new interactive sections using jQuery, including theme switching, visibility effects, an image gallery, collapsible panels, a skill list, social links, a contact preview and animated skill bars.

The page keeps the existing portfolio design and Bootstrap layout. The JavaScript features from Assignment 5 are also included.

Open `index.html` and select **Game Dev Hub** in the navbar.

## Task 0 - jQuery Setup

I added jQuery 3.7.1 using a CDN.

The code uses `$(document).ready()` to run when the page is ready.

A message appears in the browser console:

`jQuery is ready!`

<img width="1037" height="143" alt="image" src="https://github.com/user-attachments/assets/06a26a15-47fb-46dc-81f7-2f212ed9edc2" />

## Task 1 - Selectors & CSS

The Game Dev Hub page includes my name, a personal headline, a short introduction and a welcome message.

I used different jQuery selectors:

- Tag selector: `$("h1")`.
- ID selector: `$("#hub-greeting")`.
- Class selector: `$(".personal-headline")`.

The welcome message is updated using `.text()`.

I also added **Light theme** and **Dark theme** buttons. They use jQuery to change the page's appearance through `.css()` and CSS classes.

### Dark Theme

<img width="1881" height="978" alt="image" src="https://github.com/user-attachments/assets/1acfc152-7078-4416-a559-f49be33179ac" />

### Light Theme

<img width="1903" height="1017" alt="image" src="https://github.com/user-attachments/assets/1a86baa4-9269-43bc-8294-420dd9ff3b5e" />

## Task 2 - Visibility Methods

The **Developer Journal** includes an About Me section with a short biography, my current focus and some project facts.

I added three buttons:

- **Hide** uses `.hide()` to hide the information.
- **Show** uses `.show()` to display it.
- **Toggle** uses `.toggle()` to switch its visibility.

The content changes without reloading the page.

### About Me Visible

<img width="949" height="548" alt="image" src="https://github.com/user-attachments/assets/1fb935ec-fc5d-482a-857b-49f5f47089c6" />

### About Me Hidden

<img width="952" height="408" alt="image" src="https://github.com/user-attachments/assets/11b4e0d2-35f0-4207-9506-7ea099d05261" />

## Task 3 - Fade Methods

I added an Inspiration Gallery with images from Criminally Delicious and Larping Skeleton.

The gallery has three buttons:

- **Fade In** uses `.fadeIn()`.
- **Fade Out** uses `.fadeOut()`.
- **Fade Toggle** uses `.fadeToggle()`.

The images appear and disappear with a smooth animation.

### Gallery Visible

<img width="952" height="337" alt="image" src="https://github.com/user-attachments/assets/960123bd-aab9-4d61-9541-d7d7f08d6a7d" />

### Gallery Hidden

<img width="963" height="348" alt="image" src="https://github.com/user-attachments/assets/d3293a15-cfe1-4429-ab90-09216088ef3d" />

## Task 4 - Slide Methods

The Developer Journal also includes three collapsible sections:

- Game Development.
- Music & Creative Work.
- Learning & Interests.

Visitors can click each heading to expand or collapse its content using `.slideToggle()`.

The **Expand all** and **Collapse all** buttons use `.slideDown()` and `.slideUp()`.

### Sections Collapsed

<img width="943" height="219" alt="image" src="https://github.com/user-attachments/assets/32a9bd14-0894-4f56-9c29-e5df994caefd" />

### Sections Expanded

<img width="951" height="361" alt="image" src="https://github.com/user-attachments/assets/8606ca9f-26f9-41ce-ac11-98af3e75d93e" />

## Task 5 - Add & Remove Elements

The **Skill Workshop** starts with four technical skills:

- C#
- Unity
- JavaScript
- HTML & CSS

Visitors can enter a new skill and use three buttons:

- **Add Skill** uses `.append()` to add a skill at the end.
- **Prepend Skill** uses `.prepend()` to add a skill at the beginning.
- **Remove Skill** uses `.remove()` to delete the last skill.

Empty input and space-only values are rejected.

### Initial Skill List

<img width="936" height="403" alt="image" src="https://github.com/user-attachments/assets/689f24db-500c-4f9a-8e1f-1dd4379d9639" />

### Updated Skill List

<img width="945" height="452" alt="image" src="https://github.com/user-attachments/assets/4bd28596-3f76-41b0-80d6-1dec2f7b4bda" />

## Task 6 - Modifying Attributes

The **Connections** section includes a social media link.

I added a button that switches the link between GitHub and itch.io.

The `switchSocialLink()` function uses `.attr()` to change the link's `href` attribute. The link text also changes to show the selected platform.

### GitHub Link

<img width="467" height="214" alt="image" src="https://github.com/user-attachments/assets/e1a3b1be-1e4d-4978-b11c-1a66306b6c5b" />

### itch.io Link

<img width="382" height="149" alt="image" src="https://github.com/user-attachments/assets/e6b33098-e130-4056-bea8-99bba39a42ca" />  

## Task 7 - Form Interaction

The Connections section also includes a form with two fields:

- Name.
- Email.

The form displays the entered information in a live preview.

I used `.val()` to read the input values and `.text()` to update the preview.

The preview changes while the user types, without submitting the form or reloading the page.

### Empty Form

<img width="907" height="293" alt="image" src="https://github.com/user-attachments/assets/d4be001b-198b-49cc-a66f-9aafce91576f" />

### Live Preview

<img width="944" height="308" alt="image" src="https://github.com/user-attachments/assets/5e46db38-cbdf-4acd-89b5-1a5e47c539e2" />

## Task 8 - Basic Animation

I added three animated skill bars to the **Skill Workshop**:

- Unity: 80%.
- C#: 65%.
- JavaScript: 50%.

The bars start with zero width.

When the **Animate My Skills** button is clicked, `.animate()` increases their widths to the target values.

Clicking the button again animates the bars back to zero.

The percentages are example values used to demonstrate the animation.

### Initial Skill Bars

<img width="936" height="275" alt="image" src="https://github.com/user-attachments/assets/4c0340a6-0f66-41e8-8ddc-a7196e5b9b3d" />

### Animated Skill Bars

<img width="934" height="307" alt="image" src="https://github.com/user-attachments/assets/b457614b-8694-4d7a-a8c9-79856ecce76a" />

## Work Process

I used my existing portfolio and Game Dev Hub from Assignment 5 as the base for this assignment.

I expanded the Hub with new sections and added the jQuery functionality in a separate `hub-jquery.js` file. The styles for the new layout and themes are in `hub.css`.

The previous JavaScript features, including Developer Profile and Project Board, remain in the project.

The project uses:

- HTML.
- CSS.
- Bootstrap 5.
- JavaScript.
- jQuery 3.7.1.

No build tools or additional JavaScript frameworks were added.

jQuery is loaded from a CDN, while the website files can run as a static project.
