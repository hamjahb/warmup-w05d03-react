# Harry Potter with React

![](https://66.media.tumblr.com/b4baf9f8be68ccac9419ea6a3c306e0a/tumblr_otxe5f5kB01saw731o1_500.gif)

---

Create a react app that displays the different Harry Potter houses and notable characters in them with two different components `<House />` and `<Character />`.

### Data
- Save the following data to a separate .js file and import it to your App:

```js
const houses = [{
    houseName: "Slytherin",
    imgSrc: "https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182557",
    founder: "Salazar Slytherin",
    element: "water",
    notableCharacter: {
        charName: "Draco Malfoy",
        imgSrc: "https://pm1.narvii.com/6120/a9da34522b98393e52f0347fd14e6e98e296ff4f_hq.jpg",
    }
},
{
    houseName: "Ravenclaw",
    imgSrc: "https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/scale-to-width-down/350?cb=20161020182442",
    founder: "Rowena Ravenclaw",
    element: "air",
    notableCharacter: {
        charName: "Luna Lovegood",
        imgSrc: "http://www.electricferret.com/static/images/cbub/cbub_contender_image/6/5236/5236.jpg",
    }
},
{
    houseName: "Hufflepuff",
    imgSrc: "https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182518",
    founder: "Helga Hufflepuff",
    element: "earth",
    notableCharacter: {
        charName: "Cedric Diggory",
        imgSrc: "http://www.postavy.cz/foto/cedric-diggory-foto.jpg",
    }
},
{
    houseName: "Gryffindor",
    imgSrc: "https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20190222162949",
    founder: "Godric Gryffindor",
    element: "fire",
    notableCharacter: {
        charName: "Harry Potter",
        imgSrc: "https://bigkidatheart.com/wp-content/uploads/2017/06/harry-potter-with-glasses-200x200.png",
    }
},
]

export default houses;
```

### Functionality

- Display a single house (start with the first in the array)
- Create a `Next House` button that displays the next house in our houses array.
![](https://imgur.com/QVnpdiY.gif)

- Create a `Show Character` button that shows the character within the house.

![](https://imgur.com/S4PMQbq.gif)

### Styling
Add this code to your css file, notice that the styling deals with classes, so consider adding the class names to your elements

>Hint: classes in JSX aren't added the same way we're used to in HTML. Instead of class="name" in your element, you will use className="name"
```css
body {
  text-align: center;
}

img {
  width: 200px;
  height: 200px;
}

.card {
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 1px 1px 1px black;
}

button {
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
```