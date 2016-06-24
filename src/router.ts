import { IRouterContext } from 'koa-router'
import { router } from './decorators/router'
import { getAccessToken } from './apis/oauth'

@router('/api')
export class AppRouter {

  @router({
    path: '/access/:code',
    method: 'get'
  })
  async getAccess(ctx: IRouterContext, next: (...args: any[]) => Promise<any>) {
    const code = ctx.params.code
    let err: any
    const result = await getAccessToken(code).catch(e => {
      err = e
    })
    if (result) {
      ctx.body = result
    } else {
      ctx.status = 400
    }
    await next()
  }
}
