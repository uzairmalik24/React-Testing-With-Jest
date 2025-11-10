import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'
import { userHandlers } from './userHandler.js'

export const server = setupServer(...handlers, ...userHandlers)