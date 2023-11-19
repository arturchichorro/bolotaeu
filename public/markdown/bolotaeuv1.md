## * Motivation.

When I decided that I wanted to do a gap year, I decided I wanted to put myself out there and show the projects and challenges I'd face. That being said, I graduated university four months ago, and have been too scared to actually put anything out there ever since. In fact, the first thing I decided to do was to enroll in another course, this time an online one (front-end engineer career path, at [Codecademy](https://www.codecademy.com/)). I wasn't exactly getting my hands dirty with any concrete projects from start to finish but I did go through with the course and finished it since.

Without the umbrella of more lessons to take, it became apparent that I now had to finally take on a project of my own. That, coupled with the idea of showing what I'm doing throughout this year (and who knows, maybe also after that), I decided to build a website using my new found knowledge.

## * The idea.

I wanted to build a simple website, in which I have the ability to add pages to the website simply by writting a note in my note app ([Obsidian](https://obsidian.md/)). This way, everytime I decide that I want to share something here, all I have to do is write a note, as I usually already do for productivity reasons. 

## * The tools.

Throughout my Codecademy course, I learned how to code in Javascript, got my first contact with HTML and CSS, and learned a little bit about React and Redux. Those are the tools I used to build this website.

While learning, I actually first tried to build the website using only HTML and CSS. This gave me a fine result, and much of the styling I decided then is actually the styling I ended up using for this 1.0 version of the website. After that, the reason I decided to use React was simple: I kept learning new things in the course, and it felt like it made sense to put them into practice.

Here's a picture of my website when I first built it using only HTML and CSS:

![Picture of my website using only HTML and CSS](/media/bolotaeuHTMLCSS.png)

Learning React, and watching youtube videos about it, I discovered the huge world that is Web Development, and it is really interesting how there are so many different tools to do the same things. I still am not sure if I'm learning the right thing, and at the same time, it feels like using React to build this very simple "blog" type of website is a bit much.

But! Apparently, [Undertale](https://undertale.com/), which is a relatively famous game that I never actually played, is programmed using a gigantic switch case that has thousands of cases, which probably isn't the optimal way to program it. This was actually quite a big inspiration for me! Undertale feels like quite the creative project, and as long as it works, and it does, the tools used to make it happen don't really matter too much. Because of all of this, I decided that React was actually just fine, even for this very simple website. Who knows, when I expand it further, React might actually become essential to have certain functionalities working properly. 

## * Functionalities.

Right now, this website can read any markdown file and automatically format it into a post at the path _/posts/:fileName_. It supports images, and it even supports mathematical characters! Here's an example:

$$
\lim_{y\to x}f(y)
$$

This is really nice, because it allows me to write about all types of things I'm interested in. I also made it so that code blocks within the markdown file have nice formatting and syntax highligting (shown below with some of the simple styling used in the website):

``` css
a {
  border-bottom: 2px solid #26d962;
  color: #70e697;
  text-decoration: none;
}

a:hover {
  background-color: #26d962;
  color: #0c1810;
  font-weight: 600;
}
```

Everytime I want to add a post to the website, all I have to do is write a note in Obsidian (which writes notes in .md format), and edit my ``data.js`` file with some information about the post. Everything else happens automatically!

```js data.js
export const POSTS = {
    "testmd": {
        titulo: "First version of the website!",
        data: "2023-11-15",
        id: "bolotaeuv1"
    },
    "samplemarkdown": {
        titulo: "Sample Markdown file",
        data: "2023-11-08",
        id: "samplemarkdown",
    }
}
```

Another thing this website does right, is that it doesn't need to refresh the page to update the content being rendered. This is one of the main reasons one would use React, but after starting out with HTML and CSS, you can really feel the difference in responsiveness. 

### * Last notes.

There are, of course, many websites like this one. The portfolio website might just be the most common project for an aspiring programmer to build. I did inspire myself in a bunch of other websites. Here are some of them:

- [Slama.dev](https://slama.dev/) - This one might be my favorite, simply because it feels like the guy that did it is in a close enough stage of his life to mine, and it seems we share a bunch of common interests as well. He has put a lot of really awesome stuff in his website, and I hope this "blog" thing of mine will also have a similar amount of interesting things in it one day.
- [Tania Rascia](https://www.taniarascia.com/) - I really like this website because it is beautiful (while still being simple), and the creator of it manages to post very engrossing technical content, while at the same time having a very personal website talking about her path in life. 
- [Alexandru-Paul Copil](https://cpl.li/) - A lot of the inspiration for the styling of my website comes from here. The whole link and hover styles I use is basically the same from there, and I really like the author's perspective about simple web design. 

At the end of the day, I'm reasonably pleased with the results. It's cool to finally have a project be kinda done, even if I end up adding a few other functionalities on top of this in the future. 