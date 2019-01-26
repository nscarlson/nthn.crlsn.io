import { init } from './client'

jest.mock('react-dom')

describe('client', () => {
    describe('init()', () => {
        let render

        beforeEach(() => {
            render = require('react-dom').render

            render.mockImplementation((element, container, callback) => {
                callback()
            })

            jest.spyOn(document, 'getElementById').mockImplementation(() => null)
        })

        it('renders the app', () => {
            init()

            expect(render).toHaveBeenCalledWith(expect.anything(), null, expect.anything())
            expect(document.getElementById).toHaveBeenCalledWith('app')
        })
    })
})
