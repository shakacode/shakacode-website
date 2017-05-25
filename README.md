## ShakaCode Website
This is the ShakaCode Website, http://www.shakacode.com

## Starting Locally

    scripts/shakacode-local

## Deploying

    scripts/shakacode-deploy

## Creating a page or post
See the [octopress readme](https://github.com/octopress/octopress).
1. `octopress new post "The React on Rails Doctrine"`

## Dependencies to build
1. Bower: `npm install -g bower`
2. Gem Octopress: `gem install octopress`

## Run Locally
1. `git clone git@github.com:shakacode/shakacode-website.git`
2. `cd shakacode-website`
3. `bundle`
4. `bower install`
5. `scripts/shakacode-local`
6. go to localhost:4000

## Online and Local Documentation
[Octopress Docs](https://github.com/octopress/octopress) and
[Jekyll Docs](http://jekyllrb.com/docs/home/)

### Local Octopress Documentation
You can run the local Octopress Documentation

1. go to shakacode-website folder
2. run `octopress docs`
3. go to localhost:4444

## CSS
It's a simple BEM style like [this](https://github.com/airbnb/css)

## JS
The [octopress-asset-pipeline](https://github.com/octopress/asset-pipeline) gem takes care of javascript. It combine, compress and fingerprint CSS and JS (and/or Coffescript). You can define precedence on _config.yml like this:

```
  asset_pipeline:
    order_js:
    - jquery.js
    - main.js
```

## Team Members Data
All user info is inside _config.yml, feel free to change your info. If you're playing around on localhost, restart it.
You need to restart the server everytime you make some change on _config.yml. If you add someone, do it alphabetically.

## How to create posts
1. Run the project locally
2. go to the project folder
3. run `octopress new post "<post name>"`. A post <post name> will be created prepended by time, for example: `octopress new post "My new Post"` will create a file 2015-09-21-my-new-post.markdown
4. Please use a branch and PR for new posts!

## Test Locally

```bash
scripts/shakacode-local
```

## How to deploy
After you create your post/page or modify something you need to deploy

```bash
scripts/shakacode-deploy
```

## How to unpublish
1. Run the project locally
2. go to the project folder
3. run `octopress unpublish "<post name>"`

## For more info:
```
jekyll --help
octopress --help
octopress new --help
```

## Live Reload

1. Add [Chrome Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-). Here's the [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
2. Start Jekyll by running: `guard`

For more details, see article [Jekyll Live Reload](http://dan.doezema.com/2014/01/setting-up-livereload-with-jekyll/)

## To be done
See Trello board **ShakaCode Website** and [website issues page](https://github.com/shakacode/shakacode-website/issues).
