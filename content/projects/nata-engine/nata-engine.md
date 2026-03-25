## Overview
Nata Engine is a simple data-driven game engine built from the ground up in C++ and OpenGL. This project started as a collection of studies in OpenGL and eventually evolved into an engine. Considering the complexity of a project of this nature, I've been using it as a sandbox for features, algorithms or systems that then might end up making to the final build. The engine is far from being a fully fledged game engine but the current iteration allows to make simple games or to use for any other visualizations as expected.

## Highlights
* Rendering Engine
* Collisions
* Data-oriented design

## Rendering Engine
Rendering abstraction allows for quickly rendering objects without having to worry about all of OpenGL's boilerplate. The current abstraction structure is heavily influenced by this.
<p class="img-row cols-2">
    <img src="content/projects/nata-engine/assets/rendering.png" class="img-col">
    <img src="content/projects/nata-engine/assets/lightsources.gif" class="img-col">
</p>

## Data-Oriented Design
### ECS
Like many other ECS systems, this one is divided in three major parts: entities, components and systems (the latter being tightly coupled to both entities and components). All objects in the ECS inherit from NObject. All NObjects are described by their ID, initialization, game logic and decommision (Begin, Tick and OnDestroy). Small optimizations were made like iterating only through the enabled entities in the world which made Object Pooling much easier to implement. More optimizations could be made like only ticking entities that are in the field of view or proximity but these are yet to be implemented.

&nbsp;
### Object Pooling
A simple object pooling system made possible by using the enable/disable system previously mentioned. Since only enabled entities are iterated through on tick, having many spawned disabled ones has little to no performance impact.
<p class="img-row cols-2">
    <img src="content/projects/nata-engine/assets/shooterdemo.gif" class="img-col">
</p>

&nbsp;
### Data-Oriented Design
Inspired by Unity's DOTS and many other data-oriented approaches to game development, I wanted to experiment having my own for this engine too. The asteroids gif that is shown at the top of the page was made possible by using this system. Components are still not modular enough be seemingly with used this system but it's definitely in the engine's roadmap.

## Collisions
Simple collisions systems like Box vs Box, Sphere vs Sphere and Box vs Sphere are implemented. These systems are mostly used for first iterations or checks on the collisions where then other more advanced systems take place. The most used one of These right now is a system using SAT (Separated Axis Theorem) and AABBs. This system automatically imports a mesh's normals so it can be used even on more complex shapes.

### SAT + AABB
The gif on the right showcases how most collisions are being handled in the engine. It works with an AABB bounding box, calculated by finding the mins and maxs on each axis. A first check is made for overlapping on each object's box and then a second iteration runs the SAT (Separated Axis Theorem) logic. Further optimizations for the collision algorithm include a spatial grid that is not yet implemented.
<p class="img-row cols-2">
    <img src="content/projects/nata-engine/assets/satcollision.gif" class="img-col">
</p>

## Design and Structure
For this project, I made a very conscious effort to keep a consistent coding structure, overall design and conventions. For the file structure, I differentiated engine core files from game scripts by naming them lower-case or upper-case. For game files, they should include the prefix and the name of the class on its file name. This made it very easy to quickly search, find files and differentiate them without a very deep folder structure. Some prefixes like "N" also help understand if a class is from the engine or from a third-party library where names can be the same or very similar.

### Structure
* App: Entry point from engine's main. Creates world, sets game mode and loads assets.
* World: Unique and global object on top of the ECS.
* GameMode: Second in line after World. Multiple GameModes can be created but only one can be set at a time for the world. Initializes initial entities in world and can execute more level specific game logic. Different GameModes should be created for each level. The following is an example of a GameModes' structure.
* Player: The player is an entity with its behaviour divided in each component. The following is an example of a player.
<p class="img-row cols-3">
    <img src="content/projects/nata-engine/assets/order_of_execution.png" class="img-col">
</p>