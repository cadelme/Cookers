module.exports = app => {
	const indexRoutes = require('./index.routes')
	app.use('/', indexRoutes)

	const authRoutes = require('./auth.routes')
	app.use('/auth', authRoutes)
}