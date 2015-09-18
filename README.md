## Shaka Code Website
This is an In Progress Shaka Code Website.

## Dependencies to build
1. Bower: `npm install -g bower`
2. Gem Octopress: `gem install octopress`

## Run Locally
1. `git clone git@github.com:shakacode/shakacode-website.git`
2. `cd shakacode-website`
3. `bower install`
4. `jekyll serve`
5. go to localhost:4000

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


    asset_pipeline:
      order_js:
        - jquery.js
        - main.js


## Members Data
Feel free to change your **user data** in _data/members.yml. You bio should not be longer than 255 characters.

## To be done
See Trello board **Shaka Code Website**
