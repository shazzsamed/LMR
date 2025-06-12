/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import transmit from '@adonisjs/transmit/services/main'
const ChatsController = () => import('#controllers/chats_controller')

transmit.registerRoutes()

router.post('messages', [ChatsController, 'store']).as('submit.message')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
