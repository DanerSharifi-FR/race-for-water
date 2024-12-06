(function () {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var box2dUtils;        // Classe utilitaire
    var world;             // "Monde" 2D Box2D
    var canvas;            // Canvas HTML
    var canvasWidth;       // Largeur du canvas
    var canvasHeight;      // Hauteur du canvas
    var context;           // Contexte 2D du canvas

    var posX;              // Position X du sol
    var posY;              // Position Y du sol
    var lastPosX = 0;      // Dernière position X pour générer le sol
    var lastPosY = 0;      // Dernière position Y pour générer le sol

    // Initialisation
    $(document).ready(function () {
        init();
    });

    // Lancer à l'initialisation de la page
    this.init = function () {

        box2dUtils = new Box2dUtils();	// instancier la classe utilitaire

        // Récupérer la canvas, ses propriétés et le contexte 2d
        canvas = $('#gipCanvas').get(0);
        canvasWidth = parseInt(canvas.width);
        canvasHeight = parseInt(canvas.height);
        context = canvas.getContext('2d');

        world = box2dUtils.createWorld(context); // box2DWorld

        // Créer le "sol" de notre environnement physique
        //ground= box2dUtils.createBox(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 10, true, 'ground');

        var car = box2dUtils.createPolygon(
            world,
            200, // Position X
            200, // Position Y
            false, // Objet dynamique
            'customPolygon', // User data
            [
                {x: 50, y: -20},
                {x: 50, y: 20},
                {x: -60, y: 20},
                {x: -60, y: -20}
            ]
        );

        box2dUtils.addPolygon(world,
            200, // Position X
            200, // Position Y
            false, // Objet dynamique
            'customPolygon',
            car,// User data
            [
                {x: 42.42640687119285, y: 0 - 20},
                {x: 35.35533905932738, y: 7.0710678118654755 - 20},
                {x: 0, y: -21.213203435596427 - 20},
                {x: 7.0710678118654755, y: -28.284271247461902 - 20}
            ]
        )

        box2dUtils.addPolygon(world, 200, 200, false, 'dudeBody', car,
            [
                {x: -20, y: -40},
                {x: -20, y: 10},
                {x: -10, y: 10},
                {x: -10, y: -40}
            ])

        rightTire = box2dUtils.createBall(world, 230, 220, 10, false, 'customBall');
        leftTire = box2dUtils.createBall(world, 160, 220, 10, false, 'customBall');

        // box2dUtils.createElasticJoint(world, rightTire, car, 0, 0, 0, 0);

        // Créer le sol initial
        ground = box2dUtils.the_ground(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 70, true);

        // Démarrer la mise à jour du jeu
        setInterval(gameUpdate, 1000 / 30); // 30 FPS

        // Exécuter le rendu de l'environnement 2D
        window.setInterval(update, 1000 / 60);
    }


        // Mettre à jour le rendu de l'environnement 2D
        this.update = function () {
            // Effectuer les simulations physiques et mettre à jour le canvas
            world.Step(1 / 60, 10, 10);
            world.DrawDebugData();
            world.ClearForces();
        }



    this.gameUpdate = function () {
        // Paramètres
        var segmentLength = 100, pointCount = 5;

        // Créer un tableau de points pour chaque segment
        var segment = [];
        for (var i = 0; i < pointCount; i++) {
            var newX = lastPosX + (i * (segmentLength / (pointCount - 1))); // Position X
            var newY = lastPosY + (Math.random() * 400 - 20); // Variation Y aléatoire
            segment.push({ x: newX, y: newY });
        }

        // Fermer le segment avec les points bas du sol
        segment.unshift({ x: segment[0].x, y: canvasHeight - 10 });
        segment.push({ x: segment[segment.length - 1].x, y: canvasHeight - 10 });

        // Ajouter ce segment de terrain au monde Box2D
        box2dUtils.addPolygon(world, lastPosX, lastPosY, true, 'groundSegment', ground, segment);

        //box = box2dUtils.createBox( world, lastPosX, lastPosY, 40, 50, true, "box");

        // Mettre à jour les positions pour le prochain segment
        lastPosX = segment[segment.length - 1].x;
        lastPosY = segment[segment.length - 1].y;

    }










}());