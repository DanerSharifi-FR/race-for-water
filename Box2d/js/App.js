(function(){

    var box2dUtils;		// classe utilitaire
    var world; 			// "monde" 2dbox
    var canvas;			// notre canvas
    var canvasWidth;	// largeur du canvas
    var canvasHeight;	// hauteur du canvas
    var context;		// contexte 2d

    // Initialisation
    $(document).ready(function() {
        init();
    });

    // Lancer à l'initialisation de la page
    this.init = function() {
        box2dUtils = new Box2dUtils();	// instancier la classe utilitaire

        // Récupérer la canvas, ses propriétés et le contexte 2d
        canvas = $('#gipCanvas').get(0);
        canvasWidth = parseInt(canvas.width);
        canvasHeight = parseInt(canvas.height);
        context = canvas.getContext('2d');

        world = box2dUtils.createWorld(context); // box2DWorld

        // Créer le "sol" de notre environnement physique
        //ground= box2dUtils.createBox(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 10, true, 'ground');

        car=box2dUtils.createPolygon(
            world,
            200, // Position X
            200, // Position Y
            false, // Objet dynamique
            'customPolygon', // User data
         [
            {x:122,y:7},
            {x:11,y:51},
            {x:-45,y:50},
            {x:-137,y:-4},
            {x:-150,y:-40},
            {x:-69,y:-54},
            {x:140,y:-50},
            {x :150,y:-21}
        ]


    );

        ground = box2dUtils.the_ground(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 70 );

        setInterval(gameUpdate, 1000 / 30); // 30 FPS



        // Exécuter le rendu de l'environnement 2d
        window.setInterval(update, 1000 / 60);
    }

    // Mettre à jour le rendu de l'environnement 2d
    this.update = function() {
        // effectuer les simulations physiques et mettre à jour le canvas
        world.Step(1 / 60,  10, 10);
        world.DrawDebugData();
        world.ClearForces();
    }

    this.gameUpdate = function() {
            // Vitesse du sol (pixels par seconde)
            var groundSpeed = 2;

            // Mise à jour du sol
            box2dUtils.updateMovingGround(ground, world, groundSpeed);

            // Mise à jour du monde Box2D
            world.Step(1 / 30, 10, 10);
            world.DrawDebugData();
            world.ClearForces();
            ground = box2dUtils.the_ground2(world, canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 70 );

        }


}());