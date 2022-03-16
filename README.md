# 🚀 Overview

the backend of [my portfolio](https://github.com/karambarakat/portfolio) is managed by [Strapi](https://strapi.io/) v4

### `develop`

Start the Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

# Database:

In development the database will be used is SQLite,

Because SQLite is [not supported](https://devcenter.heroku.com/articles/sqlite3) by Heroku, I will be use Postgress in production. you can see the configuration in `/config/env/production/database.js` file

# Media Cloud:

for this project I will be using Cloudinary to upload all the media. see the configuration I made at `/config/plugin.js`

# ⚙️ Deployment

This portfolio is being deployed by [Heroku](heroku.com). every push to the `master` branch will automatically deploy to Heroku and trigger a new version.

you can view this application live [here](strapi-portfolio-22.herokuapp.com)

# Webhooks with NextJS

for the front-end I use NextJS, I will be using the latest on-demand ISG NextJS's feature to content content to the front-end

# ➡️ Branches

there are two main branches:

1. master: will trigger new version on.
2. dev: the default branch to commit any new code, the code here is to be merged with the master branch.
