import * as partials from './partials.js'



export const home = (req, res) => {
    res.send(`
        ${partials.header}
        ${partials.homeContent}
        ${partials.footer}
    `)
}

export const location = (req, res) => {
    const location = req.params.location;

    switch (location) {
        case 'foret':
            res.send(`
                ${partials.header}
                ${partials.forestContent}
                ${partials.footer}
            `);
            break;
        case 'montagne':
            res.send(`
                ${partials.header}
                ${partials.mountainContent}
                ${partials.footer}
            `)
            break;
        case 'volcan':
            res.set('X-Next-Location', 'ocean');
            res.send(`
                ${partials.header}
                ${partials.volcanoContent}
                ${partials.footer}
            `)
            break;
        case 'ocean':
            res.send(`
                ${partials.header}
                ${partials.oceanContent}
                ${partials.footer}
            `)
            break;
        case 'caverne':
            res.send(`
                ${partials.header}
                ${partials.cavernContent}
                ${partials.footer}
            `)
            break;
        case 'terrier':
            res.send(`
                ${partials.header}
                ${partials.terrierContent}
                ${partials.footer}
            `)
            break;
        default:
            res.send('This location does not exist in our treasure map.');
    }
}