//try to get a shader to remember its previous state; may, 2026.

#ifdef GL_ES
precision mediump float; 
#endif

//uniforms: 
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_frame; 

//for ping pong: 
uniform sampler2D u_doubleBuffer0;

void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution;

	vec3 color = vec3(0.0); //initiate color as black for everything.

	//starting state: 
	if(u_frame < 10) {
		//this is the starting state. 
		if(mod(gl_FragCoord.x, 2.0) == 0.0) {
			color.r = 1.0;
		} else {
			color.r = 0.0;
		}
	} else {

#ifdef DOUBLE_BUFFER_0
	//get history for each pixel for its previous state. 
		vec4 prev = texture2D(u_doubleBuffer0, uv).rgba; 

	//set color currently to what it was before.
		color = vec3(prev.rgb); 

	//do manipulations here:

	//let's do a flashing thing. 
		if(color.r < 0.5) {
			color.r = 1.0;
		} else {
			color.r = 0.0;
		}

#else
	//show buffer as is.  
		color = texture2D(u_doubleBuffer0, uv).rgb; 

#endif
	}
	//output: 
	gl_FragColor = vec4(color, 1.0);
}
