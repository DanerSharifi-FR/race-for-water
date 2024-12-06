(function () {
    // "Import" des classes box2dweb
    var b2World = Box2D.Dynamics.b2World;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2AABB = Box2D.Collision.b2AABB;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2Fixture = Box2D.Dynamics.b2Fixture;
    var b2MassData = Box2D.Collision.Shapes.b2MassData;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;


    /**
     * Constructeur
     */
    Box2dUtils = function () {
        this.SCALE = 30;	// Définir l'échelle
    }

    /**
     * Classe Box2dUtils
     */
    Box2dUtils.prototype = {

        /**
         * Créer le "monde" 2dbox
         * @param context le contexte 2d dans lequel travailler
         * @return b2World
         */
        createWorld: function (context) {
            var world = new b2World(
                new b2Vec2(0, 10),	// gravité
                false				// doSleep
            );

            // Définir la méthode d'affichage du débug
            var debugDraw = new b2DebugDraw();
            // Définir les propriétés d'affichage du débug
            debugDraw.SetSprite(context);		// contexte
            debugDraw.SetFillAlpha(1);		// transparence
            debugDraw.SetLineThickness(1.0); 	// épaisseur du trait
            debugDraw.SetDrawScale(30.0);		// échelle
            // Affecter la méthode de d'affichage du débug au monde 2dbox
            debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
            world.SetDebugDraw(debugDraw);

            return world;
        },

        /**
         * Créer un objet
         * @param string type : le type d'objet à créer
         * @param b2World world : le monde 2dbox dans lequel ajouter l'objet
         * @param Number x : position x de l'objet
         * @param Number y : position y de l'objet
         * @param Object dimensions : les dimensions de l'objet
         * @param Boolean fixed : l'objet est-il statique ou dynamique
         * @param * userData : propriétés spécifiques de l'objet
         * @return l'objet dans le monde 2dbox
         */
        createBody: function (type, world, x, y, dimensions, fixed, userData) {
            // Par défaut, l'objet est statique
            if (typeof (fixed) == 'undefined') {
                fixed = true;
            }
            // Créer l'élément Fixture
            var fixDef = new b2FixtureDef();
            fixDef.userData = userData;		// attribuer les propriétés spécifiques de l'objet
            // Dessiner l'objet en fonction de son type : sa forme et ses dimensions
            switch (type) {
                case 'box':
                    fixDef.shape = new b2PolygonShape();
                    fixDef.shape.SetAsBox(dimensions.width / this.SCALE, dimensions.height / this.SCALE);
                    break;
                case 'ball':
                    fixDef.shape = new b2CircleShape(dimensions.radius / this.SCALE);
                    break;
            }
            // Créer l'élément Body
            var bodyDef = new b2BodyDef();
            // Affecter la position à l'élément Body
            bodyDef.position.x = x / this.SCALE;
            bodyDef.position.y = y / this.SCALE;
            if (fixed) {
                // élément statique
                bodyDef.type = b2Body.b2_staticBody;
            } else {
                // élément dynamique
                bodyDef.type = b2Body.b2_dynamicBody;
                fixDef.density = 1.0;
                fixDef.restitution = 0.5;
            }
            // Assigner l'élément fixture à l'élément body et l'ajouter au monde 2dbox
            return world.CreateBody(bodyDef).CreateFixture(fixDef);
        },

        /**
         * Créer un objet "box"
         * @param b2World world : le monde 2dbox dans lequel ajouter la box
         * @param Number x : position x de la box
         * @param Number y : position y de la box
         * @param Number width : la largeur de la box
         * @param Number height : la hauteur de la box
         * @param Boolean fixed : la box est-elle statique ou dynamique
         * @param * userData : propriétés spécifiques de la box
         * @return la box dans le monde 2dbox
         */
        createBox: function (world, x, y, width, height, fixed, userData) {
            // Définir les dimensions de la box
            var dimensions = {
                width: width,
                height: height
            };
            // Appel à createBody()
            return this.createBody('box', world, x, y, dimensions, fixed, userData);
        },

        /**
         * Créer un objet "ball"
         * @param b2World world : le monde 2dbox dans lequel ajouter la ball
         * @param Number x : position x de la ball
         * @param Number y : position y de la ball
         * @param Number radius : le rayon de la ball
         * @param Boolean fixed : la bal est-elle statique ou dynamique
         * @param * userData : propriétés spécifiques de la ball
         * @return la ball dans le monde 2dbox
         */
        createBall: function (world, x, y, radius, fixed, userData) {
            // Définir les dimensions de la ball
            var dimensions = {
                radius: radius
            };
            // Appel à createBody()
            return this.createBody('ball', world, x, y, dimensions, fixed, userData);
        },

        createPolygon: function (world, x, y, fixed, userData, positions) {

            var bodyDef = new b2BodyDef();
            bodyDef.type = fixed ? b2Body.b2_staticBody : b2Body.b2_dynamicBody;
            bodyDef.position.Set(x / this.SCALE, y / this.SCALE);

            return this.addPolygon(world, x, y, fixed, userData, world.CreateBody(bodyDef), positions);
        },

        addPolygon: function (world, x, y, fixed, userData, body, positions) {
            // Définir une nouvelle forme polygonale
            var shape = new b2PolygonShape();
            var vertices = positions.map(pos => new b2Vec2(pos.x / this.SCALE, pos.y / this.SCALE));
            shape.SetAsArray(vertices, vertices.length);

            // Définir les propriétés de la fixture
            var fixtureDef = new b2FixtureDef();
            fixtureDef.shape = shape;
            fixtureDef.density = fixed ? 0 : 1.0; // Densité nulle pour objets statiques
            fixtureDef.restitution = 0.5;
            fixtureDef.friction = 0.5;
            fixtureDef.userData = userData;

            // Ajouter la fixture au corps existant
            body.CreateFixture(fixtureDef);

            // Retourner le corps mis à jour
            return body;
        },
        createElasticJoint: function (world, bodyA, bodyB, x1, y1, x2, y2) {
            // Créer un joint de type DistanceJoint (imite un ressort)
			var jointDef = new b2DistanceJointDef();
			jointDef.bodyA = bodyA;
			jointDef.bodyB = bodyB;
			jointDef.localAnchorA.Set(0, 0);  // Position of the anchor relative to bodyA
			jointDef.localAnchorB.Set(0, 0);  // Position of the anchor relative to bodyB
			jointDef.length = 500 ; // Set the length to a very large value
			jointDef.frequencyHz = 2.0; // Frequency of the "spring" (set for spring behavior)
			jointDef.dampingRatio = 0.5; // Damping ratio for the "spring"

// Create the joint in the world
			return world.CreateJoint(jointDef);
		},

		the_ground: function(world, x, y, width, height, fixed = true) {
            // Crée le corps physique du sol
            var bodyDef = new b2BodyDef();
            bodyDef.position.Set(x / this.SCALE, y / this.SCALE);

            var shape = new b2PolygonShape();
            shape.SetAsBox(width / this.SCALE, height / this.SCALE);

            var fixtureDef = new b2FixtureDef();
            fixtureDef.shape = shape;
            fixtureDef.friction = 0.9;
            fixtureDef.restitution = 0.1;

            var groundBody = world.CreateBody(bodyDef);
            groundBody.CreateFixture(fixtureDef);

            return groundBody;

        },

        the_ground2: function(world, x, y, width, height, fixed = true) {
            // Crée le corps physique du sol
            var bodyDef = new b2BodyDef();
            bodyDef.position.Set(x / this.SCALE, y / this.SCALE);

            var shape = new b2PolygonShape();
            shape.SetAsBox(width / this.SCALE, height / this.SCALE);

            var fixtureDef = new b2FixtureDef();
            fixtureDef.shape = shape;
            fixtureDef.friction = 0.9;
            fixtureDef.restitution = 0.1;

            var groundBody = world.CreateBody(bodyDef);
            groundBody.CreateFixture(fixtureDef);

            return groundBody;
        },


        updateMovingGround: function(ground, world, speed) {
            // Avancer le sol vers la gauche en ajustant sa position
            var currentPosition = ground.GetPosition();
            var newX = currentPosition.x - (speed / this.SCALE);

            ground.SetPosition(new b2Vec2(newX, currentPosition.y));
        }




    }
}());