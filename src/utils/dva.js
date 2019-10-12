import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'
import ext from './ext'

let app;
let store;
let dispatch;

function createApp(opt = {}) {
  const onAction = []
  if (ext.dev) {
    onAction.push(createLogger())
  }
  opt.onAction = onAction

  app = create(opt)
  app.use(createLoading({}))

  if (!global.registered) opt.models.forEach(model => app.model(model))
  global.registered = true
  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
