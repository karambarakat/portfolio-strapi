# 🚀 Overview

Strapi project build with the latest version v4, this provide a structure for the SEO, Pages and all my other project

this is the backend of [my portfolio](https://github.com/karambarakat/portfolio)

live website for the frontend [here](p.karam-dev.com)

# integration with NextJS

this project used the latest features of NextJS's ISG on demand and Strapi's Webhook.

for full guide check this [gist](gist.github.com/karambarakat/157d31fadcacaf5a7b63b6efa6e17e51)

- [x] in both strapi and next app you have to have a `REVALIDATION_TOKEN` token that is the same.
- [x] add to `.config/server.js` the webhook config
- [x] in `/admin/settings/webhooks` add this url `http://localhost:3000/api/revalidate` or you custom url

# `develop`

Start the Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

you can view the front-end live [here](p.karam-dev.com)

```
npm run dev
```

# Database:

In development the database will be used is SQLite,

Because SQLite is [not supported](https://devcenter.heroku.com/articles/sqlite3) by Heroku, I will be use Postgress in production. you can see the configuration in `/config/env/production/database.js` file

# Media Cloud:

for this project I will be using Cloudinary to upload all the media. see the configuration I made at `/config/plugin.js`

# ⚙️ Deployment

This portfolio is being deployed by [Heroku](heroku.com). every push to the `master` branch will automatically deploy to Heroku and trigger a new version.

# ➡️ Branches

there are two main branches:

1. master: will trigger new version on Heroku.
2. develop: the default branch to commit any new code, the code here is to be merged with the master branch.
