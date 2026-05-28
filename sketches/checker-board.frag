//checkerboard to check if my brain is still sane. 

#ifdef GL_ES
precision mediump float; 
#endif

//uniforms: 
uniform vec2 u_resolution;
uniform float u_time; 

void main(){
	vec3 color = vec3(0.0).rgb; //default to black.
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	vec2 pos = gl_FragCoord.xy; 

	float size = 20.0;  
	//int x = int(floor(gl_pos.x / 20.0))

	float x = step(1.0, mod(pos.x / size, 2.0)); 
	float y = step(1.0, mod(pos.y / size, 2.0)); 

	//doing this is the same as an 'and' condition.
	float xy = x * y; 

	color = vec3(xy); 
	 

	/*
	
	if (mod(pos.x / size, 2.0)<1.0 && mod(pos.y / size, 2.0)<1.0){
		color = vec3(1.0); 
	}
	else{
		color = vec3(0.0); 
	}
	*/

	/*

	if (mod(uv.x * u_resolution.x, 2.0)<1.0 && mod(uv.y * u_resolution.y, 2.0)<1.0){
		color.r = 0.0; 
	}
	else{
		color.r = 1.0; 
	}

	*/

	gl_FragColor = vec4(color, 1.0); 
}
