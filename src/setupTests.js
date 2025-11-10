import '@testing-library/jest-dom';
import 'whatwg-fetch'
import {beforeAll, afterEach, afterAll} from '@jest/globals'
import { server } from './mocks/server.js'


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())