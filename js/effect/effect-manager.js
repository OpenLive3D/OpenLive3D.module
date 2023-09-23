// effect

function initEffect(){
}

function getAllEffects(){
    return {
        "BACKGROUND": [{
            'key': 'BG_COLOR',
            'title': 'Background Color',
            'describe': 'Accept Color Code with "#" or "rgba", "hsla"',
            'type': 'background'
        }, {
            'key': 'BG_UPLOAD',
            'title': 'Upload Image',
            'describe': 'Upload an image as your background',
            'type': 'background'
        }],
        "Screen Modification": [{
            'key': 'BLUR',
            'title': 'Blur',
            'describe': 'Blur the output screen',
            'type': 'screen', // screen | object | particle
            'enableEffect': enableBlurEffect,
            'disableEffect': disableBlurEffect,
            'updateEffect': updateBlurEffect,
            'parameters': blurParameters
        }],
        "Flare / Lighting": [{
            'key': 'LIGHT_COLOR',
            'title': 'Direct Light Color',
            'describe': 'The color of the directional light',
            'type': 'flare', // screen | object | particle
            'enableEffect': adjustLightColorEffect,
            'disableEffect': resetLightColorEffect,
            'updateEffect': updateLightColorEffect,
            'parameters': lightColorParameters
        }],
        "Particle Effects": [{
            'key': 'RAIN',
            'title': 'Rain',
            'describe': 'Basic raining',
            'type': 'particle', // screen | object | particle
            'enableEffect': enableRainEffect,
            'disableEffect': disableRainEffect,
            'updateEffect': updateRainEffect,
            'parameters': rainParameters
        }]
    }
}