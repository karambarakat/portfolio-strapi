# 🚀 Overview

the backend of [my portfolio](https://github.com/karambarakat/portfolio) is managed by [Strapi](https://strapi.io/) v4

### `develop`

Start the Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

# Database:

In development the database will be used is SQLite, because SQLite is not supported by Heroku, Read more about [SQLite support](https://devcenter.heroku.com/articles/sqlite3) we will use Postgress in production. you can see the configuration in `/config/env/production/database.js` file

# ⚙️ Deployment

This portfolio is being deployed by [Heroku](heroku.com). every push to the `master` branch will automatically deploy to Heroku and trigger a new version.

you can view this application live [here](strapi-portfolio-22.herokuapp.com)

# ➡️ Branches

there are two main branches:

1. master: will trigger new version on.
2. dev: the default branch to commit any new code, the code here is to be merged with the master branch.
