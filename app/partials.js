export const header = `
    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="/css/styles.css">
    </head>
    <body>
`

export const footer = `
    </body>
    </html>
`

export const homeContent = `
    <div class="container">
        <h1>La Grande Chasse au Trésor d'Hubert</h1>
        <img src="/img/hubert-le-lapin.png" alt="Image du lapin Hubert" >
        <p>Il était une fois un lapin très curieux nommé Hubert. Hubert était connu pour sa maladresse et sa distraction constantes. Il avait tendance à se retrouver dans des situations hilarantes, souvent à cause de sa propre désorganisation. Cependant, une chose que tout le monde admirait chez Hubert, c'était sa persévérance. Quand il se fixait un objectif, il ne s'arrêtait pour rien jusqu'à ce qu'il l'atteigne.</p>
        <p>Un jour, Hubert découvrit un ancien parchemin roulé près de son terrier. Le parchemin parlait d'un trésor légendaire, caché depuis des siècles. L'idée de trouver ce trésor excita immédiatement la curiosité de Hubert. Malgré les avertissements de ses amis sur les dangers du voyage, Hubert était déterminé à trouver ce trésor.</p>
        <button onclick="location.href='/foret'">Commencer la chasse</button>
    </div>
`

export const forestContent = `
    <div class="container">
        <h1>La Forêt Mystérieuse</h1>
        <! -- Cette foret est bien trop dangereuse pour un petit lapin, sortons et rejoignons la /montage -->
        <img src="/img/foret.jpg" alt="Image de la forêt mystérieuse">
        <p>Hubert sentit une étrange sensation en regardant autour de lui. Les arbres, le sol, même l'air semblaient murmurer quelque chose. Comme s'ils avaient un secret à partager, une histoire à raconter. Il savait que chaque élément dans la forêt avait une place spécifique, une raison d'être là. Comme les annotations d'un jardinier minutieux dans le grand livre de la nature.</p>
        <p>Peut-être devait-il aussi chercher dans les endroits les moins évidents ?</p>
    </div>
`

export const mountainContent = `
    <div class="container">
        <h1>Hubert dans la Montagne</h1>
        <img src="/img/montagne.jpg" alt="Image du volcan">
        <p>Arrivé à la montagne, Hubert fut impressionné par l'immensité de celle-ci. Les sommets enneigés scintillaient
            sous le soleil, créant un spectacle à couper le souffle. Il savait que pour atteindre le prochain point de son
            voyage, il devait réussir à passer à travers. Il se souvint alors de l'ancien conte qu'il avait entendu sur les
            montagnards légendaires qui avaient suivi une séquence spécifique de mouvements pour naviguer dans ces terres
            périlleuses. "Haut, haut, bas, bas, gauche, droite, gauche, droite...". Il semblait oublié 2 lettres...</p>
        <p>Serait-ce la clé de son passage ?</p>
    </div>
    <script>
        let input = [];
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        document.addEventListener('keydown', (e) => {
        input = [...input, e.key];
        input.splice(-konamiCode.length - 1, input.length - konamiCode.length);
        
        if (input.join('').includes(konamiCode.join(''))) {
            alert("Incroyable! Un tremblement de terre soudain ouvre un passage secret vers... un volcan!");
        }
        });
    </script>
`

export const volcanoContent = `
    <! -- Tu ne regarde pas au bon endroit -->
    <div class="container">
        <body>
            <h1>Hubert et le Volcan</h1>
            <img src="/img/volcan.jpg" alt="Image du volcan">
            <p>Une fois dans le volcan, la chaleur était insoutenable. Des rivières de lave s'écoulaient tout autour, créant une lueur rougeoyante qui éclairait le chemin d'Hubert. Il s'arrêta un instant, prenant conscience de l'immensité de sa quête. Il se rappela alors d'un vieux dicton des lapins aventuriers : "Dans les profondeurs du danger, ne te fies pas seulement à ce que tu vois. Souvent, le vrai chemin se cache au dessus, à l'endroit où personne ne regarde...". </p>
            <p>Hubert regarda autour de lui, se demandant où son voyage le mènerait ensuite.</p>
        </body>
    </div>
`

