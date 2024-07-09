import * as http from 'node:http'
import {
    defaultConfig,
    requestHandler
} from './node-git-http-backend/src/index.ts'

const config = defaultConfig(
    '/usr/lib/git-core/git-http-backend',
    '/home/vera/blank.git'
)

http.createServer(requestHandler(config))
    .listen(3333,
        () => console.log(
            `Git backend listening to port 3333.\n` +
            'If you ran, "npm run-script init-dev-env".\n' +
            'You should be able to clone the test repository with:\n' +
            'git clone http://localhost:3333/test.git'
        )
    )