let userHistory = {};

export const userTracker = (req, res, next) => {

    // Recupere l'adresse ip de l'utilisateur
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Visited by user with IP: ${ip} at ${new Date().toISOString()}`);

    // Initialise l'historique de l'utilisateur si il n'existe pas deja
    if (!userHistory[ip]) userHistory[ip] = [];

    // Defini l'ordre des routes
    const accessOrder = ['foret', 'montagne', 'volcan', 'ocean', 'caverne'];
    // Recupere l'URL actuelle de l'utilisateur
    const currentLocation = req.params.location;

    if (accessOrder.indexOf(currentLocation) !== userHistory[ip].length) {
        res.status(403).send('<h1>Tu n\'as donc pas honte de tricher hein ;)</h1>');
        return;
    }

    // Save user history
    userHistory[ip].push(currentLocation);
    next();
}

export const errorHandler = (req, res) => {
    res.status(404).send('<h1>Ce serait trop simple...</h1>')
}