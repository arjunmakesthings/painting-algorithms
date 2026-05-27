//getting a brush to move using ping-ponging; may, 2026. 

#ifdef GL_ES
	precision mediump float; 
#endif

//uniforms
uniform vec2 u_resolution; 
uniform float u_time; 

//a shader does not have memory. it is essentially state-less, and only performs drawing operations on all pixels at once.

//we want to use a buffer to store fragment-data from the previous frame, and then read it while drawing the next one.

//the glslViewer documentation has a special uniform for ping pong buffers:
uniform sampler2D u_doubleBuffer0; 

//variables:
float size = 0.02;

//helpers:
float random (float n){
	float multiplier = 1.0; 
	return fract(sin(n)*multiplier); 
}

void main(){
	//flip coordinates so that canvas is 0,0 at top-left.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy; 
	uv.y = 1.0 - uv.y; 

	vec3 color = vec3(0.0); //start default as black (also color of canvas). 
	
	//include only if double-buffer is defined. this keeps flipping between passes. 
	#ifdef DOUBLE_BUFFER_0
	//do computing here:

		//read from previous frame. 
		vec3 prev = texture2D(u_doubleBuffer0, uv).rgb; 

		//pick a random point to start a stroke.
		float x = 0.5; 
		float y = sin(u_time) * 0.5 + 0.5;
		vec2 xy = vec2(x, y); 
		// vec2 xy = vec2(random(u_time), random(fract(cos(u_time)*10.0)));

		//see distance from that point: 
		float d = distance(uv, xy); 

		//rules: 
		if (prev.r > 0.5){
			//if previous was colored white, keep white.
			color = vec3(1.0);
		}
		else {
			if (d<size){
				//paint new point: 
				color = vec3(1.0); 
			}
			else{
				//don't do anything.
				color = vec3(0.0); 
			}
		}

	#else
	//pass color to texture:
		color = texture2D(u_doubleBuffer0, uv).rgb; 

	#endif

	//output:
	gl_FragColor = vec4(color, 1.0); 
}
