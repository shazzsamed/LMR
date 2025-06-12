import transmit from '@adonisjs/transmit/services/main'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'
import axios from 'axios'

export default class ChatsController {
  async store({ request, response }: HttpContext) {
    const { message, username } = request.only(['message', 'username'])

    if (!message) {
      return response.redirect().back()
    }

    const res = await axios.post('http://127.0.0.1:5000/predict', { sentence: message })

    console.log(
      'messgae received',
      `[${DateTime.now().toFormat('DD H:mm:ss')}] : ${message}\n${JSON.stringify(res.data)}`
    )
    const data = {
      text: message,
      coordinates: JSON.parse(JSON.stringify(res.data)).locations[0].coordinates,
      location: JSON.parse(JSON.stringify(res.data)).locations[0].location,
      severity: JSON.parse(JSON.stringify(res.data)).severity,
    }

    transmit.broadcast('chats/1', {
      message: data,
    })

    return {
      message: `[${DateTime.now().toFormat('DD H:mm:ss')}] ${username ?? 'Guest'}: ${message}`,
    }
  }
}
