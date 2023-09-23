var lightColorParameters = {
    'color': "#FF0000"
};
let curLightColor = lightColorParameters['color'];
function adjustLightColorEffect(){
    let light = getDirectionalLight();
    light.color = new THREE.Color(curLightColor);
}
function resetLightColorEffect(){
    let light = getDirectionalLight();
    light.color = new THREE.Color(0xffffff);
}
function updateLightColorEffect(){
    if(lightColorParameters['color'] != curLightColor){
        curLightColor = lightColorParameters['color'];
        adjustLightColorEffect();
    }
}