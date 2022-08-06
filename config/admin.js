module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80ccc3aa5b4e2deb07e45f709ba6f2ec'),
  },
});
