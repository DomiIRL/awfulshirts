# awfulshirts
 
## Background

This is a frontend school project for an imagined online shop.

The shop aims at selling merchandise with "funny" jokes.

#### I do not own any of the content shown on the website. It is a completely fun project and is not to be taken seriously!


## Technologies

Most of the website is made via plain html and css, minor js was also used for injecting navbar and footer.

Since its only html files it will not manage routing so there is no 404 or other error pages.
While it consists of html files it will not work locally without a webserver since absolute paths are being used.

The website is automatically published to github pages via a static deploy workflow.
Website Demo is reachable under https://awfulshirts.kxmischesdomi.me (Hopefully still up for you)

In addition to github pages there is also a premade docker compose and dockerfile to deploy the page into a container out of the box.

## Setup

### Docker

With Compose:
```
1. Clone Repository
2. Run "docker compose up -d"
```

Without Compose:
```
Currently not possible
```

### XAMPP

To set up xampp:
```
1. Clone Repository
2. Open httpd.conf in the apache webserver
3. Set "DocumentRoot" to your cloned repository + "static" subfolder
```

## Folder Structure

```
project
├───.github
│   └───workflows
└───static
    ├───assets
    │   ├───content
    │   │   ├───hoodies
    │   │   ├───mugs
    │   │   ├───shirts
    │   │   └───socks
    │   └───fonts
    ├───contact
    ├───imprint
    ├───privacy
    ├───shop
    │   ├───hoodies
    │   │   ├───async
    │   │   ├───database
    │   │   ├───hungry
    │   │   ├───programmer
    │   │   ├───tcp
    │   │   └───weird
    │   ├───mugs
    │   │   └───facebook_mom
    │   ├───shirts
    │   │   ├───alcohol
    │   │   ├───chemistry
    │   │   ├───coffee_programmer
    │   │   ├───html
    │   │   ├───java
    │   │   ├───math
    │   │   ├───print
    │   │   ├───reaction
    │   │   ├───space
    │   │   ├───tcp
    │   │   ├───weed
    │   │   └───wizard
    │   └───socks
    │       ├───cat_ass
    │       ├───dad_joke
    │       └───true
    ├───src
    ├───styles
    └───templates
```