export const oceanContent = `
    <! -- Quel est ce langage codé, je n'y comprends rien. Un véritable brainfuck. -->
    <div class="container">
        <body>
            <h1>Hubert et l'ocean</h1>
            <img src="/img/ocean.webp" alt="Image de l'ocean">
            <p>+++++ +++[- >++++ ++++< ]>+.< +++++ +[->+ +++++ <]>++ +++++ ++++. ++.<+
            ++[-> ---<] >---- .<+++ [->++ +<]>+ ++++. <++++ +++++ [->-- ----- --<]>
            --.<+ +++++ +++[- >++++ +++++ <]>++ ++.-- ----- .---- ----- .<+++ +++++
            [->-- ----- -<]>- ----. <++++ ++++[ ->+++ +++++ <]>++ +++++ +++++ .+++.
            -.--- ----. <+++[ ->+++ <]>++ +++.< ++++[ ->--- -<]>. <++++ ++++[ ->---
            ----- <]>-- ---.< +++++ +++[- >++++ ++++< ]>+++ +++++ +++++ +.<++ +[->-
            --<]> ----. +++++ +.--. <++++ +++[- >---- ---<] >---- ----. <+++[ ->---
            <]>-- -.<++ ++++[ ->+++ +++<] >++++ .<+++ +++[- >++++ ++<]> +++++ ++++.
            <++++ [->-- --<]> ---.+ ++.<+ ++[-> +++<] >++++ .++.< +++++ ++++[ ->---
            ----- -<]>- --.<+ +++++ ++[-> +++++ +++<] >+.<+ +++[- >++++ <]>+. .----
            ----- .<+++ [->++ +<]>+ +++.< ++++[ ->--- -<]>- .<+++ +++++ [->-- -----
            -<]>- ----. <++++ +++++ [->++ +++++ ++<]> ++.++ .---. <++++ +++++ [->--
            ----- --<]> -.<++ +++++ ++[-> +++++ ++++< ]>+++ +.--- ----. ----- ----.
            <++++ ++++[ ->--- ----- <]>-- ---.< +++++ +++[- >++++ ++++< ]>+++ +++++
            +++++ +++.- ---.< +++[- >---< ]>--. +++++ +.--. <++++ ++++[ ->--- -----
            <]>-- ---.< +++++ +++[- >++++ ++++< ]>+++ ++.<+ ++[-> +++<] >++++ ++.--
            .<+++ +[->- ---<] >-.<+ ++[-> +++<] >++++ .---- ---.- -.+++ +++++ .----
            ----. +++++ ++++. +++++ +.<++ +++++ ++[-> ----- ----< ]>--- .<+++ +++++
            [->++ +++++ +<]>+ ++.-- .<+++ [->++ +<]>+ +.+.- ----- --.<+ +++++ +[->-
            ----- -<]>- ----- .<+++ [->-- -<]>- ----. <++++ ++[-> +++++ +<]>+ .<+++
            +++[- >++++ ++<]> +++++ .<+++ +++++ [->-- ----- -<]>- ----- ----- ---.<
            +++++ +++[- >++++ ++++< ]>+++ ++.<+ +++[- >++++ <]>++ +.--- ----- .----
            .+++. +++.< ++++[ ->--- -<]>- .<+++ [->++ +<]>+ +++.+ +++++ .<+++ +++++
            +[->- ----- ---<] >---. <++++ ++++[ ->+++ +++++ <]>++ +++++ +++++ .----
            ---.< +++[- >+++< ]>+++ ++.<+ +++++ +++[- >---- ----- <]>-- .<+++ +++++
            [->++ +++++ +<]>+ .<+++ [->++ +<]>+ +.--- ----. +++++ ++++. +++++ +.---
            --.++ ++++. ---.+ .<+++ +++++ [->-- ----- -<]>- ----- -.<++ +[->- --<]>
            ---.< +++++ +++[- >++++ ++++< ]>+++ +++++ +.+++ .<+++ +++++ [->-- -----
            -<]>- ----- ----- -.<++ +++++ +[->+ +++++ ++<]> ++++. +.--. <+++[ ->+++
            <]>++ +.+++ +++.+ .---- .<+++ [->-- -<]>- ---.< +++++ +++[- >---- ----<
            ]>--- --.<+ +++++ ++[-> +++++ +++<] >++++ +++++ +++.< +++++ +++[- >----
            ----< ]>--- --.<+ +++++ +[->+ +++++ +<]>+ +++++ +++++ ++.++ +++++ ++.++
            ++++. --.<+ ++[-> ---<] >---- ..<++ +++++ +[->- ----- --<]> ----- .<+++
            +++++ [->++ +++++ +<]>+ +++.< +++++ ++[-> ----- --<]> ----- ----- --.<+
            +++++ ++[-> +++++ +++<] >++++ +++++ +++++ .---- ---.- ----- ---.< +++++
            +++[- >---- ----< ]>--- --.<+ +++++ ++[-> +++++ +++<] >++++ +++++ ++++.
            <+++[ ->+++ <]>++ +.--- ---.+ .<+++ [->-- -<]>- ----- .<+++ [->++ +<]>+
            +++.- ----- ---.- ---.< ++++[ ->+++ +<]>. --.<+ ++[-> ---<] >---- -.<++
            +++++ +[->- ----- --<]> ----- .<+++ +++++ [->++ +++++ +<]>+ ++.-- .<+++
            +[->+ +++<] >++++ +.<++ ++[-> ----< ]>-.< +++[- >+++< ]>+++ +.--- -.---
            ----- -.<++ +++++ [->-- ----- <]>-- ----. <+++[ ->--- <]>-- ---.< </p>
        </body>
    </div>
`

export const cavernContent = `
    <div class="container">
        <h1>La Grotte Mystérieuse</h1>
        <img src="/img/porte_fermee.jpg" alt="Image de la porte de caverne">
        <p>Hubert s'approche prudemment de l'entrée de la caverne. À l'intérieur, l'obscurité est presque totale, mais il parvient à distinguer quelque chose qui ressemble à une porte massive au loin. Il s'approche, son cœur battant d'excitation. La porte est fermée, gardée par une vieille serrure rouillée. La porte elle-même est ornée d'une image étrange, comme une énigme.</p>
        <p>Soudain, une pensée traverse l'esprit de Hubert. Quelque chose qu'il a lu une fois, un vieux conte de lapin. Quelque chose à propos de changer les choses en les appelant par un autre nom.</p>
        <p>Il se met au travail, concentré, déterminé à ouvrir cette porte par tous les moyens nécessaires. Peut-être qu'en cherchant bien, vous pourrez lui donner un coup de main...</p>
    </div>
`

export const terrierContent = `
    <div class="container">
        <h1>Félicitations !</h1>
        <img src="/img/felicitations.gif">
        <p>Hubert, avec votre aide, a réussi à trouver le trésor et à rentrer à la maison sain et sauf. Vous avez brillamment résolu toutes les énigmes de cette aventure !</p>
        <p>Hubert vous remercie pour votre aide et vous offre une part de son trésor en remerciement. Qui sait quelles aventures vous attendent la prochaine fois ?</p>
    </div>
`