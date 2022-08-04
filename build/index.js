/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict'
let __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
let express_1 = __importDefault(require('express'))
let app = (0, express_1.default)()
/* Routes */
app.get('/api', function (req, res) {
    res.send('Hello World!')
})
/* Start server */
let port = 3000
app.listen(port, function () {
    console.log('Server started on port '.concat(port))
})
