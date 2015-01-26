# Heavy Balloons

A proof of concept game by Fabricio Zuardi. (my [Global Game Jam][ggj] 2015 [entry][ggjentry])

## About

It's a 2 player race to see who can reach the flag first, and there is only one option: to move forward!

During the course of the track, you will face harmless balloons that gets released when your character passes by them, and when they fly to your opponent's screen, they become heavy-deadly objects.

Which means that you must be careful about the balloons of your opponent as well
in order to not get hit.

Stop at the right time and run when possible, there is no turning back.

![screenshot of the game][screenshot]

## Usage

To play, just access [http://ggj15.nulo.com.br][playurl].

## Contributing

To browse the code and launch up the local server, clone the
[git repository][gitrepo], then make sure you have [iojs][iojs] (or a recent version of [node][node] with --harmony support) and then:

**install dependencies:**

    cd ggj15
    npm install


**make the build:**

    gulp

**launch the server:**

    npm start


After that you can also use:

    gulp dev

For automatic rebundling of the js. files and automatic browser reload.

### Patches are welcome

If you find a bug, or if you have an idea and want to propose an improvement, please fork this repository, implement your contribution and [send a pull request][pullrequest].

And if you are not a developer or just want to leave feedback you can use [report an issue][reportissue] link or drop me an email at [fabricio@fabricio.org][email]

## Credits

- Floor and Items (flag, balloon, rock, weight)
    - [Platformer Art Complete Pack][platformart]
        - by [Kenney.nl][kenney]
        - license: [CC0 public domain dedication][cc0]
- Avatar sprite
    - [Running Caveman][cavemanspritesheet]
        - by [DanielSiegmund.nl][danielsiegmund]
        - license: [Creative Commons Attribution 3.0][ccby]
- Background
    - [Easy to Tile Sky Backgrounds][tilingbackground]
        - by [Hawkadium][hawkadium]
        - license: [Creative Commons Attribution 3.0][ccby]

## Licenses

### Code

The code of this game is licensed to you under the
[AGPL LICENSE verion 3][agpl], which means that you can copy, modify and
republish it freely, for any purpose (including commercial uses) as long as you
provide a link to your modified version of the code. Please read the full
license for details, it's available at a file named __COPYING__ at the root
folder of this project.

Since the game was an entry for the Global Game Jam competition, there is a
[zip file with an older version][ggjentry] of this code (the snapshot of the
unfinished delivered version) that by [contest rules][ggj15rules] was released
under a
"[Attribution-Noncommercial-Share Alike 3.0 version of the Creative Commons License][ccbyncsa]" that is a more restricted license. If for some reason
do you prefer that, use that older version of the code. Or if you need a different one,
drop me an [email][email].

The game also uses external libraries with different licenses check the __package.json__ file for a list of dependencies.

### Images

The images used in the game are not mine, check the __Credits__ section for a
list of the assets and their licenses.



## Technology notes

I wanted to make a web-based game, and I didn't want to adopt a full-blown IDE because I like simple text editors (like [zed][zed]) and my own workflow/buld-systems. I am a Javascript-node-gulp-browserify kind of person.

So most of the time during this GGJ weekend I spent exploring different HTML5 / JS game engines… and they all have problems! Pretty frustrating. In the end I've settled on [Phaser.JS][phaserjs] that has many features for dealing with sprites and, more importantly, a lot of code examples on their website! :)

My technology "stack" for this project was:

|Function                |Tool                                          |
|------------------------|----------------------------------------------|
|Programming Language    |Javascript - [io.js][iojs] (a nodejs fork)    |
|"node" version manager  |[nvm][nvm]                                    |
|Webserver / API backend |[koa][koa]                                    |
|Game-engine             |[Phaser js][phaserjs]                         |
|Build system            |[gulp][gulp]                                  |
|JS Modules Bundler      |[browserify][browserify]                      |
|Bundle watcher          |[watchify][watchify]                          |
|Browser Reload          |[browsersync][browsersync]                    |
|Browser/Devtools        |[firefox developer edition][fxaurora]         |
|Code Editor             |[zed][zed]                                    |
|Version Control         |[git][git]                                    |
|git GUI                 |[git-cola][gitcola]                           |



[agpl]: http://www.gnu.org/licenses/agpl-3.0.html
[browserify]: http://browserify.org/
[browsersync]: http://www.browsersync.io/
[cavemanspritesheet]: http://opengameart.org/content/running-caveman-spritesheet
[cc0]: http://creativecommons.org/publicdomain/zero/1.0/
[ccby]: http://creativecommons.org/licenses/by/3.0/
[ccbyncsa]: http://creativecommons.org/licenses/by-nc-sa/3.0/
[danielsiegmund]: http://danielsiegmund.nl/
[email]: mailto:fabricio@fabricio.org
[fxaurora]: https://www.mozilla.org/en-US/firefox/developer/
[ggj15rules]: http://globalgamejam.org/legal-policies
[ggj]: http://globalgamejam.org/
[ggjentry]: http://globalgamejam.org/2015/games/heavy-balloons
[git]: http://git-scm.com/
[gitcola]: http://git-cola.github.io
[gitrepo]: https://github.com/fczuardi/ggj15
[gulp]: http://gulpjs.com/
[hawkadium]: http://hawkadium.blogspot.ca/
[iojs]: http://iojs.org
[kenney]: http://kenney.nl/
[koa]: http://koajs.com/
[node]: http://nodejs.org
[nvm]: https://github.com/creationix/nvm
[phaserjs]: http://phaser.io
[platformart]: http://opengameart.org/content/platformer-art-complete-pack-often-updated
[playurl]: http://ggj15.nulo.com.br
[pullrequest]: https://help.github.com/articles/using-pull-requests/
[reportissue]: https://github.com/fczuardi/ggj15/issues
[screenshot]: http://globalgamejam.org/sites/default/files/styles/game_content__wide/public/games/screenshots/2015-01-25-232146_1920x1200_scrot.png?itok=svDdE21m
[tilingbackground]: http://opengameart.org/content/easy-to-tile-sky-backgrounds
[watchify]: http://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/
[zed]: http://zedapp.org
