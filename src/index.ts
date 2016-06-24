import 'isomorphic-fetch'
import * as Koa from 'koa'
import { setRouters } from './decorators/router'
import { AppRouter } from './router'

const app = new Koa()

setRouters(app, [ AppRouter ])

app.listen(5010)
