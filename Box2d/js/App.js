(function () {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;


    var box2dUtils;		// classe utilitaire
    var world; 			// "monde" 2dbox
    var canvas;			// notre canvas
    var canvasWidth;	// largeur du canvas
    var canvasHeight;	// hauteur du canvas
    var context;		// contexte 2d

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
        ground = box2dUtils.createBox(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 10, true, 'ground');

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

        // Exécuter le rendu de l'environnement 2d
        window.setInterval(update, 1000 / 60);
    }

    // Mettre à jour le rendu de l'environnement 2d
    this.update = function () {
        // effectuer les simulations physiques et mettre à jour le canvas
        world.Step(1 / 60, 10, 10);
        world.DrawDebugData();
        world.ClearForces();
    }

}());