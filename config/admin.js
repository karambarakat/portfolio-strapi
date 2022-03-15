module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b1e86d86144a2b1aa7b321306530b63'),
  },
});
