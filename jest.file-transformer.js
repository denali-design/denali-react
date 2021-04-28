// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    process(src, filename) {
        return `module.exports = ${JSON.stringify(
            path.join('APP_ROOT', path.relative(path.join(__dirname, 'src'), filename)),
        )};`;
    },
};
