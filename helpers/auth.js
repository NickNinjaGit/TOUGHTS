module.exports.checkAuth = function(req, res, next) {
    const userId = req.session.userid;
    console.log(`Id do Usuário: ${userId}`);

    if (!userId) {
        return res.redirect("/login");
    }

    next();  // Se o userId existe, continua para o próximo middleware/rota
}
