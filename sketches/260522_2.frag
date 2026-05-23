//get a brush to move; may, 2026.

#ifdef GL_ES
precision mediump float;
#endif

//uniforms:
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_doubleBuffer0;

//since all pixels of a shader get processed every single frame,
//there is no way for a shader to retain memory.
//therefore, we ping pong between two shaders.

//variables:
float size = 0.002;

//helpers:
float random(float n) {
    float multiplier = 1.0;
    return fract(sin(n) * multiplier);
}

//remember that the entire shader runs once per frame.
//this means all pixels get processed.
void main() {

    //flip coordinates so that canvas is 0,0 at top-left.
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;

    vec3 color = vec3(0.0);

    #ifdef DOUBLE_BUFFER_0

        //colours from the previous frame:
    vec3 prev = texture2D(u_doubleBuffer0, uv).rgb;

        //pick a random point to start a stroke:
    vec2 xy = vec2(random(u_time), 0.5);

        //distance from current pixel to stroke point:
    float d = distance(uv, xy);

        //if previously white, keep white:
    if(prev.r > 0.5) {
        color = vec3(1.0);
    }

        //otherwise draw a new point:
    else if(d < size) {
        color = vec3(1.0);
    }

        //otherwise black:
    else {
        color = vec3(0.0);
    }

    #else

        //display buffer:
    color = texture2D(u_doubleBuffer0, uv).rgb;

    #endif

    //output:
    gl_FragColor = vec4(color, 1.0);
}