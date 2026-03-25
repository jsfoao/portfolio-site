## Overview

Implemented core mechanics like interaction system, camera management and camera system.

## Highlights
- Third person camera controller that can orbit or follow and rotate towards a target if there's no player input. It also will react to collision and occlusion as expected and adjust its distance to the target accordingly. Camera also has a free move zone as seen in many AAA games.
- Camera management system to easily possess and control other cameras during runtime. Used mostly for switching cameras to play cutscenes.
- Modular interactable object system

## Third Person Camera
<a href="https://github.com/jsfoao/pack-up-and-leaf/blob/main/Assets/_Game/Scripts/Components/Camera/CameraController.cs" target="_blank" rel="noopener noreferrer">CameraController.cs</a>

Since platformers depend so much on how the movement and camera feels, I took the latter as my main focus for this project. I had to work very closely with the programmer that was working on the player’s movement to make sure that both components fit seamlessly. There’s also a lot of dependencies between camera and movement so we had to plan ahead to make sure the needed properties were easily accessible across components.

&nbsp;
### Orbit
<a href="https://github.com/jsfoao/pack-up-and-leaf/blob/main/Assets/_Game/Scripts/Components/Camera/OrbitCamera.cs" target="_blank" rel="noopener noreferrer">OrbitCamera.cs</a>

The player can move the camera freely around the target in a sphere with radius. The vertical angle is constrained as expected. The euler angles are also looped so that when the angle reaches 360, it starts back at 0.

<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/OrbitCam.gif" class="img-col">
</p>

&nbsp;
### Follow
Camera will smoothly rotate behind the player when outside the free zone area. If the player is facing the camera, then the camera won’t try to rotate behind the player and it will simply follow its position. The camera will also reset to its default position behind the player when there's no input from the player.


Controller support was one of the goals for this game so it was crucial that the camera could follow the player smoothly when there’s no camera input.

<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/CameraReset.gif" class="img-col">
    <img src="content/projects/pack-up-and-leaf/assets/NormalToSupersonic.gif" class="img-col">
</p>

&nbsp;
### Free Move Zone
The free move zone is an area where the player can move with very little to no camera reaction. The camera targets this area which will move towards the player position depending on how far it is from the center. In our case, we’re just using two easing functions to lerp the position depending if you’re inside or outside the zone.

<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/FreeMoveZone.gif" class="img-col">
</p>

```cs
private void UpdateFocusPoint()
{
    Vector3 targetPoint = target.position;
    if (focusRadius > 0f)
    {
        float distance = (targetPoint - _focusPoint).magnitude;
        float t = 1f;
        if (distance > 0.001f && focusCentering > 0f)
        {
            t = Mathf.Pow(1f - focusCentering, Time.unscaledDeltaTime);
        }
        if (distance > focusRadius)
        {
            t = Mathf.Min(t, focusRadius / distance);
        }
        _focusPoint = Vector3.Lerp(targetPoint, _focusPoint, t);
    }
    else
    {
        _focusPoint = targetPoint;
    }
}
```

&nbsp;
### Occlusion
<a href="https://github.com/jsfoao/pack-up-and-leaf/blob/main/Assets/_Game/Scripts/Components/Camera/CameraCollision.cs" target="_blank" rel="noopener noreferrer">CameraCollision.cs</a>

If there’s an object between the target and the camera, the camera will move closer to the target in order to clear it and so it’s not in front anymore. Both collision and occlusion were solved using the following method:

* 5 Raycasts are "shot" from the camera to the target's position: 4 from each corner of the camera frustum and 1 from the center.
* The shortest distance from the hit points to the target is calculated and the camera radius is set to this value.

<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/camcollision.png" class="img-col">
    <img src="content/projects/pack-up-and-leaf/assets/collision-clip.gif" class="img-col">
</p>

## Interaction System
Using events to invoke different interactions depending on the interacted object. This allowed for a very modular and reusable system.

When interacting with chests, loot will spawn around the object between a range of distance and the instances will never overlap.

<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/LootDroppingAndInteractable.gif" class="img-col">
    <img src="content/projects/pack-up-and-leaf/assets/interact chest.gif" class="img-col">
</p>

&nbsp;
### Chest Interaction
<p class="img-row cols-3">
    <img src="content/projects/pack-up-and-leaf/assets/RandomLoot.gif" class="img-col">
</p>

```cs
public void DropRandom()
{
    int lootToSpawn = Random.Range(lootRange.Min, lootRange.Max);
    for (int i = 0; i < lootToSpawn; i++)
    {
        float size = Random.Range(distanceRange.Min, distanceRange.Max);
        
        float angle = i * (2 * Mathf.PI / lootToSpawn);
        float xPos = Mathf.Cos(angle);
        float zPos = Mathf.Sin(angle);
        
        Vector3 position = transform.position + new Vector3(xPos, 0f, zPos) * size + Vector3.up *spawnOffset;

        if (loots.Length == 0) { return; }
        int index = RandomIndex();
        GameObject instance = Instantiate(loots[index].Prefab, position, Quaternion.identity);
    }
}
```

## Main Takeaways
* Scriptable Objects: This was the first big project where I tried to use scriptable objects for events and other runtime functionality as described in the link below. Since this approach heavily depends on scene references, because of serialization issues when pushing changes, many times these references were lost and had to be set up again. This caused valuable time to be lost doing double and sometimes triple work. The modularity also makes it easy for changes to be made, sometimes even accidentally. Keeping some functionality strictly in code would've avoided some of these issues.
<a href="https://www.youtube.com/watch?v=raQ3iHhE_Kk&t=2100s" target="_blank" rel="noopener noreferrer">Game Architecture with Scriptable Objects</a>

* Folder and naming conventions: Unfortunately, not enough time was reserved to plan folder structure and naming conventions in the beginning of this project so as one can expect, the folder organization and naming got messy.