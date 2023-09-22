
function adjustLightColorEffect(){
    let light = getDirectionalLight();
    light.color = new THREE.Color(0xff0000);
}
function resetLightColorEffect(){
    let light = getDirectionalLight();
    light.color = new THREE.Color(0xffffff);
}